import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Send, Clock,
  MessageSquare, CheckCircle2, ArrowRight
} from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@nexusdigital.com', href: 'mailto:hello@nexusdigital.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, label: 'Office', value: '123 Innovation Drive, San Francisco, CA 94105', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM PST', href: '#' },
];

const faqs = [
  { q: 'What is your typical project timeline?', a: 'Project timelines vary based on scope. A typical website takes 4-8 weeks, while complex applications may take 3-6 months. We provide detailed timelines during our discovery phase.' },
  { q: 'How do you handle project pricing?', a: 'We offer both fixed-price and time-and-materials models. After understanding your requirements, we provide a detailed proposal with transparent pricing and no hidden fees.' },
  { q: 'Do you provide ongoing support?', a: 'Yes! We offer various support packages including maintenance, updates, monitoring, and priority support. We believe in long-term partnerships.' },
  { q: 'What technologies do you specialize in?', a: 'We specialize in React, Next.js, Node.js, Python, React Native, and cloud platforms like AWS and Google Cloud. We choose the best tech stack for each project.' },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '', email: '', company: '', budget: '', message: '', service: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', company: '', budget: '', message: '', service: '' });
  };

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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Build Something <span className="gradient-text">Together</span>
            </h1>
            <p className="text-lg text-dark-400 leading-relaxed max-w-2xl">
              Ready to start your next project? We'd love to hear about your ideas. 
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white mb-2">Send us a message</h2>
                <p className="text-dark-400 mb-8">Fill out the form and our team will respond promptly.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <CheckCircle2 className="w-16 h-16 text-accent-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-dark-400">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-300 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-300 mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-300 mb-2">Company</label>
                        <input
                          type="text"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-300 mb-2">Budget Range</label>
                        <select
                          value={formState.budget}
                          onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all"
                        >
                          <option value="" className="bg-dark-900">Select budget</option>
                          <option value="10k-25k" className="bg-dark-900">$10,000 - $25,000</option>
                          <option value="25k-50k" className="bg-dark-900">$25,000 - $50,000</option>
                          <option value="50k-100k" className="bg-dark-900">$50,000 - $100,000</option>
                          <option value="100k+" className="bg-dark-900">$100,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">Service Needed</label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all"
                      >
                        <option value="" className="bg-dark-900">Select a service</option>
                        <option value="web" className="bg-dark-900">Web Development</option>
                        <option value="mobile" className="bg-dark-900">Mobile App Development</option>
                        <option value="design" className="bg-dark-900">UI/UX Design</option>
                        <option value="cloud" className="bg-dark-900">Cloud & DevOps</option>
                        <option value="strategy" className="bg-dark-900">Digital Strategy</option>
                        <option value="other" className="bg-dark-900">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40 hover:scale-105"
                    >
                      <Send className="w-5 h-5" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:border-primary-500/30 transition-all duration-300 group block"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-600/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-dark-400 text-sm mb-1">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </a>
              ))}

              {/* Quick Response */}
              <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-primary-600/5 to-accent-500/5">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-5 h-5 text-accent-400" />
                  <h4 className="text-white font-semibold">Quick Response</h4>
                </div>
                <p className="text-dark-400 text-sm leading-relaxed">
                  We typically respond within 2-4 hours during business hours. For urgent matters, 
                  don't hesitate to call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-dark-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-dark-400">
              Quick answers to common questions about working with us.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <ArrowRight className={`w-5 h-5 text-primary-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-dark-400 leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden h-80 flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-accent-500/5 grid-pattern" />
            <div className="text-center relative z-10">
              <MapPin className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Our Office</h3>
              <p className="text-dark-400">123 Innovation Drive, San Francisco, CA 94105</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
