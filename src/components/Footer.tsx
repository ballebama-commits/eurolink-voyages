import { Link } from 'react-router-dom';
import { Zap, Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/about' },
  ],
  services: [
    { name: 'Web Development', path: '/services' },
    { name: 'Mobile Apps', path: '/services' },
    { name: 'UI/UX Design', path: '/services' },
    { name: 'Cloud Solutions', path: '/services' },
  ],
  resources: [
    { name: 'Blog', path: '/' },
    { name: 'Documentation', path: '/' },
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'Support', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-white/5">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="py-16 text-center border-b border-white/5">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build something <span className="gradient-text">amazing</span>?
          </h3>
          <p className="text-dark-400 mb-8 max-w-2xl mx-auto">
            Let's collaborate and turn your vision into reality. Our team is ready to bring your next project to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40 hover:scale-105"
          >
            Start a Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Nexus<span className="text-primary-400">.</span>
              </span>
            </Link>
            <p className="text-dark-400 text-sm mb-6 leading-relaxed">
              We craft digital experiences that inspire, engage, and drive results for forward-thinking brands.
            </p>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-dark-400 hover:text-white hover:bg-primary-600/20 hover:border-primary-500/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-dark-400 hover:text-primary-400 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            © 2026 Nexus Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
