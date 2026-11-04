import emailjs from '@emailjs/browser';

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

export async function sendApplicationEmail(data: EmailData): Promise<boolean> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn('⚠️ EmailJS not configured. Check your .env file.');
    return false;
  }

  const templateParams = {
    to_email: data.to,
    subject: data.subject,
    name: data.applicationData.fullName,
    email: data.applicationData.email,
    phone: data.applicationData.phone,
    destination: data.applicationData.destination,
    amount: `${data.paymentInfo.amount} ${data.paymentInfo.currency}`,
    diploma: data.applicationData.diploma,
    sector: data.applicationData.sector,
    experience: data.applicationData.experience,
    job_offer: data.applicationData.hasJobOffer,
    language: data.applicationData.languageLevel,
    documents: data.documents.length > 0 ? data.documents.join(', ') : 'No documents',
    transaction_id: data.paymentInfo.transactionId,
    message: `New application from ${data.applicationData.fullName}`,
    current_date: new Date().toLocaleDateString('en-GB')
  };

  try {
    console.log('📧 Sending email...');
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log('✅ Email sent successfully!', response.status, response.text);
    return true;
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return false;
  }
}