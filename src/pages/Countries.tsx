import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Briefcase, Clock, Banknote, ArrowRight, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/translations';
import { countries } from '../data/siteData';

function CountryDetail({ countryId }: { countryId: string }) {
  const { t, language, dir } = useLanguage();
  const country = countries.find(c => c.id === countryId);
  if (!country) return <div className="pt-32 text-center text-white">Country not found</div>;

  return (
    <main dir={dir} className="pt-20">
      <section className="relative py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{country.flag}</span>
                <span className="text-brand-400 font-medium">Schengen Area</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{country.name[language]}</h1>
              <p className="text-lg text-ink-400 leading-relaxed mb-8">{country.description[language]}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass rounded-xl p-4">
                  <Banknote className="w-5 h-5 text-gold-400 mb-2" />
                  <div className="text-ink-400 text-xs mb-1">Avg. Salary</div>
                  <div className="text-white font-bold">{country.avgSalary}</div>
                </div>
                <div className="glass rounded-xl p-4">
                  <Clock className="w-5 h-5 text-brand-400 mb-2" />
                  <div className="text-ink-400 text-xs mb-1">Procedure</div>
                  <div className="text-white font-bold">{country.procedureTime}</div>
                </div>
              </div>
              <Link to="/eligibility" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-primary">
                Apply for {country.name[language]} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {country.gallery.map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className={`rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2 h-48' : 'h-32'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8">
              <Briefcase className="w-8 h-8 text-brand-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Target Sectors</h3>
              <div className="flex flex-wrap gap-2">
                {country.sectors[language].map((s, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-brand-600/10 border border-brand-500/20 text-brand-300 text-sm">{s}</span>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-8">
              <MapPin className="w-8 h-8 text-gold-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Visa Types</h3>
              <ul className="space-y-2">
                {country.visaTypes[language].map((v, i) => (
                  <li key={i} className="flex items-center gap-2 text-ink-300">
                    <ChevronRight className="w-4 h-4 text-gold-400" /> {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Countries() {
  const { id } = useParams();
  const { t, language, dir } = useLanguage();
  
  if (id) return <CountryDetail countryId={id} />;

  return (
    <main dir={dir} className="pt-20">
      <section className="relative py-24 hero-gradient grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-6">{t('nav.countries')}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{t('countries.title')}</h1>
            <p className="text-lg text-ink-400 leading-relaxed max-w-2xl">{t('countries.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, i) => (
              <motion.div key={country.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/countries/${country.id}`} className="group glass rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-500 block">
                  <div className="relative h-56 overflow-hidden">
                    <img src={country.image} alt={country.name[language]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />
                    <div className="absolute top-4 right-4 text-4xl">{country.flag}</div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white">{country.name[language]}</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-ink-300 bg-white/10 backdrop-blur-sm px-2 py-1 rounded">{country.avgSalary}</span>
                        <span className="text-xs text-ink-300 bg-white/10 backdrop-blur-sm px-2 py-1 rounded">{country.procedureTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-ink-400 text-sm line-clamp-2 mb-3">{country.description[language]}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {country.sectors[language].slice(0, 3).map((s, j) => (
                        <span key={j} className="text-xs px-2 py-1 rounded bg-brand-600/10 text-brand-300">{s}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
