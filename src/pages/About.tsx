import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, Target, Award, Globe, Coffee, Rocket } from 'lucide-react';

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'We push boundaries and embrace emerging technologies to deliver cutting-edge solutions.' },
  { icon: Heart, title: 'Passion', desc: 'Every project is fueled by our genuine love for creating exceptional digital experiences.' },
  { icon: Users, title: 'Collaboration', desc: 'We work as an extension of your team, fostering open communication and shared ownership.' },
  { icon: Target, title: 'Excellence', desc: 'We hold ourselves to the highest standards, delivering nothing less than world-class quality.' },
];

const team = [
  { name: 'Alex Rivera', role: 'CEO & Founder', bio: 'Visionary leader with 15+ years in digital innovation.', avatar: 'AR' },
  { name: 'Jordan Kim', role: 'CTO', bio: 'Full-stack architect passionate about scalable systems.', avatar: 'JK' },
  { name: 'Maya Patel', role: 'Design Director', bio: 'Award-winning designer crafting memorable experiences.', avatar: 'MP' },
  { name: 'Chris Zhang', role: 'Lead Developer', bio: 'Code craftsman specializing in React and cloud architecture.', avatar: 'CZ' },
  { name: 'Sofia Martinez', role: 'Project Manager', bio: 'Expert in agile methodologies and client relations.', avatar: 'SM' },
  { name: 'David Okafor', role: 'DevOps Lead', bio: 'Infrastructure wizard ensuring 99.99% uptime.', avatar: 'DO' },
];

const milestones = [
  { year: '2018', title: 'Founded', desc: 'Started with a vision to redefine digital experiences' },
  { year: '2019', title: 'First 50 Clients', desc: 'Rapid growth through word-of-mouth and exceptional results' },
  { year: '2020', title: 'Global Expansion', desc: 'Expanded services to clients across 20+ countries' },
  { year: '2022', title: '100+ Team Members', desc: 'Grew into a full-service digital powerhouse' },
  { year: '2024', title: 'Industry Awards', desc: 'Recognized with multiple design and innovation awards' },
  { year: '2026', title: 'The Future', desc: 'Continuing to push the boundaries of what\'s possible' },
];

export default function About() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We're a Team of <span className="gradient-text">Dreamers & Makers</span>
            </h1>
            <p className="text-lg text-dark-400 leading-relaxed max-w-2xl">
              Founded in 2018, Nexus Digital has grown from a small startup into a global digital agency. 
              We believe in the power of technology to transform businesses and create meaningful connections with audiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-dark-400 leading-relaxed">
                To empower businesses with transformative digital solutions that drive growth, 
                enhance user experiences, and create lasting impact in an ever-evolving digital landscape. 
                We strive to be the bridge between ambitious vision and technological reality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-400 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-dark-400 leading-relaxed">
                To be the world's most trusted digital partner, known for our relentless pursuit of excellence, 
                innovative thinking, and unwavering commitment to our clients' success. We envision a future 
                where every business has access to world-class digital solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <value.icon className="w-10 h-10 text-primary-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto text-lg">
              Key milestones that shaped who we are today.
            </p>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-card rounded-2xl p-6 inline-block">
                      <span className="text-primary-400 font-bold text-lg">{m.year}</span>
                      <h4 className="text-white font-bold text-xl mt-1">{m.title}</h4>
                      <p className="text-dark-400 text-sm mt-2">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950 z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto text-lg">
              Talented individuals united by a shared passion for digital excellence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:border-primary-500/30 transition-all duration-300 group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h4 className="text-white font-bold text-lg">{member.name}</h4>
                <p className="text-primary-400 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-dark-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Coffee, value: '10,000+', label: 'Cups of Coffee' },
              { icon: Award, value: '45+', label: 'Awards Won' },
              { icon: Rocket, value: '200+', label: 'Projects Launched' },
              { icon: Users, value: '30+', label: 'Countries Served' },
            ].map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center glass-card rounded-2xl p-6"
              >
                <fact.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white">{fact.value}</div>
                <div className="text-dark-400 text-sm mt-1">{fact.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
