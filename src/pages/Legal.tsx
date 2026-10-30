import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Shield, FileText, AlertTriangle, Landmark } from 'lucide-react';
import { useLanguage } from '../i18n/translations';

const legalContent: Record<string, { icon: any; titleKey: string; content: Record<string, string[]> }> = {
  privacy: {
    icon: Shield,
    titleKey: 'footer.privacy',
    content: {
      en: [
        'At Eurolink Voyages, we are committed to protecting your personal data in compliance with the General Data Protection Regulation (GDPR).',
        'DATA COLLECTION: We collect personal data (name, email, phone, passport copies, diplomas, criminal records) solely for the purpose of processing your work visa application.',
        'DATA STORAGE: All documents are stored on encrypted servers with restricted access. We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit.',
        'DATA RETENTION: Your data is retained for the duration of your application process plus 2 years, after which it is securely deleted unless you consent to extended retention.',
        'YOUR RIGHTS: You have the right to access, rectify, delete, and port your data. Contact us at privacy@eurolinkvoyages.com to exercise these rights.',
        'THIRD PARTIES: We only share your data with embassies, consulates, and employers as necessary for your application. We never sell your data.',
      ],
      fr: [
        'Chez Eurolink Voyages, nous nous engageons à protéger vos données personnelles conformément au RGPD.',
        'COLLECTE : Nous collectons des données personnelles uniquement pour traiter votre demande de visa.',
        'STOCKAGE : Tous les documents sont stockés sur des serveurs cryptés avec accès restreint.',
        'CONSERVATION : Vos données sont conservées pendant la durée de votre demande + 2 ans.',
        'VOS DROITS : Vous avez le droit d\'accéder, rectifier, supprimer et porter vos données.',
        'TIERS : Nous ne partageons vos données qu\'avec les ambassades et employeurs concernés.',
      ],
      ru: ['Eurolink Voyages защищает ваши данные в соответствии с GDPR.'],
      ar: ['تلتزم يورولينك فوياجس بحماية بياناتك الشخصية وفقاً لـ GDPR.'],
    },
  },
  terms: {
    icon: FileText,
    titleKey: 'footer.terms',
    content: {
      en: [
        'These Terms of Service govern your use of Eurolink Voyages services.',
        'SERVICES: Eurolink Voyages provides administrative and logistical support for Schengen work visa applications, including file preparation, employer matching, and consular assistance.',
        'PAYMENT: Fees are structured in stages as detailed on our Pricing page. Payment is due at each milestone as specified in your contract.',
        'REFUNDS: Fees already disbursed to third parties (embassies, insurance providers) are non-refundable. Agency fees may be partially refundable depending on the stage of your application.',
        'CANCELLATION: You may cancel your application at any time. Refund eligibility depends on the progress of your file.',
        'INTELLECTUAL PROPERTY: All content on this website is the property of Eurolink Voyages Ltd.',
        'GOVERNING LAW: These terms are governed by the laws of England and Wales.',
      ],
      fr: [
        'Ces Conditions Générales régissent l\'utilisation des services Eurolink Voyages.',
        'SERVICES : Accompagnement administratif et logistique pour visas de travail Schengen.',
        'PAIEMENT : Frais structurés par étapes comme détaillé sur notre page Tarifs.',
        'REMBOURSEMENTS : Les frais versés aux tiers ne sont pas remboursables.',
        'ANNULATION : Vous pouvez annuler à tout moment. Éligibilité au remboursement selon l\'avancement.',
        'PROPRIÉTÉ : Tout le contenu est la propriété d\'Eurolink Voyages Ltd.',
        'DROIT APPLICABLE : Lois de l\'Angleterre et du Pays de Galles.',
      ],
      ru: ['Условия использования услуг Eurolink Voyages.'],
      ar: ['شروط استخدام خدمات يورولينك فوياجس.'],
    },
  },
  disclaimer: {
    icon: AlertTriangle,
    titleKey: 'footer.disclaimer',
    content: {
      en: [
        'NATURE OF SERVICE: Eurolink Voyages provides an administrative and logistical support service for work visa applications to Schengen countries (file preparation, accommodation, flight, employer liaison).',
        'OBLIGATION OF MEANS: Eurolink Voyages is bound by an obligation of means and not of results. We commit to providing our best expertise and diligence in processing your application.',
        'NO GUARANTEE: We cannot guarantee the issuance of a visa. The final decision rests exclusively with the competent embassies and consulates of the destination countries.',
        'NO AFFILIATION: Eurolink Voyages is not affiliated with, endorsed by, or connected to any embassy, consulate, or government entity of any country.',
        'INDEPENDENT ADVISORY: We operate as an independent consultancy. Our role is to advise, prepare, and accompany you through the process.',
        'LIMITATION OF LIABILITY: Eurolink Voyages shall not be liable for any decisions made by immigration authorities, delays caused by administrative processes, or circumstances beyond our reasonable control.',
      ],
      fr: [
        'NATURE DE LA PRESTATION : Eurolink Voyages fournit un service d\'accompagnement administratif et logistique pour les demandes de visa de travail à destination des pays de l\'espace Schengen (constitution du dossier, hébergement, billet, mise en relation avec l\'employeur).',
        'OBLIGATION DE MOYENS : Eurolink Voyages est tenu à une obligation de moyens et non de résultats.',
        'AUCUNE GARANTIE : Nous ne pouvons garantir l\'obtention d\'un visa. La décision finale appartient exclusivement aux ambassades et consulats compétents.',
        'AUCUNE AFFILIATION : Eurolink Voyages n\'est affilié à aucune ambassade, consulat ou entité gouvernementale.',
        'CONSEIL INDÉPENDANT : Nous opérons en tant que cabinet de conseil indépendant.',
        'LIMITATION DE RESPONSABILITÉ : Eurolink Voyages ne saurait être tenu responsable des décisions des autorités migratoires.',
      ],
      ru: ['Eurolink Voyages предоставляет услуги административной поддержки. Обязательство средств, не результата.'],
      ar: ['تقدم يورولينك فوياجس خدمات الدعم الإداري. التزام بوسيلة وليس بنتيجة.'],
    },
  },
  notice: {
    icon: Landmark,
    titleKey: 'footer.legalNotice',
    content: {
      en: [
        'COMPANY NAME: Eurolink Voyages Ltd',
        'LEGAL FORM: Private Limited Company',
        'REGISTRATION: Company No. 12345678, registered in England and Wales',
        'REGISTERED OFFICE: 123 Innovation Drive, London, EC1A 1BB, United Kingdom',
        'VAT NUMBER: GB 123 4567 89',
        'DIRECTOR: Alexander Wright',
        'CONTACT: +44 20 1234 5678 | contact@eurolinkvoyages.com',
        'WEBSITE HOST: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA',
        'PUBLICATION DIRECTOR: Alexander Wright',
      ],
      fr: [
        'DÉNOMINATION : Eurolink Voyages Ltd',
        'FORME JURIDIQUE : Société à responsabilité limitée',
        'IMMATRICULATION : N° 12345678, enregistrée en Angleterre et au Pays de Galles',
        'SIÈGE SOCIAL : 123 Innovation Drive, Londres, EC1A 1BB, Royaume-Uni',
        'N° TVA : GB 123 4567 89',
        'DIRECTEUR : Alexander Wright',
        'CONTACT : +44 20 1234 5678 | contact@eurolinkvoyages.com',
        'HÉBERGEUR : Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA',
        'DIRECTEUR DE PUBLICATION : Alexander Wright',
      ],
      ru: ['Eurolink Voyages Ltd, зарегистрирована в Англии и Уэльсе.'],
      ar: ['يورولينك فوياجس Ltd، مسجلة في إنجلترا وويلز.'],
    },
  },
};

export default function Legal() {
  const { type } = useParams();
  const { t, language, dir } = useLanguage();
  const content = legalContent[type || 'disclaimer'] || legalContent.disclaimer;
  const Icon = content.icon;

  return (
    <main dir={dir} className="pt-20">
      <section className="relative py-24 hero-gradient grid-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <Icon className="w-8 h-8 text-brand-400" />
              <span className="text-brand-300 font-medium">{t(content.titleKey)}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t(content.titleKey)}</h1>
            <p className="text-ink-400">Last updated: January 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              {content.content[language].map((paragraph, i) => (
                <p key={i} className="text-ink-300 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <Link to="/contact" className="text-brand-400 hover:text-brand-300 transition-colors">
              Questions? Contact us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
