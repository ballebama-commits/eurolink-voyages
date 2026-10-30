import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/translations';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import Services from './pages/Services';
import Process from './pages/Process';
import Countries from './pages/Countries';
import Pricing from './pages/Pricing';
import Eligibility from './pages/Eligibility';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-ink-950 text-ink-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:id" element={<Countries />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/legal/:type" element={<Legal />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
          <WhatsAppWidget />
          <Toaster position="top-right" toastOptions={{
            style: { background: '#1e293b', color: '#f1f5f9', border: '1px solid rgba(148, 163, 184, 0.1)' },
            success: { iconTheme: { primary: '#10b981', secondary: '#f1f5f9' } },
            error: { iconTheme: { primary: '#ef4444', secondary: '#f1f5f9' } },
          }} />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
