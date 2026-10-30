import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code2, Palette, Globe, Smartphone,
  Shield, Rocket, Star, Users, Award, TrendingUp,
  ChevronRight, Sparkles, Zap, Target
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '150+', label: 'Projects Delivered' },
  { icon: TrendingUp, value: '98%', label: 'Success Rate' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
];

const services = [
  { icon: Code2, title: 'Web Development', desc: 'Custom web applications built with cutting-edge technologies for optimal performance.', color: 'from-blue-500 to-cyan-500' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces that delight users and drive engagement.', color: 'from-purple-500 to-pink-500' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications for iOS and Android.', color: 'from-green-500 to-emerald-500' },
  { icon: Globe, title: 'Digital Strategy', desc: 'Data-driven strategies to grow your digital presence and revenue.', color: 'from-orange-500 to-amber-500' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Enterprise-grade security solutions to protect your digital assets.', color: 'from-red-500 to-rose-500' },
  { icon: Rocket, title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure for maximum reliability and performance.', color: 'from-indigo-500 to-violet-500' },
];

const testimonials = [
  { name: 'Sarah Chen', role: 'CEO, TechVentures', text: 'Nexus transformed our digital presence completely. Their attention to detail and innovative approach exceeded all expectations.', avatar: 'SC' },
  { name: 'Marcus Johnson', role: 'CTO, InnovateCo', text: 'The team delivered a world-class product on time and under budget. Their technical expertise is unmatched in the industry.', avatar: 'MJ' },
  { name: 'Elena Rodriguez', role: 'Founder, DesignLab', text: 'Working with Nexus was an absolute pleasure. They understood our vision and brought it to life in ways we never imagined.', avatar: 'ER' },
];

const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Figma', 'Flutter'];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient grid-pattern">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://image.qwenlm.ai/generated-images/bb02748a-e1c1-4a8a-bf21-68057335bc18/_result.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-dark-950/40 to-dark-950" />
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-float-delay" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-500/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-primary-300 font-medium">Award-Winning Digital Agency</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                <span className="text-white">We Build</span>
                <br />
                <span className="gradient-text">Digital</span>
                <br />
                <span className="text-white">Experiences</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-dark-400 mb-10 max-w-lg leading-relaxed"
              >
                We craft premium digital solutions that elevate brands, engage audiences, and drive measurable business growth through innovation and design excellence.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  View Our Work
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* Tech Stack */}
              <motion.div variants={fadeInUp} className="mt-12">
                <p className="text-dark-500 text-sm mb-3">Trusted Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-dark-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                {/* Main card */}
                <div className="glass-card rounded-3xl p-8 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="glass-card rounded-2xl p-5 hover:border-primary-500/30 transition-all duration-300">
                        <Target className="w-8 h-8 text-primary-400 mb-3" />
                        <h4 className="text-white font-semibold text-sm">Strategy</h4>
                        <p className="text-dark-400 text-xs mt-1">Data-driven approach</p>
                      </div>
                      <div className="glass-card rounded-2xl p-5 hover:border-accent-500/30 transition-all duration-300">
                        <Zap className="w-8 h-8 text-accent-400 mb-3" />
                        <h4 className="text-white font-semibold text-sm">Performance</h4>
                        <p className="text-dark-400 text-xs mt-1">Lightning fast delivery</p>
                      </div>
                    </div>
                    <div className="space-y-4 mt-8">
                      <div className="glass-card rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300">
                        <Palette className="w-8 h-8 text-purple-400 mb-3" />
                        <h4 className="text-white font-semibold text-sm">Design</h4>
                        <p className="text-dark-400 text-xs mt-1">Pixel-perfect craft</p>
                      </div>
                      <div className="glass-card rounded-2xl p-5 hover:border-orange-500/30 transition-all duration-300">
                        <Code2 className="w-8 h-8 text-orange-400 mb-3" />
                        <h4 className="text-white font-semibold text-sm">Development</h4>
                        <p className="text-dark-400 text-xs mt-1">Clean, scalable code</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/20 border border-primary-500/20 backdrop-blur-xl flex items-center justify-center animate-float">
                  <Rocket className="w-10 h-10 text-primary-400" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-500/20 to-accent-600/20 border border-accent-500/20 backdrop-blur-xl flex items-center justify-center animate-float-delay">
                  <Star className="w-8 h-8 text-accent-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-dark-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto text-lg">
              End-to-end digital solutions tailored to transform your business and exceed expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass-card rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-dark-400 leading-relaxed mb-4">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Client <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto text-lg">
              Don't just take our word for it — hear from some of our amazing clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-2xl p-8 hover:border-primary-500/20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-dark-300 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-dark-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 md:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-accent-500/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Let's Create Something<br />
                <span className="gradient-text">Extraordinary</span>
              </h2>
              <p className="text-dark-400 text-lg mb-10 max-w-2xl mx-auto">
                Partner with us to build digital products that make a lasting impact. Your next breakthrough starts here.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-lg hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-2xl shadow-primary-600/30 hover:shadow-primary-500/50 hover:scale-105"
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
