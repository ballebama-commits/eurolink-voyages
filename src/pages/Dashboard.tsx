import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, CheckCircle2, Clock, User, LogOut, Bell } from 'lucide-react';
import { useLanguage } from '../i18n/translations';

export default function Dashboard() {
  const { t, dir } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <main dir={dir} className="pt-20 min-h-screen flex items-center">
        <div className="max-w-md mx-auto px-4 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Client Portal</h2>
              <p className="text-ink-400 text-sm">Access your application dashboard</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ink-300 mb-2">Email</label>
                <input type="email" required defaultValue="client@example.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-500/50 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-300 mb-2">Password</label>
                <input type="password" required defaultValue="demo123" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-500/50 transition-all" />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl btn-primary">Sign In</button>
            </form>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main dir={dir} className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome back, John</h1>
            <p className="text-ink-400">Track your application progress</p>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="p-2 rounded-lg text-ink-400 hover:text-white hover:bg-white/5 transition-all">
            <LogOut className="w-5 h-5" />
          </button>
        </div>

        {/* Status Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {[
            { icon: FileText, label: 'Application Status', value: 'In Progress', color: 'text-brand-400' },
            { icon: Clock, label: 'Current Step', value: 'Document Review', color: 'text-gold-400' },
            { icon: Bell, label: 'Pending Actions', value: '2 items', color: 'text-emerald-400' },
          ].map((card, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              <card.icon className={`w-6 h-6 ${card.color} mb-3`} />
              <div className="text-ink-400 text-sm mb-1">{card.label}</div>
              <div className="text-white font-bold text-lg">{card.value}</div>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="glass rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6">Application Progress</h3>
          <div className="space-y-4">
            {[
              { step: 'Registration & Profile Audit', status: 'completed' },
              { step: 'Document Collection', status: 'completed' },
              { step: 'Employer Matching', status: 'current' },
              { step: 'Contract Validation', status: 'pending' },
              { step: 'Visa Application', status: 'pending' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.status === 'completed' ? 'bg-emerald-500/20 border border-emerald-500/30' :
                  item.status === 'current' ? 'bg-brand-500/20 border border-brand-500/30' :
                  'bg-white/5 border border-white/10'
                }`}>
                  {item.status === 'completed' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> :
                   item.status === 'current' ? <Clock className="w-4 h-4 text-brand-400" /> :
                   <span className="text-ink-500 text-xs">{i + 1}</span>}
                </div>
                <span className={`flex-1 ${item.status === 'pending' ? 'text-ink-500' : 'text-white'}`}>{item.step}</span>
                <span className={`text-xs px-2 py-1 rounded ${
                  item.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400' :
                  item.status === 'current' ? 'bg-brand-500/10 text-brand-400' :
                  'bg-white/5 text-ink-500'
                }`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Document Upload */}
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">Upload Documents</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Passport', 'Diploma', 'Criminal Record', 'CV (Europass)', 'Medical Certificate', 'Photos (4x4)'].map((doc, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-brand-500/30 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-ink-400" />
                  <span className="text-ink-300 text-sm">{doc}</span>
                </div>
                <Upload className="w-4 h-4 text-brand-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
