import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Plane } from 'lucide-react';
import { useLanguage, Language } from '../i18n/translations';

const navLinks = [
  { name: 'nav.home', path: '/' },
  { name: 'nav.services', path: '/services' },
  { name: 'nav.process', path: '/process' },
  { name: 'nav.countries', path: '/countries' },
  { name: 'nav.pricing', path: '/pricing' },
  { name: 'nav.about', path: '/about' },
  { name: 'nav.contact', path: '/contact' },
  { name: 'nav.faq', path: '/faq' },
];

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setLangOpen(false);
  }, [location]);

  return (
    <motion.nav
      dir={dir}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-2xl shadow-brand-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 flex items-center justify-center shadow-lg shadow-brand-600/30 group-hover:scale-110 transition-transform duration-300">
                <Plane className="w-5 h-5 text-white -rotate-12" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold-400 border-2 border-ink-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-none">
                Euro<span className="text-gold-400">link</span>
              </span>
              <span className="text-[10px] text-ink-400 font-medium tracking-widest uppercase">Voyages</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-white bg-brand-600/20 border border-brand-500/30'
                    : 'text-ink-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {t(link.name)}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-ink-300 hover:text-white hover:bg-white/5 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{languages.find(l => l.code === language)?.flag}</span>
                <span className="hidden md:inline text-xs">{languages.find(l => l.code === language)?.label}</span>
              </button>
              
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 right-0 glass-strong rounded-xl overflow-hidden shadow-2xl min-w-[180px]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                          language === lang.code
                            ? 'bg-brand-600/20 text-white'
                            : 'text-ink-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link
              to="/eligibility"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-primary text-sm"
            >
              {t('nav.start')}
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-ink-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-strong border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-white bg-brand-600/20 border border-brand-500/30'
                      : 'text-ink-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t(link.name)}
                </Link>
              ))}
              <Link
                to="/eligibility"
                className="block mt-4 px-4 py-3 rounded-xl btn-primary text-sm text-center"
              >
                {t('nav.start')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
