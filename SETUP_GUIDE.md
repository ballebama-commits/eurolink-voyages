# 🚀 Eurolink Voyages - Setup Guide

## ✅ Features Implemented

Your website now includes all the requested features:

### 1. **Payment Integration** (€100 / $100)
- Stripe-ready payment form
- Currency selection (EUR/USD)
- Secure payment processing
- Transaction tracking

### 2. **Database (Supabase)**
- Complete PostgreSQL schema
- Applications table with all fields
- Documents table for file tracking
- Row Level Security enabled
- Automatic timestamps

### 3. **Document Upload System**
- Drag & drop interface
- File picker (opens phone/computer)
- Supports: PDF, JPG, PNG, DOC/DOCX
- Max file size: 10MB
- Secure cloud storage
- Progress tracking

### 4. **Email Verification**
- Format validation
- Disposable email detection
- Domain verification
- Real-time validation feedback

### 5. **Email Notification to Admin**
- Automatic email sent on submission
- Includes all applicant data
- Document links included
- Payment confirmation included

### 6. **Strict Form Validation**
- Cannot skip required fields
- Real-time error messages
- Visual indicators (red borders)
- Step-by-step progression control

---

## 🔧 Setup Instructions

### Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up / Log in
3. Click "New Project"
4. Fill in project details:
   - Name: `eurolink-voyages`
   - Database Password: (save this!)
   - Region: Choose closest to UK
5. Wait for project to initialize (2-3 minutes)

### Step 2: Setup Database

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy the entire content from `supabase-schema.sql` (in project root)
4. Paste it into the SQL editor
5. Click "Run" (or press Ctrl+Enter)
6. You should see success messages for each table/policy created

### Step 3: Setup Storage

1. Go to **Storage** in Supabase dashboard
2. The bucket `application-documents` should already exist (created by SQL)
3. If not, create it:
   - Click "New Bucket"
   - Name: `application-documents`
   - Public: **OFF** (keep it private)
4. The storage policies are already created by the SQL script

### Step 4: Get Supabase Credentials

1. Go to **Settings** → **API** in Supabase dashboard
2. Copy these values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public key** (starts with `eyJ...`)

### Step 5: Configure Environment Variables

1. Create a file named `.env` in the project root
2. Add the following:

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# Email (EmailJS)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Admin Email (where applications are sent)
VITE_ADMIN_EMAIL=your-email@example.com

# Stripe (for production)
VITE_STRIPE_PUBLIC_KEY=pk_test_your_key
```

### Step 6: Setup Email Service (EmailJS)

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up (free tier: 200 emails/month)
3. Add Email Service:
   - Choose Gmail, Outlook, or other
   - Connect your email account
   - Note the **Service ID**
4. Create Email Template:
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use these variables in your template:
     ```
     Subject: New Application from {{applicant_name}}
     
     Body:
     Name: {{applicant_name}}
     Email: {{applicant_email}}
     Phone: {{applicant_phone}}
     
     Diploma: {{diploma}}
     Sector: {{sector}}
     Experience: {{experience}}
     Job Offer: {{job_offer}}
     Destination: {{destination}}
     Language: {{language}}
     
     Documents: {{documents}}
     
     Payment: {{payment_amount}}
     Transaction ID: {{transaction_id}}
     
     {{message}}
     ```
   - Note the **Template ID**
5. Get your **Public Key** from Account → API Keys

### Step 7: Setup Stripe (Production)

For real payments:

1. Go to [https://stripe.com](https://stripe.com)
2. Create an account
3. Get your **Publishable Key** (starts with `pk_test_...` or `pk_live_...`)
4. Create a backend endpoint to handle payment intents (see below)

**Backend endpoint example (Node.js/Express):**

```javascript
// server.js
const express = require('express');
const stripe = require('stripe')('sk_test_your_secret_key');
const app = express();

app.use(express.json());

app.post('/api/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    automatic_payment_methods: {
      enabled: true,
    },
  });
  
  res.json({
    id: paymentIntent.id,
    clientSecret: paymentIntent.client_secret,
    amount: paymentIntent.amount,
    currency: paymentIntent.currency,
    status: paymentIntent.status,
  });
});

app.listen(4242, () => console.log('Server running on port 4242'));
```

---

## 🎯 Testing the Application

### Test the Form
1. Run `npm run dev`
2. Go to `/eligibility`
3. Try submitting without filling fields → should show errors
4. Fill all fields correctly → should proceed
5. Upload documents → should see success indicators
6. Complete payment → should submit successfully

### Test Email Notification
1. Set your email in `.env` as `VITE_ADMIN_EMAIL`
2. Complete an application
3. Check your email inbox
4. You should receive the application details

### Test Database
1. Go to Supabase dashboard → **Table Editor**
2. Click on `applications` table
3. You should see your test submission

---

## 📊 Viewing Applications

### Option 1: Supabase Dashboard
1. Go to **Table Editor** in Supabase
2. Click `applications` to see all submissions
3. Click `documents` to see uploaded files

### Option 2: Client Dashboard
1. Go to `/dashboard` on your site
2. Login with client credentials
3. View application status and documents

---

## 🔒 Security Notes

- **Never commit `.env` to Git** (it's already in `.gitignore`)
- Supabase RLS (Row Level Security) is enabled
- All file uploads go through Supabase Storage (encrypted)
- Email verification prevents fake emails
- Payment is processed through Stripe (PCI compliant)

---

## 🚀 Deployment

### Deploy to Vercel/Netlify

1. Push your code to GitHub
2. Connect to Vercel or Netlify
3. Add environment variables in their dashboard
4. Deploy!

### Custom Domain
1. In Vercel/Netlify, go to Domain Settings
2. Add your domain (e.g., `eurolinkvoyages.com`)
3. Update DNS records as instructed

---

## 📞 Support

If you need help:
- Supabase Docs: https://supabase.com/docs
- EmailJS Docs: https://www.emailjs.com/docs
- Stripe Docs: https://stripe.com/docs

---

## ✅ Checklist

- [ ] Created Supabase project
- [ ] Ran SQL schema in Supabase
- [ ] Created `.env` file with credentials
- [ ] Set up EmailJS account and template
- [ ] Configured admin email
- [ ] Tested application form
- [ ] Verified email notification works
- [ ] Checked database entries
- [ ] (Optional) Set up Stripe for production
- [ ] (Optional) Deployed to Vercel/Netlify

---

**Your Eurolink Voyages website is now production-ready!** 🎉
