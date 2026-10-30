import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/translations';

export default function Contact() {
  const { t, dir } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main dir={dir} className="pt-20">
      <section className="relative py-24 hero-gradient grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-6">{t('nav.contact')}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{t('contact.title')}</h1>
            <p className="text-lg text-ink-400 leading-relaxed max-w-2xl">{t('contact.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <div className="glass rounded-2xl p-8 md:p-10">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-ink-400">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-ink-300 mb-2">{t('contact.form.name')} *</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ink-300 mb-2">{t('contact.form.email')} *</label>
                        <input type="email" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-ink-300 mb-2">{t('contact.form.phone')}</label>
                        <input type="tel" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ink-300 mb-2">{t('contact.form.subject')}</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">{t('contact.form.message')} *</label>
                      <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all resize-none" />
                    </div>
                    <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-primary">
                      <Send className="w-5 h-5" /> {t('contact.form.send')}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'contact@eurolinkvoyages.com' },
                { icon: Phone, label: 'Phone', value: '+44 20 1234 5678' },
                { icon: MapPin, label: 'Office', value: 'London, United Kingdom' },
                { icon: Clock, label: 'Hours', value: t('contact.hours') },
              ].map((info, i) => (
                <div key={i} className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-brand-500/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-ink-400 text-sm mb-1">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </div>
              ))}
              <a href="https://wa.me/442012345678" target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-emerald-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-ink-400 text-sm mb-1">WhatsApp</div>
                  <div className="text-white font-medium">Chat with us now</div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
