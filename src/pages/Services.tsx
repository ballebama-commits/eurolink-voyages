import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code2, Palette, Smartphone, Globe, Shield, Rocket,
  Database, Cloud, BarChart3, Cpu, Layers, CheckCircle2,
  ArrowRight, ChevronRight
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Custom web applications built with modern frameworks and best practices.',
    color: 'from-blue-500 to-cyan-500',
    features: ['React & Next.js Applications', 'Progressive Web Apps', 'E-Commerce Platforms', 'Custom CMS Solutions', 'API Development & Integration', 'Performance Optimization'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'User-centered design that creates intuitive and beautiful digital experiences.',
    color: 'from-purple-500 to-pink-500',
    features: ['User Research & Testing', 'Wireframing & Prototyping', 'Visual Design Systems', 'Interaction Design', 'Brand Identity Design', 'Design Audits'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'Native and cross-platform mobile apps that users love.',
    color: 'from-green-500 to-emerald-500',
    features: ['iOS & Android Native Apps', 'React Native Development', 'Flutter Applications', 'App Store Optimization', 'Push Notifications', 'Offline-First Architecture'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure and streamlined deployment pipelines.',
    color: 'from-indigo-500 to-violet-500',
    features: ['AWS & Azure Solutions', 'CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Logging', 'Auto-Scaling Architecture'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'Enterprise-grade security to protect your digital assets.',
    color: 'from-red-500 to-rose-500',
    features: ['Security Audits', 'Penetration Testing', 'Compliance Consulting', 'Data Encryption', 'Incident Response', 'Security Training'],
  },
  {
    icon: BarChart3,
    title: 'Digital Strategy',
    desc: 'Data-driven strategies to accelerate your digital growth.',
    color: 'from-orange-500 to-amber-500',
    features: ['Market Research', 'Growth Strategy', 'Analytics & Insights', 'SEO & Content Strategy', 'Conversion Optimization', 'Digital Transformation'],
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We dive deep into your business goals, target audience, and technical requirements.' },
  { step: '02', title: 'Strategy', desc: 'We develop a comprehensive roadmap with clear milestones and deliverables.' },
  { step: '03', title: 'Design', desc: 'Our designers create stunning visuals and intuitive user experiences.' },
  { step: '04', title: 'Development', desc: 'Our engineers bring designs to life with clean, scalable code.' },
  { step: '05', title: 'Testing', desc: 'Rigorous QA ensures everything works flawlessly across all devices.' },
  { step: '06', title: 'Launch', desc: 'We deploy your solution and provide ongoing support and optimization.' },
];

const techStack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Go', 'Rust', 'GraphQL'] },
  { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'] },
  { category: 'Cloud', items: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Docker'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma'] },
  { category: 'Tools', items: ['Figma', 'Git', 'Jira', 'Notion', 'Slack'] },
];

export default function Services() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Solutions That <span className="gradient-text">Drive Results</span>
            </h1>
            <p className="text-lg text-dark-400 leading-relaxed max-w-2xl">
              From concept to launch, we provide comprehensive digital services that help businesses 
              thrive in the modern digital landscape. Every solution is tailored to your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 md:p-10 hover:border-primary-500/20 transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-1">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-dark-400">{service.desc}</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" />
                          <span className="text-dark-300 text-sm">{feature}</span>
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

      {/* Process */}
      <section className="py-24 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto text-lg">
              A proven methodology that ensures consistent, high-quality results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-white/5 group-hover:text-primary-500/10 transition-colors">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <span className="text-primary-400 font-bold text-sm">Step {step.step}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{step.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto text-lg">
              We use the latest and most reliable technologies to build your solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary-400" />
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-dark-300 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 bg-dark-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Need a Custom <span className="gradient-text">Solution</span>?
            </h2>
            <p className="text-dark-400 text-lg mb-10 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements and create a tailored plan that fits your budget and timeline.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-lg hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-2xl shadow-primary-600/30 hover:scale-105"
            >
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
