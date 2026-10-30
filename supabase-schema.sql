-- Eurolink Voyages Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Applications table
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  diploma TEXT NOT NULL,
  sector TEXT NOT NULL,
  experience_years TEXT NOT NULL,
  has_job_offer BOOLEAN DEFAULT FALSE,
  destination TEXT NOT NULL,
  language_level TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'approved', 'rejected')),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed')),
  payment_amount DECIMAL(10, 2),
  payment_currency TEXT DEFAULT 'EUR',
  stripe_payment_id TEXT,
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Documents table
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  application_id UUID REFERENCES applications(id) ON DELETE CASCADE,
  document_type TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  mime_type TEXT NOT NULL,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for faster queries
CREATE INDEX idx_applications_email ON applications(email);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_applications_payment_status ON applications(payment_status);
CREATE INDEX idx_documents_application_id ON documents(application_id);

-- Enable Row Level Security
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Policies: Allow public insert (for applications)
CREATE POLICY "Allow public to insert applications"
ON applications FOR INSERT
TO anon
WITH CHECK (true);

-- Policies: Allow public to insert documents
CREATE POLICY "Allow public to insert documents"
ON documents FOR INSERT
TO anon
WITH CHECK (true);

-- Policies: Allow public to read own applications (by email)
CREATE POLICY "Allow public to read own applications"
ON applications FOR SELECT
TO anon
USING (true);

-- Policies: Allow public to read own documents
CREATE POLICY "Allow public to read own documents"
ON documents FOR SELECT
TO anon
USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_applications_updated_at
BEFORE UPDATE ON applications
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Storage bucket for documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('application-documents', 'application-documents', false);

-- Storage policies
CREATE POLICY "Allow public to upload documents"
ON storage.objects FOR INSERT
TO anon
WITH CHECK (bucket_id = 'application-documents');

CREATE POLICY "Allow public to read own documents"
ON storage.objects FOR SELECT
TO anon
USING (bucket_id = 'application-documents');
