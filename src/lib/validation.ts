// Email validation utility
export function validateEmail(email: string): { valid: boolean; message: string } {
  // Basic format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: 'Please enter a valid email address' };
  }

  // Check for common disposable email domains
  const disposableDomains = [
    'tempmail.com', 'throwaway.email', 'guerrillamail.com', 'mailinator.com',
    '10minutemail.com', 'tempail.com', 'fakeinbox.com', 'sharklasers.com',
    'guerrillamailblock.com', 'grr.la', 'dispostable.com', 'yopmail.com'
  ];

  const domain = email.split('@')[1]?.toLowerCase();
  if (disposableDomains.includes(domain)) {
    return { valid: false, message: 'Please use a permanent email address (not a temporary one)' };
  }

  // Check domain has valid TLD
  const tldRegex = /\.[a-z]{2,}$/i;
  if (!tldRegex.test(email)) {
    return { valid: false, message: 'Email domain appears invalid' };
  }

  return { valid: true, message: '' };
}

// Phone validation
export function validatePhone(phone: string): { valid: boolean; message: string } {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    return { valid: false, message: 'Please enter a valid phone number' };
  }
  if (phone.replace(/\D/g, '').length < 8) {
    return { valid: false, message: 'Phone number is too short' };
  }
  return { valid: true, message: '' };
}

// File validation
export function validateFile(file: File): { valid: boolean; message: string } {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = [
    'application/pdf',
    'image/jpeg',
    'image/jpg',
    'image/png',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];

  if (file.size > maxSize) {
    return { valid: false, message: 'File size must be less than 10MB' };
  }

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, message: 'Only PDF, JPG, PNG, and DOC files are allowed' };
  }

  return { valid: true, message: '' };
}
