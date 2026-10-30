import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/translations';
import { faqData } from '../data/siteData';

export default function FAQ() {
  const { t, language, dir } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main dir={dir} className="pt-20">
      <section className="relative py-24 hero-gradient grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-6">{t('nav.faq')}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{t('faq.title')}</h1>
            <p className="text-lg text-ink-400 leading-relaxed max-w-2xl">{t('faq.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl overflow-hidden">
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full px-6 py-5 flex items-center justify-between text-left">
                  <span className="text-white font-medium pr-4">{faq.q[language]}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <motion.div initial={false} animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <p className="px-6 pb-5 text-ink-400 leading-relaxed">{faq.a[language]}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
