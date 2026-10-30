import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClipboardCheck, FileText, Users, Plane, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/translations';

const services = [
  { icon: ClipboardCheck, titleKey: 'services.s1.title', descKey: 'services.s1.desc', color: 'from-brand-500 to-brand-700', features: {
    en: ['Academic credentials analysis', 'Professional experience review', 'Schengen alignment assessment', 'Eligibility report'],
    fr: ['Analyse des diplômes', 'Revue de l\'expérience professionnelle', 'Évaluation alignement Schengen', 'Rapport d\'éligibilité'],
    ru: ['Анализ дипломов', 'Обзор опыта', 'Оценка соответствия Шенгену', 'Отчет о соответствии'],
    ar: ['تحليل الشهادات', 'مراجعة الخبرة', 'تقييم التوافق مع شنغن', 'تقرير الأهلية'],
  }},
  { icon: FileText, titleKey: 'services.s2.title', descKey: 'services.s2.desc', color: 'from-gold-500 to-gold-600', features: {
    en: ['Document verification', 'Work contract review', 'Cover letter drafting', 'Official forms completion'],
    fr: ['Vérification des documents', 'Revue des contrats', 'Rédaction des lettres', 'Formulaires officiels'],
    ru: ['Проверка документов', 'Обзор контрактов', 'Составление писем', 'Официальные формы'],
    ar: ['التحقق من الوثائق', 'مراجعة العقود', 'صياغة الرسائل', 'النماذج الرسمية'],
  }},
  { icon: Users, titleKey: 'services.s3.title', descKey: 'services.s3.desc', color: 'from-emerald-500 to-emerald-600', features: {
    en: ['Mock consular interviews', 'Stress management coaching', 'Cultural preparation', 'Expert feedback sessions'],
    fr: ['Simulations d\'entretiens', 'Coaching gestion du stress', 'Préparation culturelle', 'Sessions feedback expert'],
    ru: ['Имитация собеседований', 'Коучинг управления стрессом', 'Культурная подготовка', 'Экспертные сессии'],
    ar: ['محاكاة المقابلات', 'تدريب إدارة الضغط', 'التحضير الثقافي', 'جلسات خبراء'],
  }},
  { icon: Plane, titleKey: 'services.s4.title', descKey: 'services.s4.desc', color: 'from-purple-500 to-purple-600', features: {
    en: ['Schengen insurance assistance', 'Temporary accommodation', 'Flight booking support', 'Airport pickup coordination'],
    fr: ['Assurance Schengen', 'Logement temporaire', 'Réservation de vol', 'Transfert aéroport'],
    ru: ['Страховка Шенген', 'Временное жилье', 'Бронирование билетов', 'Трансфер'],
    ar: ['تأمين شنغن', 'سكن مؤقت', 'حجز طيران', 'استقبال المطار'],
  }},
];

export default function Services() {
  const { t, language, dir } = useLanguage();

  return (
    <main dir={dir} className="pt-20">
      <section className="relative py-24 hero-gradient grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-6">{t('nav.services')}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{t('services.title')}</h1>
            <p className="text-lg text-ink-400 leading-relaxed max-w-2xl">{t('services.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8 md:p-10 hover:border-brand-500/20 transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-1">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t(service.titleKey)}</h3>
                    <p className="text-ink-400">{t(service.descKey)}</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features[language].map((feature, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span className="text-ink-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to <span className="gradient-text">Start?</span></h2>
          <p className="text-ink-400 text-lg mb-10">Take the first step towards your European career today.</p>
          <Link to="/eligibility" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl btn-gold text-lg">
            {t('home.cta.button')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
