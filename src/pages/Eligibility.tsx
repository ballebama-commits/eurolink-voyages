import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, User, Mail, Phone, GraduationCap, Briefcase, Globe, Check } from 'lucide-react';
import { useLanguage } from '../i18n/translations';

const steps = [
  { id: 1, title: { en: 'Personal Info', fr: 'Infos personnelles', ru: 'Личные данные', ar: 'المعلومات الشخصية' }, icon: User },
  { id: 2, title: { en: 'Education', fr: 'Formation', ru: 'Образование', ar: 'التعليم' }, icon: GraduationCap },
  { id: 3, title: { en: 'Experience', fr: 'Expérience', ru: 'Опыт', ar: 'الخبرة' }, icon: Briefcase },
  { id: 4, title: { en: 'Language & Destination', fr: 'Langue & Destination', ru: 'Язык и направление', ar: 'اللغة والوجهة' }, icon: Globe },
];

export default function Eligibility() {
  const { t, language, dir } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', diploma: '', sector: '', languageLevel: '', hasJobOffer: '', destination: '',
  });

  const updateField = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main dir={dir} className="pt-20 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">{t('eligibility.result.pending')}</h1>
            <p className="text-ink-400 mb-8">Our team will review your profile and contact you within 24 hours.</p>
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
          <div className="flex items-center justify-between mb-12 max-w-2xl mx-auto">
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
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6">{steps[0].title[language]}</h3>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">{t('contact.form.name')} *</label>
                      <input type="text" value={formData.fullName} onChange={e => updateField('fullName', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">{t('contact.form.email')} *</label>
                      <input type="email" value={formData.email} onChange={e => updateField('email', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">{t('contact.form.phone')} *</label>
                      <input type="tel" value={formData.phone} onChange={e => updateField('phone', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all" placeholder="+44 7123 456789" />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6">{steps[1].title[language]}</h3>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Last Diploma Obtained *</label>
                      <select value={formData.diploma} onChange={e => updateField('diploma', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-500/50 transition-all">
                        <option value="" className="bg-ink-900">Select...</option>
                        <option value="none" className="bg-ink-900">No formal diploma</option>
                        <option value="highschool" className="bg-ink-900">High School / Baccalaureate</option>
                        <option value="bachelor" className="bg-ink-900">Bachelor's Degree</option>
                        <option value="master" className="bg-ink-900">Master's Degree</option>
                        <option value="phd" className="bg-ink-900">PhD / Doctorate</option>
                        <option value="vocational" className="bg-ink-900">Vocational / Technical Certificate</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Sector of Activity *</label>
                      <select value={formData.sector} onChange={e => updateField('sector', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-500/50 transition-all">
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
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6">{steps[2].title[language]}</h3>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Years of Professional Experience *</label>
                      <select value={formData.languageLevel} onChange={e => updateField('languageLevel', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-500/50 transition-all">
                        <option value="" className="bg-ink-900">Select...</option>
                        <option value="0-1" className="bg-ink-900">Less than 1 year</option>
                        <option value="1-3" className="bg-ink-900">1-3 years</option>
                        <option value="3-5" className="bg-ink-900">3-5 years</option>
                        <option value="5-10" className="bg-ink-900">5-10 years</option>
                        <option value="10+" className="bg-ink-900">10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Do you already have a job offer in Europe? *</label>
                      <div className="flex gap-4">
                        {['Yes', 'No'].map(opt => (
                          <button key={opt} type="button" onClick={() => updateField('hasJobOffer', opt)} className={`flex-1 py-3 rounded-xl border transition-all ${formData.hasJobOffer === opt ? 'bg-brand-600/20 border-brand-500/50 text-white' : 'bg-white/5 border-white/10 text-ink-400 hover:border-white/20'}`}>
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6">{steps[3].title[language]}</h3>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Preferred Destination Country *</label>
                      <select value={formData.destination} onChange={e => updateField('destination', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-500/50 transition-all">
                        <option value="" className="bg-ink-900">Select...</option>
                        <option value="germany" className="bg-ink-900">🇩🇪 Germany</option>
                        <option value="france" className="bg-ink-900">🇫🇷 France</option>
                        <option value="belgium" className="bg-ink-900">🇧🇪 Belgium</option>
                        <option value="italy" className="bg-ink-900">🇮🇹 Italy</option>
                        <option value="poland" className="bg-ink-900">🇵🇱 Poland</option>
                        <option value="greece" className="bg-ink-900">🇬🇷 Greece</option>
                        <option value="luxembourg" className="bg-ink-900">🇱🇺 Luxembourg</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">Language Proficiency *</label>
                      <select value={formData.languageLevel} onChange={e => updateField('languageLevel', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-500/50 transition-all">
                        <option value="" className="bg-ink-900">Select...</option>
                        <option value="beginner" className="bg-ink-900">Beginner (A1-A2)</option>
                        <option value="intermediate" className="bg-ink-900">Intermediate (B1-B2)</option>
                        <option value="advanced" className="bg-ink-900">Advanced (C1-C2)</option>
                        <option value="native" className="bg-ink-900">Native Speaker</option>
                      </select>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-white/5">
              {currentStep > 1 ? (
                <button onClick={() => setCurrentStep(currentStep - 1)} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-ink-300 hover:bg-white/5 transition-all">
                  <ArrowLeft className="w-4 h-4" /> {t('eligibility.prev')}
                </button>
              ) : <div />}
              
              {currentStep < 4 ? (
                <button onClick={() => setCurrentStep(currentStep + 1)} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-primary">
                  {t('eligibility.next')} <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={handleSubmit} className="inline-flex items-center gap-2 px-8 py-3 rounded-xl btn-gold">
                  {t('eligibility.submit')} <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
