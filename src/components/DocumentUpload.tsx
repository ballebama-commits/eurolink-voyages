import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { validateFile } from '../lib/validation';
import { supabase } from '../lib/supabase';

interface DocumentUploadProps {
  applicationId?: string;
  documentType: string;
  label: string;
  required?: boolean;
  onUploadComplete?: (fileUrl: string, fileName: string) => void;
}

export default function DocumentUpload({ 
  applicationId, 
  documentType, 
  label, 
  required = false,
  onUploadComplete 
}: DocumentUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setError('');
    const file = acceptedFiles[0];
    
    if (!file) return;

    // Validate file
    const validation = validateFile(file);
    if (!validation.valid) {
      setError(validation.message);
      return;
    }

    setUploading(true);

    try {
      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${applicationId || 'temp'}/${documentType}-${Date.now()}.${fileExt}`;
      const filePath = fileName;

      const { error: uploadError, data } = await supabase.storage
        .from('application-documents')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('application-documents')
        .getPublicUrl(filePath);

      // Save to database if applicationId exists
      if (applicationId) {
        const { error: dbError } = await supabase
          .from('documents')
          .insert({
            application_id: applicationId,
            document_type: documentType,
            file_url: publicUrl,
            file_name: file.name,
            file_size: file.size,
            mime_type: file.type,
          });

        if (dbError) {
          throw dbError;
        }
      }

      setUploaded(true);
      setFileName(file.name);
      onUploadComplete?.(publicUrl, file.name);
    } catch (err: any) {
      setError(err.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  }, [applicationId, documentType, onUploadComplete]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'application/pdf': ['.pdf'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
  });

  const removeFile = () => {
    setUploaded(false);
    setFileName('');
    setError('');
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-ink-300">
        {label} {required && <span className="text-red-400">*</span>}
      </label>

      {!uploaded ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
            isDragActive
              ? 'border-brand-500 bg-brand-600/5'
              : error
              ? 'border-red-500/50 bg-red-600/5'
              : 'border-white/10 hover:border-brand-500/50 hover:bg-white/5'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="w-8 h-8 text-ink-400 mx-auto mb-2" />
          {uploading ? (
            <p className="text-sm text-ink-400">Uploading...</p>
          ) : isDragActive ? (
            <p className="text-sm text-brand-400">Drop the file here...</p>
          ) : (
            <>
              <p className="text-sm text-ink-300 mb-1">
                Drag & drop or <span className="text-brand-400 font-medium">click to upload</span>
              </p>
              <p className="text-xs text-ink-500">PDF, JPG, PNG, DOC (max 10MB)</p>
            </>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <FileText className="w-4 h-4 text-ink-400" />
          <span className="text-sm text-ink-300 flex-1 truncate">{fileName}</span>
          <button
            onClick={removeFile}
            className="text-ink-400 hover:text-red-400 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
