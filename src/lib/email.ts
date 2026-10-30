// Email service using EmailJS (free tier available)
// Alternative: You can use Resend, SendGrid, or your own backend

export interface EmailData {
  to: string;
  subject: string;
  applicationData: {
    fullName: string;
    email: string;
    phone: string;
    diploma: string;
    sector: string;
    experience: string;
    hasJobOffer: string;
    destination: string;
    languageLevel: string;
  };
  documents: string[];
  paymentInfo: {
    amount: number;
    currency: string;
    transactionId: string;
  };
}

// Using EmailJS - Sign up at https://www.emailjs.com/
// Get your service_id, template_id, and public_key
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

export async function sendApplicationEmail(data: EmailData): Promise<boolean> {
  try {
    // Using fetch to EmailJS API
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          to_email: data.to,
          subject: data.subject,
          applicant_name: data.applicationData.fullName,
          applicant_email: data.applicationData.email,
          applicant_phone: data.applicationData.phone,
          diploma: data.applicationData.diploma,
          sector: data.applicationData.sector,
          experience: data.applicationData.experience,
          job_offer: data.applicationData.hasJobOffer,
          destination: data.applicationData.destination,
          language: data.applicationData.languageLevel,
          documents: data.documents.join(', '),
          payment_amount: `${data.paymentInfo.amount} ${data.paymentInfo.currency}`,
          transaction_id: data.paymentInfo.transactionId,
          message: `New application received from ${data.applicationData.fullName}. Please review the documents in the dashboard.`,
        },
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

// Alternative: Using Resend (requires backend)
// export async function sendWithResend(data: EmailData) {
//   const response = await fetch('/api/send-email', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   return response.ok;
// }
