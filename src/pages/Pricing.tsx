import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/translations';
import { pricingData } from '../data/siteData';

export default function Pricing() {
  const { t, language, dir } = useLanguage();

  return (
    <main dir={dir} className="pt-20">
      <section className="relative py-24 hero-gradient grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-6">{t('nav.pricing')}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{t('pricing.title')}</h1>
            <p className="text-lg text-ink-400 leading-relaxed max-w-2xl">{t('pricing.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-brand-600/5">
                    <th className="text-left p-4 text-white font-semibold text-sm">{t('pricing.step')}</th>
                    <th className="text-left p-4 text-white font-semibold text-sm">{t('pricing.official')}</th>
                    <th className="text-left p-4 text-white font-semibold text-sm">{t('pricing.agency')}</th>
                    <th className="text-left p-4 text-white font-semibold text-sm hidden md:table-cell">{t('pricing.condition')}</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-white font-medium text-sm">{row.step[language]}</td>
                      <td className="p-4 text-ink-300 text-sm">{typeof row.officialFees === 'string' ? row.officialFees : row.officialFees[language]}</td>
                      <td className="p-4 text-gold-400 font-semibold text-sm">{row.agencyFees}</td>
                      <td className="p-4 text-ink-400 text-sm hidden md:table-cell">{row.condition[language]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 glass rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="text-ink-400 text-sm leading-relaxed">{t('pricing.note')}</p>
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <Link to="/eligibility" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl btn-gold text-lg">
              {t('pricing.cta')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
