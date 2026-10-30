import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, FileSearch, Sparkles, Send, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/translations';

const steps = [
  { icon: Stethoscope, titleKey: 'process.step1.title', descKey: 'process.step1.desc', color: 'from-brand-500 to-brand-700', details: {
    en: ['Complete situation audit', 'Eligibility assessment', 'Country recommendation', 'Timeline estimation'],
    fr: ['Audit complet de la situation', 'Évaluation éligibilité', 'Recommandation pays', 'Estimation délais'],
    ru: ['Полный аудит ситуации', 'Оценка соответствия', 'Рекомендация страны', 'Оценка сроков'],
    ar: ['تدقيق كامل للوضع', 'تقييم الأهلية', 'توصية البلد', 'تقدير المدة'],
  }},
  { icon: FileSearch, titleKey: 'process.step2.title', descKey: 'process.step2.desc', color: 'from-gold-500 to-gold-600', details: {
    en: ['Personalized document list', 'Employer matching', 'Contract negotiation', 'File compilation'],
    fr: ['Liste personnalisée documents', 'Matching employeur', 'Négociation contrat', 'Compilation dossier'],
    ru: ['Персональный список', 'Подбор работодателя', 'Переговоры по контракту', 'Составление дела'],
    ar: ['قائمة وثائق مخصصة', 'مطابقة صاحب العمل', 'التفاوض على العقد', 'تجميع الملف'],
  }},
  { icon: Sparkles, titleKey: 'process.step3.title', descKey: 'process.step3.desc', color: 'from-emerald-500 to-emerald-600', details: {
    en: ['Final document review', 'Interview simulation', 'Oral training', 'File optimization'],
    fr: ['Revue finale documents', 'Simulation entretien', 'Entraînement oral', 'Optimisation dossier'],
    ru: ['Финальная проверка', 'Имитация собеседования', 'Устная подготовка', 'Оптимизация дела'],
    ar: ['مراجعة نهائية', 'محاكاة المقابلة', 'تدريب شفهي', 'تحسين الملف'],
  }},
  { icon: Send, titleKey: 'process.step4.title', descKey: 'process.step4.desc', color: 'from-purple-500 to-purple-600', details: {
    en: ['Consular submission support', 'Real-time tracking', 'Post-visa guidance', 'Arrival assistance'],
    fr: ['Support dépôt consulaire', 'Suivi temps réel', 'Guidance post-visa', 'Assistance arrivée'],
    ru: ['Поддержка подачи', 'Отслеживание', 'Пост-визовое руководство', 'Помощь по прибытии'],
    ar: ['دعم التقديم القنصلي', 'تتبع مباشر', 'إرشاد بعد التأشيرة', 'مساعدة الوصول'],
  }},
];

export default function Process() {
  const { t, language, dir } = useLanguage();

  return (
    <main dir={dir} className="pt-20">
      <section className="relative py-24 hero-gradient grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-6">{t('nav.process')}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{t('process.title')}</h1>
            <p className="text-lg text-ink-400 leading-relaxed max-w-2xl">{t('process.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent hidden md:block" />
            
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass rounded-2xl p-8 hover:border-brand-500/30 transition-all duration-300 inline-block w-full">
                    <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <span className="text-brand-400 font-bold text-sm">Step {i + 1}</span>
                        <h3 className="text-xl font-bold text-white">{t(step.titleKey)}</h3>
                      </div>
                    </div>
                    <p className="text-ink-400 mb-4">{t(step.descKey)}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {step.details[language].map((detail, j) => (
                        <div key={j} className={`flex items-center gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-ink-300 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex w-5 h-5 rounded-full bg-brand-500 border-4 border-ink-950 z-10 flex-shrink-0" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 glass rounded-2xl p-8 text-center">
            <Clock className="w-10 h-10 text-gold-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{t('process.duration')}</h3>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-ink-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Start Your <span className="gradient-text">Journey</span></h2>
          <Link to="/eligibility" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl btn-gold text-lg">
            {t('home.hero.cta')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
