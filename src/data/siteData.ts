export interface Country {
  id: string;
  name: Record<string, string>;
  flag: string;
  image: string;
  gallery: string[];
  description: Record<string, string>;
  sectors: Record<string, string[]>;
  visaTypes: Record<string, string[]>;
  avgSalary: string;
  procedureTime: string;
}

export const countries: Country[] = [
  {
    id: 'germany',
    name: { en: 'Germany', fr: 'Allemagne', ru: 'Германия', ar: 'ألمانيا' },
    flag: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560969184-11fe6c2c718b?w=600&q=80',
      'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=600&q=80',
      'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=600&q=80',
    ],
    description: {
      en: 'Germany offers the Chancenkarte (Opportunity Card) and skilled worker visas. Europe\'s largest economy with high demand in healthcare, engineering, IT, and hospitality.',
      fr: 'L\'Allemagne offre la Chancenkarte (Carte Opportunité) et des visas pour travailleurs qualifiés. La plus grande économie d\'Europe avec une forte demande en santé, ingénierie, IT et hôtellerie.',
      ru: 'Германия предлагает Chancenkarte и визы для квалифицированных работников. Крупнейшая экономика Европы.',
      ar: 'تقدم ألمانيا بطاقة الفرصة وتأشيرات العمال المهرة. أكبر اقتصاد في أوروبا.',
    },
    sectors: {
      en: ['Healthcare', 'Engineering', 'IT & Cybersecurity', 'Hospitality', 'Construction', 'Manufacturing'],
      fr: ['Santé', 'Ingénierie', 'IT & Cybersécurité', 'Hôtellerie', 'Construction', 'Industrie'],
      ru: ['Здравоохранение', 'Инженерия', 'ИТ', 'Гостиницы', 'Строительство'],
      ar: ['الرعاية الصحية', 'الهندسة', 'تكنولوجيا المعلومات', 'الضيافة', 'البناء'],
    },
    visaTypes: {
      en: ['Skilled Worker Visa', 'Chancenkarte (Opportunity Card)', 'EU Blue Card'],
      fr: ['Visa travailleur qualifié', 'Chancenkarte (Carte Opportunité)', 'Carte Bleue UE'],
      ru: ['Виза квалифицированного работника', 'Chancenkarte', 'Голубая карта ЕС'],
      ar: ['تأشيرة عامل ماهر', 'بطاقة الفرصة', 'البطاقة الزرقاء'],
    },
    avgSalary: '€2,500 - €5,000/month',
    procedureTime: '3-5 months',
  },
  {
    id: 'france',
    name: { en: 'France', fr: 'France', ru: 'Франция', ar: 'فرنسا' },
    flag: '🇫🇷',
    image: 'https://images.unsplash.com/photo-1502602682916-03761f9d0689?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1499856871958-5b963283db00?w=600&q=80',
      'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&q=80',
      'https://images.unsplash.com/photo-1478391679764-b2d8b3a12fbb?w=600&q=80',
    ],
    description: {
      en: 'France offers the "Salarié" visa and "Passeport Talent" program. A leading destination with rich culture and strong demand in hospitality, healthcare, and agriculture.',
      fr: 'La France propose le visa "Salarié" et le dispositif "Passeport Talent". Une destination de premier plan avec une forte demande en hôtellerie, santé et agriculture.',
      ru: 'Франция предлагает визу "Salarié" и программу "Passeport Talent".',
      ar: 'تقدم فرنسا تأشيرة "Salarié" وبرنامج "Passeport Talent".',
    },
    sectors: {
      en: ['Hospitality & Restaurant', 'Healthcare', 'Agriculture', 'Construction', 'IT', 'Education'],
      fr: ['Hôtellerie-Restauration', 'Santé', 'Agriculture', 'Construction', 'Informatique', 'Éducation'],
      ru: ['Гостиницы', 'Здравоохранение', 'Сельское хозяйство', 'Строительство'],
      ar: ['الضيافة', 'الرعاية الصحية', 'الزراعة', 'البناء'],
    },
    visaTypes: {
      en: ['Visa Salarié', 'Passeport Talent', 'Visa Travailleur Temporaire'],
      fr: ['Visa Salarié', 'Passeport Talent', 'Visa Travailleur Temporaire'],
      ru: ['Виза Salarié', 'Passeport Talent'],
      ar: ['تأشيرة Salarié', 'Passeport Talent'],
    },
    avgSalary: '€2,000 - €4,500/month',
    procedureTime: '3-6 months',
  },
  {
    id: 'belgium',
    name: { en: 'Belgium', fr: 'Belgique', ru: 'Бельгия', ar: 'بلجيكا' },
    flag: '🇧🇪',
    image: 'https://images.unsplash.com/photo-1559113202-c916b8e44d8b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558635924-b60e3d8588fe?w=600&q=80',
      'https://images.unsplash.com/photo-1564515437264-b8c7877d45b9?w=600&q=80',
      'https://images.unsplash.com/photo-1542633524-68139a2a1a61?w=600&q=80',
    ],
    description: {
      en: 'Belgium offers the Single Permit (work + residence). High demand for healthcare professionals, engineers, and skilled tradespeople in a multilingual environment.',
      fr: 'La Belgique offre le Permis Unique (travail + séjour). Forte demande pour les professionnels de santé, ingénieurs et métiers qualifiés.',
      ru: 'Бельгия предлагает Единое разрешение (работа + проживание).',
      ar: 'تقدم بلجيكا التصريح الموحد (عمل + إقامة).',
    },
    sectors: {
      en: ['Healthcare', 'Engineering', 'Construction', 'Logistics', 'Finance', 'IT'],
      fr: ['Santé', 'Ingénierie', 'Construction', 'Logistique', 'Finance', 'Informatique'],
      ru: ['Здравоохранение', 'Инженерия', 'Строительство', 'Логистика'],
      ar: ['الرعاية الصحية', 'الهندسة', 'البناء', 'اللوجستيات'],
    },
    visaTypes: {
      en: ['Single Permit (Work + Residence)', 'EU Blue Card', 'Professional Card'],
      fr: ['Permis Unique (Travail + Séjour)', 'Carte Bleue UE', 'Carte Professionnelle'],
      ru: ['Единое разрешение', 'Голубая карта ЕС'],
      ar: ['التصريح الموحد', 'البطاقة الزرقاء'],
    },
    avgSalary: '€2,300 - €4,800/month',
    procedureTime: '4-6 months',
  },
  {
    id: 'italy',
    name: { en: 'Italy', fr: 'Italie', ru: 'Италия', ar: 'إيطاليا' },
    flag: '🇮🇹',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&q=80',
      'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&q=80',
      'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?w=600&q=80',
    ],
    description: {
      en: 'Italy recruits heavily in hospitality, agriculture, healthcare, and construction. The Decreto Flussi opens annual quotas for non-EU workers.',
      fr: 'L\'Italie recrute massivement dans l\'hôtellerie, l\'agriculture, la santé et la construction. Le Decreto Flussi ouvre des quotas annuels.',
      ru: 'Италия активно набирает в гостиницы, сельское хозяйство, здравоохранение.',
      ar: 'تستأجر إيطاليا بكثافة في الضيافة والزراعة والرعاية الصحية.',
    },
    sectors: {
      en: ['Hospitality', 'Agriculture', 'Healthcare', 'Construction', 'Manufacturing', 'Domestic Care'],
      fr: ['Hôtellerie', 'Agriculture', 'Santé', 'Construction', 'Industrie', 'Aide à domicile'],
      ru: ['Гостиницы', 'Сельское хозяйство', 'Здравоохранение', 'Строительство'],
      ar: ['الضيافة', 'الزراعة', 'الرعاية الصحية', 'البناء'],
    },
    visaTypes: {
      en: ['Decreto Flussi Work Visa', 'Seasonal Work Visa', 'Self-employment Visa'],
      fr: ['Visa Decreto Flussi', 'Visa travail saisonnier', 'Visa travail indépendant'],
      ru: ['Виза Decreto Flussi', 'Сезонная рабочая виза'],
      ar: ['تأشيرة Decreto Flussi', 'تأشيرة عمل موسمية'],
    },
    avgSalary: '€1,500 - €3,500/month',
    procedureTime: '3-5 months',
  },
  {
    id: 'poland',
    name: { en: 'Poland', fr: 'Pologne', ru: 'Польша', ar: 'بولندا' },
    flag: '🇵🇱',
    image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=600&q=80',
      'https://images.unsplash.com/photo-1519524767868-1bf96f81b8ee?w=600&q=80',
      'https://images.unsplash.com/photo-1587082355065-32cf9478f0ac?w=600&q=80',
    ],
    description: {
      en: 'Poland is a fast-growing economy with high demand for workers in warehousing, production, transport, and agri-food. Simplified procedures for non-EU workers.',
      fr: 'La Pologne est une économie en croissance rapide avec une forte demande en entreposage, production, transport et agroalimentaire.',
      ru: 'Польша — быстрорастущая экономика с высоким спросом на рабочих.',
      ar: 'بولندا اقتصاد سريع النمو مع طلب عالٍ على العمال.',
    },
    sectors: {
      en: ['Warehousing', 'Production', 'Transport', 'Agri-food', 'Construction', 'Manufacturing'],
      fr: ['Entreposage', 'Production', 'Transport', 'Agroalimentaire', 'Construction'],
      ru: ['Складирование', 'Производство', 'Транспорт', 'Агропродукты'],
      ar: ['التخزين', 'الإنتاج', 'النقل', 'الأغذية'],
    },
    visaTypes: {
      en: ['National Work Visa (Type D)', 'Temporary Residence Permit', 'Seasonal Work Permit'],
      fr: ['Visa national travail (Type D)', 'Permis de séjour temporaire', 'Permis travail saisonnier'],
      ru: ['Национальная рабочая виза (тип D)', 'Временный вид на жительство'],
      ar: ['تأشيرة عمل وطنية (النوع D)', 'تصريح إقامة مؤقت'],
    },
    avgSalary: '€1,200 - €2,800/month',
    procedureTime: '2-4 months',
  },
  {
    id: 'greece',
    name: { en: 'Greece', fr: 'Grèce', ru: 'Греция', ar: 'اليونان' },
    flag: '🇬🇷',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&q=80',
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
      'https://images.unsplash.com/photo-1580377968162-3f6d49600d8b?w=600&q=80',
    ],
    description: {
      en: 'Greece recruits in hospitality, personal care, construction, agriculture, IT, and engineering. A gateway to Southern Europe with a Mediterranean lifestyle.',
      fr: 'La Grèce recrute dans l\'hôtellerie, l\'aide à la personne, la construction, l\'agriculture, l\'informatique et l\'ingénierie.',
      ru: 'Греция набирает в гостиницы, уход, строительство, сельское хозяйство, ИТ.',
      ar: 'تستأجر اليونان في الضيافة والرعاية والبناء والزراعة.',
    },
    sectors: {
      en: ['Hospitality', 'Personal Care', 'Construction', 'Agriculture', 'IT', 'Engineering'],
      fr: ['Hôtellerie', 'Aide à la personne', 'Construction', 'Agriculture', 'Informatique', 'Ingénierie'],
      ru: ['Гостиницы', 'Уход', 'Строительство', 'Сельское хозяйство', 'ИТ'],
      ar: ['الضيافة', 'الرعاية', 'البناء', 'الزراعة', 'تكنولوجيا المعلومات'],
    },
    visaTypes: {
      en: ['National Work Visa (Type D)', 'Employment Residence Permit', 'Seasonal Work Visa'],
      fr: ['Visa national travail (Type D)', 'Permis de séjour emploi', 'Visa travail saisonnier'],
      ru: ['Национальная рабочая виза (тип D)', 'Вид на жительство'],
      ar: ['تأشيرة عمل وطنية (النوع D)', 'تصريح إقامة'],
    },
    avgSalary: '€1,300 - €3,000/month',
    procedureTime: '3-5 months',
  },
  {
    id: 'luxembourg',
    name: { en: 'Luxembourg', fr: 'Luxembourg', ru: 'Люксембург', ar: 'لوكسمبورغ' },
    flag: '🇱🇺',
    image: 'https://images.unsplash.com/photo-1582428156671-5e84e5d2f5c5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1597431500581-f483c12e7f0c?w=600&q=80',
      'https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?w=600&q=80',
      'https://images.unsplash.com/photo-1591084728795-1149f32d9866?w=600&q=80',
    ],
    description: {
      en: 'Luxembourg offers the highest salaries in the EU. High demand for nurses, teachers, social workers, finance, IT, cybersecurity, and skilled trades.',
      fr: 'Le Luxembourg offre les salaires les plus élevés de l\'UE. Forte demande pour infirmiers, enseignants, finance, IT, cybersécurité et métiers qualifiés.',
      ru: 'Люксембург предлагает самые высокие зарплаты в ЕС.',
      ar: 'يقدم لوكسمبورغ أعلى الرواتب في الاتحاد الأوروبي.',
    },
    sectors: {
      en: ['Healthcare', 'Education', 'Finance & Banking', 'IT & Cybersecurity', 'Construction', 'Industry'],
      fr: ['Santé', 'Éducation', 'Finance & Banque', 'IT & Cybersécurité', 'Construction', 'Industrie'],
      ru: ['Здравоохранение', 'Образование', 'Финансы', 'ИТ', 'Строительство'],
      ar: ['الرعاية الصحية', 'التعليم', 'المالية', 'تكنولوجيا المعلومات', 'البناء'],
    },
    visaTypes: {
      en: ['Work Permit (Authorization to Stay)', 'EU Blue Card', 'Temporary Residence Permit'],
      fr: ['Autorisation de séjour travail', 'Carte Bleue UE', 'Permis séjour temporaire'],
      ru: ['Разрешение на работу', 'Голубая карта ЕС'],
      ar: ['تصريح عمل', 'البطاقة الزرقاء'],
    },
    avgSalary: '€3,000 - €7,000/month',
    procedureTime: '4-6 months',
  },
];

export const pricingData = [
  {
    step: { en: '1. Registration & Eligibility Audit', fr: '1. Inscription & Audit éligibilité', ru: '1. Регистрация и аудит', ar: '1. التسجيل والتدقيق' },
    officialFees: { en: 'Free', fr: 'Gratuit', ru: 'Бесплатно', ar: 'مجاني' },
    agencyFees: '€25 - €50',
    condition: { en: 'Upon signing the support contract', fr: 'À la signature du contrat', ru: 'При подписании контракта', ar: 'عند توقيع العقد' },
  },
  {
    step: { en: '2. Placement & Employer Search', fr: '2. Placement & Recherche d\'Employeur', ru: '2. Размещение и поиск работодателя', ar: '2. التوظيف والبحث عن صاحب عمل' },
    officialFees: { en: 'Free', fr: 'Gratuit', ru: 'Бесплатно', ar: 'مجاني' },
    agencyFees: '€150 - €380',
    condition: { en: 'At start of active applications', fr: 'Au démarrage des candidatures actives', ru: 'При начале активных заявок', ar: 'عند بدء الطلبات النشطة' },
  },
  {
    step: { en: '3. Contract Validation / AST', fr: '3. Validation Contrat / AST', ru: '3. Подтверждение контракта', ar: '3. التحقق من العقد' },
    officialFees: '€0 - €80',
    agencyFees: '€460 - €920',
    condition: { en: 'Upon presentation of signed Residence Authorization', fr: 'Sur présentation de l\'Autorisation signée', ru: 'При предъявлении подписанного разрешения', ar: 'عند تقديم التفويض الموقع' },
  },
  {
    step: { en: '4. Visa Application', fr: '4. Dépôt de Visa', ru: '4. Подача визы', ar: '4. تقديم التأشيرة' },
    officialFees: '€180 - €245',
    agencyFees: '€230 - €460',
    condition: { en: 'Upon completion of full consular file', fr: 'À la finalisation du dossier consulaire', ru: 'При завершении консульского дела', ar: 'عند اكتمال الملف القنصلي' },
  },
];

export const testimonials = [
  {
    name: 'Marie N.',
    country: 'Cameroon → France',
    text: {
      en: 'Eurolink made my dream of working in Paris a reality. Their team handled everything from CV optimization to interview prep. I\'m now a nurse at a top hospital!',
      fr: 'Eurolink a réalisé mon rêve de travailler à Paris. Leur équipe a tout géré, de l\'optimisation du CV à la préparation de l\'entretien.',
      ru: 'Eurolink осуществил мою мечту работать в Париже.',
      ar: 'حققت يورولينك حلمي في العمل في باريس.',
    },
    avatar: 'MN',
  },
  {
    name: 'Jean-Paul K.',
    country: 'Cameroon → Germany',
    text: {
      en: 'The Chancenkarte process seemed impossible until I found Eurolink. They guided me through every step and I\'m now working as an engineer in Munich.',
      fr: 'Le processus Chancenkarte semblait impossible jusqu\'à ce que je trouve Eurolink. Je travaille maintenant comme ingénieur à Munich.',
      ru: 'Процесс Chancenkarte казался невозможным, пока я не нашел Eurolink.',
      ar: 'بدت عملية Chancenkarte مستحيلة حتى وجدت يورولينك.',
    },
    avatar: 'JK',
  },
  {
    name: 'Amina T.',
    country: 'Cameroon → Luxembourg',
    text: {
      en: 'Professional, transparent, and truly caring. Eurolink helped me secure a finance position in Luxembourg with an amazing salary. Best investment I ever made!',
      fr: 'Professionnel, transparent et vraiment attentionné. Eurolink m\'a aidée à obtenir un poste en finance au Luxembourg.',
      ru: 'Профессионально, прозрачно и с заботой. Eurolink помог мне получить должность в финансах.',
      ar: 'محترف وشفاف ومهتم حقاً. ساعدتني يورولينك في الحصول على وظيفة في المالية.',
    },
    avatar: 'AT',
  },
];

export const faqData = [
  {
    q: {
      en: 'How long does the entire process take?',
      fr: 'Combien de temps dure l\'ensemble de la procédure ?',
      ru: 'Сколько времени занимает весь процесс?',
      ar: 'كم تستغرق العملية برمتها؟',
    },
    a: {
      en: 'The entire process typically takes 3 to 6 months, depending on the destination country, completeness of your file, and administrative processing times. We provide detailed timelines during your initial consultation.',
      fr: 'L\'ensemble de la procédure prend généralement 3 à 6 mois, selon le pays de destination, la complétude du dossier et les délais administratifs.',
      ru: 'Весь процесс обычно занимает от 3 до 6 месяцев.',
      ar: 'تستغرق العملية برمتها عادة من 3 إلى 6 أشهر.',
    },
  },
  {
    q: {
      en: 'Do you guarantee visa approval?',
      fr: 'Garantissez-vous l\'obtention du visa ?',
      ru: 'Гарантируете ли вы получение визы?',
      ar: 'هل تضمن الحصول على التأشيرة؟',
    },
    a: {
      en: 'No. Eurolink Voyages is bound by an obligation of means, not results. The final decision on visa issuance rests exclusively with the competent embassies and consulates. However, our expertise maximizes your chances of success.',
      fr: 'Non. Eurolink Voyages est tenu à une obligation de moyens et non de résultats. La décision finale appartient exclusivement aux ambassades et consulats.',
      ru: 'Нет. Eurolink Voyages обязуется средствами, а не результатом.',
      ar: 'لا. يورولينك فوياجس ملتزمة بوسيلة وليس بنتيجة.',
    },
  },
  {
    q: {
      en: 'What documents do I need to provide?',
      fr: 'Quels documents dois-je fournir ?',
      ru: 'Какие документы мне нужно предоставить?',
      ar: 'ما هي الوثائق التي أحتاج إلى تقديمها؟',
    },
    a: {
      en: 'You will need a valid passport (>3 months after stay), criminal record (bulletin n°3 <3 months), diplomas and certifications, work experience proofs, Europass-format CV, medical certificate, and passport photos. We provide a complete personalized checklist.',
      fr: 'Vous aurez besoin d\'un passeport valide, casier judiciaire, diplômes, preuves d\'expérience, CV Europass, certificat médical et photos.',
      ru: 'Вам понадобится действующий паспорт, справка о несудимости, дипломы, подтверждения опыта, резюме Europass.',
      ar: 'ستحتاج إلى جواز سفر صالح، سجل جنائي، شهادات، إثبات الخبرة، سيرة ذاتية Europass.',
    },
  },
  {
    q: {
      en: 'What are the payment options?',
      fr: 'Quelles sont les options de paiement ?',
      ru: 'Какие варианты оплаты?',
      ar: 'ما هي خيارات الدفع؟',
    },
    a: {
      en: 'We accept payments in EUR, USD, and FCFA. Payment is structured in stages aligned with your file progress. We accept bank transfers, mobile money, and international cards.',
      fr: 'Nous acceptons les paiements en EUR, USD et FCFA. Le paiement est structuré par étapes.',
      ru: 'Мы принимаем оплату в EUR, USD и FCFA.',
      ar: 'نقبل الدفع باليورو والدولار والفرنك.',
    },
  },
  {
    q: {
      en: 'Do you provide accommodation in Europe?',
      fr: 'Fournissez-vous un logement en Europe ?',
      ru: 'Предоставляете ли вы жилье в Европе?',
      ar: 'هل توفر السكن في أوروبا؟',
    },
    a: {
      en: 'Yes! For the first 3 months after arrival, accommodation is covered by our service. For unskilled workers, we also cover 3 months of training costs upon arrival.',
      fr: 'Oui ! Pour les 3 premiers mois après l\'arrivée, le logement est couvert par notre service.',
      ru: 'Да! На первые 3 месяца проживание покрывается нашим сервисом.',
      ar: 'نعم! الأشهر الثلاثة الأولى بعد الوصول يغطى السكن.',
    },
  },
];
