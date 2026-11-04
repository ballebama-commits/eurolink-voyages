import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Users, Eye, Star, CheckCircle2,
  Plane, Globe, Award, TrendingUp, Sparkles, ChevronRight
} from 'lucide-react';
import { useLanguage } from '../i18n/translations';
import { countries, testimonials } from '../data/siteData';

const fadeInUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

export default function Home() {
  const { t, language, dir } = useLanguage();

  return (
    <main dir={dir} className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center hero-gradient grid-pattern pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-float-delay" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/10 border border-brand-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span className="text-sm text-brand-300 font-medium">{t('home.hero.badge')}</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">{t('home.hero.title').split(' ').slice(0, -2).join(' ')}</span>
                <br />
                <span className="gradient-text">{t('home.hero.title').split(' ').slice(-2).join(' ')}</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-ink-400 mb-4 max-w-lg leading-relaxed">
                {t('home.hero.subtitle')}
              </motion.p>

              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-500/10 border border-gold-500/20 mb-8">
                <span className="text-gold-400 font-bold text-lg">€100</span>
                <span className="text-ink-300 text-sm">{t('home.hero.price').replace('Dès 100€ ', '').replace('From €100 ', '')}</span>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link to="/eligibility" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-primary">
                  {t('home.hero.cta')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all">
                  {t('home.hero.cta2')}
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual - Airport Image */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-600/20">
                {/* Airport Image */}
                <img 
                  src="https://image.qwenlm.ai/generated-images/13884304-373d-4bdb-be0e-9f1e74d7010d/_result.png" 
                  alt="International Airport Terminal"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 glass rounded-2xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">7 Countries</div>
                      <div className="text-ink-400 text-xs">Schengen Area</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 glass rounded-2xl p-4 animate-float-delay">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">95% Success</div>
                      <div className="text-ink-400 text-xs">Visa Approval</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Text Overlay */}
                <div className="absolute bottom-6 right-6 text-right">
                  <div className="text-white font-bold text-lg">Your Journey</div>
                  <div className="text-gold-400 font-semibold">Starts Here ✈️</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '500+', label: 'Happy Candidates' },
              { icon: Globe, value: '7', label: 'Schengen Countries' },
              { icon: TrendingUp, value: '95%', label: 'Success Rate' },
              { icon: Star, value: '4.9', label: 'Client Rating' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <stat.icon className="w-8 h-8 text-brand-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-ink-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('home.pillars.title')}</h2>
            <p className="text-ink-400 max-w-2xl mx-auto text-lg">{t('home.pillars.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: t('home.pillar1.title'), desc: t('home.pillar1.desc'), color: 'from-brand-500 to-brand-700' },
              { icon: Users, title: t('home.pillar2.title'), desc: t('home.pillar2.desc'), color: 'from-gold-500 to-gold-600' },
              { icon: Eye, title: t('home.pillar3.title'), desc: t('home.pillar3.desc'), color: 'from-emerald-500 to-emerald-600' },
            ].map((pillar, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8 hover:border-brand-500/30 transition-all duration-500 group hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-ink-400 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="py-24 bg-ink-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('home.countries.title')}</h2>
            <p className="text-ink-400 max-w-2xl mx-auto text-lg">{t('home.countries.subtitle')}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.slice(0, 6).map((country, i) => (
              <motion.div key={country.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/countries/${country.id}`} className="group glass rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-500 block">
                  <div className="relative h-48 overflow-hidden">
                    <img src={country.image} alt={country.name[language]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="text-3xl">{country.flag}</span>
                        <h3 className="text-xl font-bold text-white mt-2">{country.name[language]}</h3>
                      </div>
                      <ChevronRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-ink-400 text-sm line-clamp-2">{country.description[language]}</p>
                    <div className="mt-3 text-brand-400 text-sm font-medium">{country.avgSalary}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/countries" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all">
              {t('home.countries.cta')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('home.testimonials.title')}</h2>
            <p className="text-ink-400 max-w-2xl mx-auto text-lg">{t('home.testimonials.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t2, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-gold-400 fill-gold-400" />)}
                </div>
                <p className="text-ink-300 leading-relaxed mb-6 italic">"{t2.text[language]}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-gold-500 flex items-center justify-center text-white text-sm font-bold">{t2.avatar}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t2.name}</div>
                    <div className="text-ink-400 text-xs">{t2.country}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/5 to-gold-500/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('home.cta.title')}</h2>
              <p className="text-ink-400 text-lg mb-10 max-w-2xl mx-auto">{t('home.cta.subtitle')}</p>
              <Link to="/eligibility" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl btn-gold text-lg">
                {t('home.cta.button')} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}