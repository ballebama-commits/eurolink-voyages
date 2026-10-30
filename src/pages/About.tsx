import { motion } from 'framer-motion';
import { Heart, Shield, Eye, Users, Award, Globe, Target, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/translations';

const team = [
  { name: 'Alexander Wright', role: 'Founder & CEO', bio: { en: '15+ years in international recruitment', fr: '15+ ans en recrutement international', ru: '15+ лет в международном подборе', ar: '15+ سنة في التوظيف الدولي' }, avatar: 'AW' },
  { name: 'Sophie Laurent', role: 'Head of Operations', bio: { en: 'Expert in Schengen visa procedures', fr: 'Experte procédures visa Schengen', ru: 'Эксперт по визам Шенгена', ar: 'خبيرة إجراءات تأشيرة شنغن' }, avatar: 'SL' },
  { name: 'David Mensah', role: 'Client Relations', bio: { en: 'Dedicated to candidate success', fr: 'Dévoué au succès des candidats', ru: 'Предан успеху кандидатов', ar: 'مكرس لنجاح المرشحين' }, avatar: 'DM' },
  { name: 'Elena Rossi', role: 'Legal Advisor', bio: { en: 'Immigration law specialist', fr: 'Spécialiste droit immigration', ru: 'Специалист по иммиграционному праву', ar: 'متخصصة في قانون الهجرة' }, avatar: 'ER' },
];

export default function About() {
  const { t, language, dir } = useLanguage();

  return (
    <main dir={dir} className="pt-20">
      <section className="relative py-24 hero-gradient grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-6">{t('nav.about')}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{t('about.title')}</h1>
            <p className="text-lg text-ink-400 leading-relaxed max-w-2xl">{t('about.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-10">
              <Target className="w-10 h-10 text-brand-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">{t('about.story')}</h3>
              <p className="text-ink-400 leading-relaxed">{t('about.story.text')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-10">
              <Globe className="w-10 h-10 text-gold-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">{t('about.mission')}</h3>
              <p className="text-ink-400 leading-relaxed">{t('about.mission.text')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('about.values')}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: t('about.value1') },
              { icon: Eye, text: t('about.value2') },
              { icon: Award, text: t('about.value3') },
              { icon: Heart, text: t('about.value4') },
            ].map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8 text-center hover:border-brand-500/30 transition-all">
                <value.icon className="w-10 h-10 text-brand-400 mx-auto mb-4" />
                <p className="text-ink-300 text-sm leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8 text-center hover:border-brand-500/30 transition-all group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-gold-500 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">{member.avatar}</div>
                <h4 className="text-white font-bold">{member.name}</h4>
                <p className="text-brand-400 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-ink-400 text-sm">{member.bio[language]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-ink-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-gold-400" />
              <h3 className="text-lg font-bold text-white">Legal Notice</h3>
            </div>
            <p className="text-ink-400 text-sm leading-relaxed">
              Eurolink Voyages Ltd is an independent consultancy. We are not affiliated with any embassy, consulate, or government entity. All visa decisions are made exclusively by the competent authorities of the destination countries.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
