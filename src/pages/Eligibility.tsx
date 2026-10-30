import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Check, AlertCircle, CreditCard, Upload } from 'lucide-react';
import { useLanguage } from '../i18n/translations';
import { validateEmail, validatePhone } from '../lib/validation';
import { supabase } from '../lib/supabase';
import { sendApplicationEmail } from '../lib/email';
import DocumentUpload from '../components/DocumentUpload';
import PaymentForm from '../components/PaymentForm';
import toast from 'react-hot-toast';

const steps = [
  { id: 1, title: { en: 'Personal Info', fr: 'Infos personnelles', ru: 'Личные данные', ar: 'المعلومات الشخصية' } },
  { id: 2, title: { en: 'Education & Experience', fr: 'Formation & Expérience', ru: 'Образование и опыт', ar: 'التعليم والخبرة' } },
  { id: 3, title: { en: 'Destination & Language', fr: 'Destination & Langue', ru: 'Направление и язык', ar: 'الوجهة واللغة' } },
  { id: 4, title: { en: 'Upload Documents', fr: 'Télécharger Documents', ru: 'Загрузить документы', ar: 'تحميل الوثائق' } },
  { id: 5, title: { en: 'Payment', fr: 'Paiement', ru: 'Оплата', ar: 'الدفع' } },
];

export default function Eligibility() {
  const { t, language, dir } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emailVerified, setEmailVerified] = useState(false);
  const [verifyingEmail, setVerifyingEmail] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    diploma: '',
    sector: '',
    experienceYears: '',
    hasJobOffer: '',
    destination: '',
    languageLevel: '',
  });

  const [documents, setDocuments] = useState({
    passport: '',
    diploma: '',
    criminalRecord: '',
    cv: '',
    medical: '',
    photos: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    transactionId: '',
    amount: 100,
    currency: 'EUR' as 'EUR' | 'USD',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
    if (field === 'email') setEmailVerified(false);
  };

  const verifyEmail = async () => {
    if (!formData.email) {
      setErrors(prev => ({ ...prev, email: 'Please enter an email address' }));
      return;
    }

    const validation = validateEmail(formData.email);
    if (!validation.valid) {
      setErrors(prev => ({ ...prev, email: validation.message }));
      return;
    }

    setVerifyingEmail(true);
    
    // Simulate email verification (in production, send actual verification email)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setEmailVerified(true);
    setVerifyingEmail(false);
    toast.success('Email verified successfully!');
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!emailVerified) newErrors.email = 'Please verify your email address';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      else {
        const phoneValidation = validatePhone(formData.phone);
        if (!phoneValidation.valid) newErrors.phone = phoneValidation.message;
      }
    }

    if (step === 2) {
      if (!formData.diploma) newErrors.diploma = 'Please select your diploma';
      if (!formData.sector) newErrors.sector = 'Please select your sector';
      if (!formData.experienceYears) newErrors.experienceYears = 'Please select your experience';
      if (!formData.hasJobOffer) newErrors.hasJobOffer = 'Please indicate if you have a job offer';
    }

    if (step === 3) {
      if (!formData.destination) newErrors.destination = 'Please select a destination';
      if (!formData.languageLevel) newErrors.languageLevel = 'Please select your language level';
    }

    if (step === 4) {
      if (!documents.passport) newErrors.passport = 'Passport is required';
      if (!documents.cv) newErrors.cv = 'CV is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handlePaymentSuccess = async (transactionId: string) => {
    setPaymentInfo(prev => ({ ...prev, transactionId }));

    try {
      // Save application to database
      const { data: application, error: appError } = await supabase
        .from('applications')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          diploma: formData.diploma,
          sector: formData.sector,
          experience_years: formData.experienceYears,
          has_job_offer: formData.hasJobOffer === 'Yes',
          destination: formData.destination,
          language_level: formData.languageLevel,
          payment_status: 'paid',
          payment_amount: paymentInfo.amount,
          payment_currency: paymentInfo.currency,
          stripe_payment_id: transactionId,
          email_verified: emailVerified,
          status: 'pending',
        })
        .select()
        .single();

      if (appError) throw appError;

      setApplicationId(application.id);

      // Send email notification to admin
      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'admin@eurolinkvoyages.com';
      await sendApplicationEmail({
        to: adminEmail,
        subject: `New Application: ${formData.fullName}`,
        applicationData: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          diploma: formData.diploma,
          sector: formData.sector,
          experience: formData.experienceYears,
          hasJobOffer: formData.hasJobOffer,
          destination: formData.destination,
          languageLevel: formData.languageLevel,
        },
        documents: Object.values(documents).filter(d => d),
        paymentInfo: {
          amount: paymentInfo.amount,
          currency: paymentInfo.currency,
          transactionId,
        },
      });

      setSubmitted(true);
      toast.success('Application submitted successfully!');
    } catch (error: any) {
      console.error('Submission error:', error);
      toast.error('Failed to submit application. Please try again.');
    }
  };

  if (submitted) {
    return (
      <main dir={dir} className="pt-20 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Application Submitted!</h1>
            <p className="text-ink-400 mb-2">Thank you, {formData.fullName}!</p>
            <p className="text-ink-400 mb-6">
              Your application has been received and our team will review it within 24 hours.
              You will receive an email confirmation at <strong className="text-white">{formData.email}</strong>.
            </p>
            <div className="glass rounded-xl p-4 text-left space-y-2 mb-8">
              <p className="text-sm text-ink-400">Application ID: <span className="text-white font-mono">{applicationId}</span></p>
              <p className="text-sm text-ink-400">Payment: <span className="text-emerald-400">Confirmed</span></p>
              <p className="text-sm text-ink-400">Status: <span className="text-gold-400">Under Review</span></p>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main dir={dir} className="pt-20 min-h-screen">
      <section className="relative py-24 hero-gradient grid-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('eligibility.title')}</h1>
            <p className="text-lg text-ink-400">{t('eligibility.subtitle')}</p>
          </motion.div>

          {/* Progress */}
          <div className="flex items-center justify-between mb-12 max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  currentStep >= step.id ? 'bg-brand-600 text-white' : 'bg-white/5 text-ink-500 border border-white/10'
                }`}>
                  {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 ${currentStep > step.id ? 'bg-brand-500' : 'bg-white/10'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <motion.div layout className="glass rounded-2xl p-8 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                
                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6">{steps[0].title[language]}</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={e => updateField('fullName', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.fullName ? 'border-red-500' : 'border-white/10'} text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Email Address *</label>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          value={formData.email}
                          onChange={e => updateField('email', e.target.value)}
                          className={`flex-1 px-4 py-3 rounded-xl bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all`}
                          placeholder="john@example.com"
                          disabled={emailVerified}
                        />
                        <button
                          type="button"
                          onClick={verifyEmail}
                          disabled={verifyingEmail || emailVerified}
                          className={`px-6 py-3 rounded-xl font-medium transition-all ${
                            emailVerified
                              ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                              : 'bg-brand-600 text-white hover:bg-brand-500'
                          } disabled:opacity-50`}
                        >
                          {verifyingEmail ? 'Verifying...' : emailVerified ? 'Verified ✓' : 'Verify'}
                        </button>
                      </div>
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Phone (WhatsApp) *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => updateField('phone', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all`}
                        placeholder="+44 7123 456789"
                      />
                      {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                )}

                {/* Step 2: Education & Experience */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6">{steps[1].title[language]}</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Last Diploma Obtained *</label>
                      <select
                        value={formData.diploma}
                        onChange={e => updateField('diploma', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.diploma ? 'border-red-500' : 'border-white/10'} text-white focus:outline-none focus:border-brand-500/50 transition-all`}
                      >
                        <option value="" className="bg-ink-900">Select...</option>
                        <option value="none" className="bg-ink-900">No formal diploma</option>
                        <option value="highschool" className="bg-ink-900">High School / Baccalaureate</option>
                        <option value="bachelor" className="bg-ink-900">Bachelor's Degree</option>
                        <option value="master" className="bg-ink-900">Master's Degree</option>
                        <option value="phd" className="bg-ink-900">PhD / Doctorate</option>
                        <option value="vocational" className="bg-ink-900">Vocational / Technical Certificate</option>
                      </select>
                      {errors.diploma && <p className="text-red-400 text-sm mt-1">{errors.diploma}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Sector of Activity *</label>
                      <select
                        value={formData.sector}
                        onChange={e => updateField('sector', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.sector ? 'border-red-500' : 'border-white/10'} text-white focus:outline-none focus:border-brand-500/50 transition-all`}
                      >
                        <option value="" className="bg-ink-900">Select...</option>
                        <option value="healthcare" className="bg-ink-900">Healthcare</option>
                        <option value="hospitality" className="bg-ink-900">Hospitality & Restaurant</option>
                        <option value="construction" className="bg-ink-900">Construction / BTP</option>
                        <option value="agriculture" className="bg-ink-900">Agriculture</option>
                        <option value="it" className="bg-ink-900">IT & Technology</option>
                        <option value="engineering" className="bg-ink-900">Engineering</option>
                        <option value="logistics" className="bg-ink-900">Logistics & Transport</option>
                        <option value="finance" className="bg-ink-900">Finance & Banking</option>
                        <option value="other" className="bg-ink-900">Other</option>
                      </select>
                      {errors.sector && <p className="text-red-400 text-sm mt-1">{errors.sector}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Years of Professional Experience *</label>
                      <select
                        value={formData.experienceYears}
                        onChange={e => updateField('experienceYears', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.experienceYears ? 'border-red-500' : 'border-white/10'} text-white focus:outline-none focus:border-brand-500/50 transition-all`}
                      >
                        <option value="" className="bg-ink-900">Select...</option>
                        <option value="0-1" className="bg-ink-900">Less than 1 year</option>
                        <option value="1-3" className="bg-ink-900">1-3 years</option>
                        <option value="3-5" className="bg-ink-900">3-5 years</option>
                        <option value="5-10" className="bg-ink-900">5-10 years</option>
                        <option value="10+" className="bg-ink-900">10+ years</option>
                      </select>
                      {errors.experienceYears && <p className="text-red-400 text-sm mt-1">{errors.experienceYears}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Do you already have a job offer in Europe? *</label>
                      <div className="flex gap-4">
                        {['Yes', 'No'].map(opt => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => updateField('hasJobOffer', opt)}
                            className={`flex-1 py-3 rounded-xl border transition-all ${
                              formData.hasJobOffer === opt
                                ? 'bg-brand-600/20 border-brand-500/50 text-white'
                                : 'bg-white/5 border-white/10 text-ink-400 hover:border-white/20'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {errors.hasJobOffer && <p className="text-red-400 text-sm mt-1">{errors.hasJobOffer}</p>}
                    </div>
                  </div>
                )}

                {/* Step 3: Destination & Language */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6">{steps[2].title[language]}</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Preferred Destination Country *</label>
                      <select
                        value={formData.destination}
                        onChange={e => updateField('destination', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.destination ? 'border-red-500' : 'border-white/10'} text-white focus:outline-none focus:border-brand-500/50 transition-all`}
                      >
                        <option value="" className="bg-ink-900">Select...</option>
                        <option value="germany" className="bg-ink-900">🇩🇪 Germany</option>
                        <option value="france" className="bg-ink-900">🇫🇷 France</option>
                        <option value="belgium" className="bg-ink-900">🇧🇪 Belgium</option>
                        <option value="italy" className="bg-ink-900">🇮🇹 Italy</option>
                        <option value="poland" className="bg-ink-900">🇵🇱 Poland</option>
                        <option value="greece" className="bg-ink-900">🇬🇷 Greece</option>
                        <option value="luxembourg" className="bg-ink-900">🇱🇺 Luxembourg</option>
                      </select>
                      {errors.destination && <p className="text-red-400 text-sm mt-1">{errors.destination}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Language Proficiency *</label>
                      <select
                        value={formData.languageLevel}
                        onChange={e => updateField('languageLevel', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.languageLevel ? 'border-red-500' : 'border-white/10'} text-white focus:outline-none focus:border-brand-500/50 transition-all`}
                      >
                        <option value="" className="bg-ink-900">Select...</option>
                        <option value="beginner" className="bg-ink-900">Beginner (A1-A2)</option>
                        <option value="intermediate" className="bg-ink-900">Intermediate (B1-B2)</option>
                        <option value="advanced" className="bg-ink-900">Advanced (C1-C2)</option>
                        <option value="native" className="bg-ink-900">Native Speaker</option>
                      </select>
                      {errors.languageLevel && <p className="text-red-400 text-sm mt-1">{errors.languageLevel}</p>}
                    </div>
                  </div>
                )}

                {/* Step 4: Document Upload */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6">{steps[3].title[language]}</h3>
                    <p className="text-ink-400 text-sm mb-4">Upload your documents below. Click on each box to select files from your device.</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <DocumentUpload
                        applicationId={applicationId}
                        documentType="passport"
                        label="Passport Scan *"
                        required
                        onUploadComplete={(url) => setDocuments(prev => ({ ...prev, passport: url }))}
                      />
                      <DocumentUpload
                        applicationId={applicationId}
                        documentType="cv"
                        label="CV (Europass format) *"
                        required
                        onUploadComplete={(url) => setDocuments(prev => ({ ...prev, cv: url }))}
                      />
                      <DocumentUpload
                        applicationId={applicationId}
                        documentType="diploma"
                        label="Diploma / Certificate"
                        onUploadComplete={(url) => setDocuments(prev => ({ ...prev, diploma: url }))}
                      />
                      <DocumentUpload
                        applicationId={applicationId}
                        documentType="criminal-record"
                        label="Criminal Record"
                        onUploadComplete={(url) => setDocuments(prev => ({ ...prev, criminalRecord: url }))}
                      />
                      <DocumentUpload
                        applicationId={applicationId}
                        documentType="medical"
                        label="Medical Certificate"
                        onUploadComplete={(url) => setDocuments(prev => ({ ...prev, medical: url }))}
                      />
                      <DocumentUpload
                        applicationId={applicationId}
                        documentType="photos"
                        label="Passport Photos (4x4)"
                        onUploadComplete={(url) => setDocuments(prev => ({ ...prev, photos: url }))}
                      />
                    </div>

                    {errors.passport && <p className="text-red-400 text-sm">{errors.passport}</p>}
                    {errors.cv && <p className="text-red-400 text-sm">{errors.cv}</p>}
                  </div>
                )}

                {/* Step 5: Payment */}
                {currentStep === 5 && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">{steps[4].title[language]}</h3>
                    <div className="flex gap-4 mb-6">
                      <button
                        onClick={() => setPaymentInfo(prev => ({ ...prev, currency: 'EUR' }))}
                        className={`flex-1 py-3 rounded-xl border transition-all ${
                          paymentInfo.currency === 'EUR'
                            ? 'bg-brand-600/20 border-brand-500/50 text-white'
                            : 'bg-white/5 border-white/10 text-ink-400'
                        }`}
                      >
                        € EUR
                      </button>
                      <button
                        onClick={() => setPaymentInfo(prev => ({ ...prev, currency: 'USD' }))}
                        className={`flex-1 py-3 rounded-xl border transition-all ${
                          paymentInfo.currency === 'USD'
                            ? 'bg-brand-600/20 border-brand-500/50 text-white'
                            : 'bg-white/5 border-white/10 text-ink-400'
                        }`}
                      >
                        $ USD
                      </button>
                    </div>
                    <PaymentForm
                      amount={paymentInfo.amount}
                      currency={paymentInfo.currency}
                      onSuccess={handlePaymentSuccess}
                      onError={(err) => toast.error(err)}
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            {currentStep < 5 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-white/5">
                {currentStep > 1 ? (
                  <button onClick={handleBack} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-ink-300 hover:bg-white/5 transition-all">
                    <ArrowLeft className="w-4 h-4" /> {t('eligibility.prev')}
                  </button>
                ) : <div />}
                
                <button onClick={handleNext} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-primary">
                  {t('eligibility.next')} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
