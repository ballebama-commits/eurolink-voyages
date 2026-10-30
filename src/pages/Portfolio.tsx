import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Web', 'Mobile', 'Design', 'Branding'];

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Web',
    desc: 'A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    color: 'from-blue-600 to-cyan-500',
    image: '📊',
  },
  {
    title: 'HealthPulse App',
    category: 'Mobile',
    desc: 'A health and wellness mobile application with wearable integration and personalized recommendations.',
    tags: ['React Native', 'Firebase', 'HealthKit'],
    color: 'from-green-600 to-emerald-500',
    image: '🏥',
  },
  {
    title: 'Luxe Brand Identity',
    category: 'Branding',
    desc: 'Complete brand redesign for a luxury fashion house including logo, typography, and visual guidelines.',
    tags: ['Brand Strategy', 'Visual Identity', 'Guidelines'],
    color: 'from-purple-600 to-pink-500',
    image: '✨',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web',
    desc: 'A high-performance e-commerce platform handling 100K+ daily transactions with seamless UX.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    color: 'from-orange-600 to-amber-500',
    image: '🛒',
  },
  {
    title: 'Travel Companion',
    category: 'Mobile',
    desc: 'AI-powered travel planning app with smart itinerary generation and local recommendations.',
    tags: ['Flutter', 'GPT-4', 'Maps API'],
    color: 'from-teal-600 to-cyan-500',
    image: '✈️',
  },
  {
    title: 'SaaS Design System',
    category: 'Design',
    desc: 'A comprehensive design system with 200+ components built for enterprise SaaS applications.',
    tags: ['Figma', 'Design Tokens', 'Documentation'],
    color: 'from-indigo-600 to-violet-500',
    image: '🎨',
  },
  {
    title: 'Crypto Exchange',
    category: 'Web',
    desc: 'Decentralized cryptocurrency exchange with advanced trading features and real-time market data.',
    tags: ['React', 'Web3.js', 'Solidity', 'WebSocket'],
    color: 'from-yellow-600 to-orange-500',
    image: '💎',
  },
  {
    title: 'FoodDelivery Pro',
    category: 'Mobile',
    desc: 'End-to-end food delivery solution with real-time tracking, payments, and restaurant management.',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    color: 'from-red-600 to-rose-500',
    image: '🍕',
  },
  {
    title: 'Corporate Rebrand',
    category: 'Branding',
    desc: 'Strategic rebrand for a Fortune 500 company including digital presence overhaul.',
    tags: ['Strategy', 'Identity', 'Digital'],
    color: 'from-slate-600 to-zinc-500',
    image: '🏢',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 hero-gradient grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Work That <span className="gradient-text">Speaks</span> for Itself
            </h1>
            <p className="text-lg text-dark-400 leading-relaxed max-w-2xl">
              Explore our collection of projects that showcase our expertise in building 
              exceptional digital products across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                    : 'bg-white/5 text-dark-400 border border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group glass-card rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-500"
                >
                  {/* Project Image Area */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                    <span className="text-6xl">{project.image}</span>
                    <div className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Github className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-600/20 text-primary-300 text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-dark-400 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Want to See Your Project <span className="gradient-text">Here</span>?
            </h2>
            <p className="text-dark-400 text-lg mb-10 max-w-2xl mx-auto">
              Let's collaborate on your next project and create something extraordinary together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-lg hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-2xl shadow-primary-600/30 hover:scale-105"
            >
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
