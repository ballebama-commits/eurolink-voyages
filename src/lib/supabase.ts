import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Application {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  diploma: string;
  sector: string;
  experience_years: string;
  has_job_offer: boolean;
  destination: string;
  language_level: string;
  status: 'pending' | 'reviewing' | 'approved' | 'rejected';
  payment_status: 'pending' | 'paid' | 'failed';
  payment_amount: number;
  payment_currency: string;
  stripe_payment_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Document {
  id: string;
  application_id: string;
  document_type: string;
  file_url: string;
  file_name: string;
  file_size: number;
  mime_type: string;
  uploaded_at: string;
}
