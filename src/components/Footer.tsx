import { Link } from 'react-router-dom';
import { Plane, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/translations';

export default function Footer() {
  const { t, dir } = useLanguage();

  return (
    <footer dir={dir} className="relative bg-ink-950 border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <div className="py-16 text-center border-b border-white/5">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('home.cta.title')}
          </h3>
          <p className="text-ink-400 mb-8 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <Link
            to="/eligibility"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-gold"
          >
            {t('home.cta.button')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 flex items-center justify-center">
                <Plane className="w-5 h-5 text-white -rotate-12" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">
                  Euro<span className="text-gold-400">link</span>
                </span>
                <div className="text-[9px] text-ink-400 tracking-widest uppercase">Voyages</div>
              </div>
            </Link>
            <p className="text-ink-400 text-sm mb-6 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-ink-400">
                <Phone className="w-4 h-4" /> +44 20 1234 5678
              </div>
              <div className="flex items-center gap-2 text-ink-400">
                <Mail className="w-4 h-4" /> contact@eurolinkvoyages.com
              </div>
              <div className="flex items-center gap-2 text-ink-400">
                <MapPin className="w-4 h-4" /> London, United Kingdom
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-ink-400 hover:text-brand-400 text-sm transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="text-ink-400 hover:text-brand-400 text-sm transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/process" className="text-ink-400 hover:text-brand-400 text-sm transition-colors">{t('nav.process')}</Link></li>
              <li><Link to="/countries" className="text-ink-400 hover:text-brand-400 text-sm transition-colors">{t('nav.countries')}</Link></li>
              <li><Link to="/pricing" className="text-ink-400 hover:text-brand-400 text-sm transition-colors">{t('nav.pricing')}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-ink-400 hover:text-brand-400 text-sm transition-colors">{t('nav.faq')}</Link></li>
              <li><Link to="/eligibility" className="text-ink-400 hover:text-brand-400 text-sm transition-colors">Eligibility Test</Link></li>
              <li><Link to="/dashboard" className="text-ink-400 hover:text-brand-400 text-sm transition-colors">{t('nav.login')}</Link></li>
              <li><Link to="/contact" className="text-ink-400 hover:text-brand-400 text-sm transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <li><Link to="/legal/privacy" className="text-ink-400 hover:text-brand-400 text-sm transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/legal/terms" className="text-ink-400 hover:text-brand-400 text-sm transition-colors">{t('footer.terms')}</Link></li>
              <li><Link to="/legal/disclaimer" className="text-ink-400 hover:text-brand-400 text-sm transition-colors">{t('footer.disclaimer')}</Link></li>
              <li><Link to="/legal/notice" className="text-ink-400 hover:text-brand-400 text-sm transition-colors">{t('footer.legalNotice')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink-500 text-sm">
            © 2026 Eurolink Voyages Ltd. {t('footer.rights')}
          </p>
          <div className="text-ink-500 text-xs text-center md:text-right">
            Registered in England & Wales | Company No. 12345678
          </div>
        </div>
      </div>
    </footer>
  );
}
