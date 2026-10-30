import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'ru' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.process': 'Our Process',
    'nav.countries': 'Countries',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.login': 'Client Portal',
    'nav.start': 'Start Application',
    
    // Home
    'home.hero.title': 'Your Professional Project in Europe Starts Here',
    'home.hero.subtitle': 'Eurolink Voyages guides you step by step in obtaining your work visa for the Schengen Area. Rigor, transparency and expertise at your service.',
    'home.hero.cta': 'Check My Eligibility in 2 min',
    'home.hero.cta2': 'Discover Our Services',
    'home.hero.badge': 'Trusted by 500+ candidates across Africa',
    'home.hero.price': 'From €100 to open the door to a job in Europe',
    
    'home.pillars.title': 'Why Choose Eurolink Voyages?',
    'home.pillars.subtitle': 'Three pillars that define our commitment to your success',
    'home.pillar1.title': 'Administrative Rigor',
    'home.pillar1.desc': 'Every document is verified with meticulous attention to meet Schengen standards.',
    'home.pillar2.title': 'Interview Simulation',
    'home.pillar2.desc': 'Realistic training sessions with expert advisors to boost your confidence.',
    'home.pillar3.title': 'Total Transparency',
    'home.pillar3.desc': 'Clear pricing, no hidden fees. You know exactly what you pay for.',
    
    'home.reassurance.title': 'Your Trusted Partner for Europe',
    'home.reassurance.subtitle': 'Join hundreds of successful candidates who started their European career with us',
    
    'home.countries.title': 'Destination Countries',
    'home.countries.subtitle': 'Explore opportunities in the Schengen Area',
    'home.countries.cta': 'View All Countries',
    
    'home.testimonials.title': 'Success Stories',
    'home.testimonials.subtitle': 'Real experiences from our candidates',
    
    'home.cta.title': 'Ready to Start Your European Adventure?',
    'home.cta.subtitle': 'Take the first step today. Our team is ready to guide you through every stage of the process.',
    'home.cta.button': 'Start My Application',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'End-to-end support to secure your file',
    'services.s1.title': 'Profile Evaluation',
    'services.s1.desc': 'Comprehensive analysis of your diplomas, experience, and alignment with Schengen requirements.',
    'services.s2.title': 'File Preparation',
    'services.s2.desc': 'Rigorous verification of supporting documents, work contracts, cover letters, and official forms.',
    'services.s3.title': 'Consular Preparation',
    'services.s3.desc': 'Realistic interview simulation with expert advisors to reduce stress and optimize your pitch.',
    'services.s4.title': 'Logistics & Insurance',
    'services.s4.desc': 'Assistance obtaining mandatory Schengen insurance and recommendations for temporary accommodation.',
    
    // Process
    'process.title': 'Our Method',
    'process.subtitle': 'A linear journey structured for your success',
    'process.step1.title': 'Initial Diagnosis',
    'process.step1.desc': 'Complete audit of the candidate\'s current situation and eligibility.',
    'process.step2.title': 'Strategy & Collection',
    'process.step2.desc': 'Development of a personalized list of required documents.',
    'process.step3.title': 'Optimization & Simulation',
    'process.step3.desc': 'Finalization of the file and intensive oral training.',
    'process.step4.title': 'Submission & Follow-up',
    'process.step4.desc': 'Support until the day of submission and post-visa follow-up.',
    'process.duration': 'Total procedure duration: 3 to 6 months (varies by administration)',
    
    // Countries
    'countries.title': 'Visa Guides by Country',
    'countries.subtitle': 'Detailed information for each destination',
    'countries.explore': 'Explore opportunities',
    
    // Pricing
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'Clear fees, no surprises. Pay as you progress.',
    'pricing.step': 'Step',
    'pricing.official': 'Official Fees',
    'pricing.agency': 'Agency Fees',
    'pricing.condition': 'Release Condition',
    'pricing.note': 'All prices are indicative and may vary based on your specific situation and destination country.',
    'pricing.cta': 'Get a Personalized Quote',
    
    // Eligibility
    'eligibility.title': 'Check Your Eligibility',
    'eligibility.subtitle': 'Answer a few questions to find out if you qualify for a Schengen work visa',
    'eligibility.step': 'Step',
    'eligibility.next': 'Next',
    'eligibility.prev': 'Previous',
    'eligibility.submit': 'Submit Application',
    'eligibility.result.success': 'Congratulations! You appear eligible!',
    'eligibility.result.pending': 'Thank you! Our team will review your profile within 24 hours.',
    
    // About
    'about.title': 'About Eurolink Voyages',
    'about.subtitle': 'Your trusted partner for professional mobility in Europe',
    'about.story': 'Our Story',
    'about.story.text': 'Founded in the United Kingdom, Eurolink Voyages was born from a simple observation: thousands of talented professionals across Africa and beyond dream of building their career in Europe, but face complex administrative barriers. We created Eurolink to bridge this gap, offering rigorous, transparent, and human support to every candidate.',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To facilitate professional mobility towards the Schengen Area by providing personalized, quality support that respects the regulations in force. We are committed to an obligation of means, not results — the final decision always rests with the embassies and consulates.',
    'about.values': 'Our Values',
    'about.value1': 'Integrity — We never promise what we cannot deliver',
    'about.value2': 'Transparency — Clear pricing and honest communication',
    'about.value3': 'Excellence — Rigorous attention to every detail',
    'about.value4': 'Humanity — Each candidate is unique and deserves personalized attention',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Our team is here to answer all your questions',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone (WhatsApp)',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Get in Touch',
    'contact.hours': 'Business Hours: Mon-Fri 9AM-6PM GMT',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to the most common questions',
    
    // Footer
    'footer.tagline': 'Your gateway to professional opportunities in Europe.',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.disclaimer': 'Disclaimer',
    'footer.legalNotice': 'Legal Notice',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.getStarted': 'Get Started',
    'common.download': 'Download',
    'common.upload': 'Upload',
    
    // Disclaimer
    'disclaimer.title': 'Disclaimer',
    'disclaimer.content': 'Eurolink Voyages provides administrative and logistical support services for work visa applications to Schengen countries (file preparation, accommodation, flight, employer liaison). Eurolink Voyages is bound by an obligation of means and not of results. The final decision on visa issuance rests exclusively with the competent embassies and consulates. Eurolink Voyages is not affiliated with any embassy, consulate, or government entity.',
  },
  
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.process': 'Notre Méthode',
    'nav.countries': 'Pays',
    'nav.pricing': 'Tarifs',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.login': 'Espace Client',
    'nav.start': 'Commencer',
    
    'home.hero.title': 'Votre projet professionnel en Europe commence ici',
    'home.hero.subtitle': 'Eurolink Voyages vous accompagne pas à pas dans l\'obtention de votre visa de travail pour l\'Espace Schengen. Rigueur, transparence et expertise à votre service.',
    'home.hero.cta': 'Évaluer mon éligibilité en 2 min',
    'home.hero.cta2': 'Découvrir nos services',
    'home.hero.badge': 'Plus de 500 candidats nous font confiance',
    'home.hero.price': 'Dès 100€ pour ouvrir la porte d\'un emploi en Europe',
    
    'home.pillars.title': 'Pourquoi choisir Eurolink Voyages ?',
    'home.pillars.subtitle': 'Trois piliers qui définissent notre engagement pour votre réussite',
    'home.pillar1.title': 'Rigueur administrative',
    'home.pillar1.desc': 'Chaque document est vérifié avec une attention méticuleuse pour respecter les normes Schengen.',
    'home.pillar2.title': 'Simulation d\'entretiens',
    'home.pillar2.desc': 'Sessions de formation réalistes avec des conseillers experts pour booster votre confiance.',
    'home.pillar3.title': 'Transparence totale',
    'home.pillar3.desc': 'Tarification claire, sans frais cachés. Vous savez exactement ce que vous payez.',
    
    'home.reassurance.title': 'Votre partenaire de confiance pour l\'Europe',
    'home.reassurance.subtitle': 'Rejoignez des centaines de candidats qui ont réussi leur carrière européenne avec nous',
    
    'home.countries.title': 'Pays de destination',
    'home.countries.subtitle': 'Explorez les opportunités dans l\'espace Schengen',
    'home.countries.cta': 'Voir tous les pays',
    
    'home.testimonials.title': 'Témoignages de réussite',
    'home.testimonials.subtitle': 'Expériences réelles de nos candidats',
    
    'home.cta.title': 'Prêt à commencer votre aventure européenne ?',
    'home.cta.subtitle': 'Faites le premier pas aujourd\'hui. Notre équipe est prête à vous guider à chaque étape.',
    'home.cta.button': 'Commencer ma candidature',
    
    'services.title': 'Nos Services',
    'services.subtitle': 'Un accompagnement de A à Z pour sécuriser votre dossier',
    'services.s1.title': 'Évaluation de Profil',
    'services.s1.desc': 'Analyse complète de vos diplômes, expérience et cohérence avec les exigences Schengen.',
    'services.s2.title': 'Constitution du Dossier',
    'services.s2.desc': 'Vérification rigoureuse des pièces justificatives, contrats, lettres et formulaires officiels.',
    'services.s3.title': 'Préparation Consulaire',
    'services.s3.desc': 'Simulation d\'entretien en conditions réelles avec un conseiller expert.',
    'services.s4.title': 'Logistique & Assurance',
    'services.s4.desc': 'Aide à l\'obtention des assurances Schengen et recommandations de logement.',
    
    'process.title': 'Notre Méthode',
    'process.subtitle': 'Un parcours linéaire structuré pour votre succès',
    'process.step1.title': 'Diagnostic initial',
    'process.step1.desc': 'Audit complet de la situation actuelle du candidat.',
    'process.step2.title': 'Stratégie & Collecte',
    'process.step2.desc': 'Élaboration de la liste personnalisée des documents requis.',
    'process.step3.title': 'Optimisation & Simulation',
    'process.step3.desc': 'Finalisation du dossier et entraînement oral intensif.',
    'process.step4.title': 'Soumission & Suivi',
    'process.step4.desc': 'Accompagnement jusqu\'au dépôt et suivi post-visa.',
    'process.duration': 'Durée totale de la procédure : 3 à 6 mois (variable selon l\'administration)',
    
    'countries.title': 'Guides des Visas par Pays',
    'countries.subtitle': 'Informations détaillées pour chaque destination',
    'countries.explore': 'Explorer les opportunités',
    
    'pricing.title': 'Tarification transparente',
    'pricing.subtitle': 'Des frais clairs, sans surprise. Payez au fur et à mesure.',
    'pricing.step': 'Étape',
    'pricing.official': 'Frais officiels',
    'pricing.agency': 'Honoraires agence',
    'pricing.condition': 'Condition de déblocage',
    'pricing.note': 'Tous les prix sont indicatifs et peuvent varier selon votre situation et le pays de destination.',
    'pricing.cta': 'Obtenir un devis personnalisé',
    
    'eligibility.title': 'Vérifiez votre éligibilité',
    'eligibility.subtitle': 'Répondez à quelques questions pour savoir si vous êtes éligible',
    'eligibility.step': 'Étape',
    'eligibility.next': 'Suivant',
    'eligibility.prev': 'Précédent',
    'eligibility.submit': 'Soumettre ma candidature',
    'eligibility.result.success': 'Félicitations ! Vous semblez éligible !',
    'eligibility.result.pending': 'Merci ! Notre équipe examinera votre profil sous 24h.',
    
    'about.title': 'À propos d\'Eurolink Voyages',
    'about.subtitle': 'Votre partenaire de confiance pour la mobilité professionnelle en Europe',
    'about.story': 'Notre Histoire',
    'about.story.text': 'Fondée au Royaume-Uni, Eurolink Voyages est née d\'un constat simple : des milliers de professionnels talentueux à travers l\'Afrique et au-delà rêvent de construire leur carrière en Europe, mais se heurtent à des barrières administratives complexes. Nous avons créé Eurolink pour combler ce fossé.',
    'about.mission': 'Notre Mission',
    'about.mission.text': 'Faciliter la mobilité professionnelle vers l\'espace Schengen en offrant un accompagnement personnalisé et de qualité. Nous sommes tenus à une obligation de moyens et non de résultats.',
    'about.values': 'Nos Valeurs',
    'about.value1': 'Intégrité — Nous ne promettons jamais ce que nous ne pouvons pas tenir',
    'about.value2': 'Transparence — Tarification claire et communication honnête',
    'about.value3': 'Excellence — Attention rigoureuse à chaque détail',
    'about.value4': 'Humanité — Chaque candidat est unique',
    
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Notre équipe est là pour répondre à toutes vos questions',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Adresse email',
    'contact.form.phone': 'Téléphone (WhatsApp)',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Votre message',
    'contact.form.send': 'Envoyer le message',
    'contact.info.title': 'Nous contacter',
    'contact.hours': 'Horaires : Lun-Ven 9h-18h GMT',
    
    'faq.title': 'Questions fréquentes',
    'faq.subtitle': 'Trouvez les réponses aux questions les plus courantes',
    
    'footer.tagline': 'Votre porte d\'entrée vers les opportunités professionnelles en Europe.',
    'footer.company': 'Entreprise',
    'footer.services': 'Services',
    'footer.legal': 'Mentions légales',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions générales',
    'footer.disclaimer': 'Clause de non-responsabilité',
    'footer.legalNotice': 'Mentions légales',
    
    'common.learnMore': 'En savoir plus',
    'common.viewAll': 'Voir tout',
    'common.getStarted': 'Commencer',
    'common.download': 'Télécharger',
    'common.upload': 'Téléverser',
    
    'disclaimer.title': 'Clause de non-responsabilité',
    'disclaimer.content': 'Eurolink Voyages fournit un service d\'accompagnement administratif et logistique pour les demandes de visa de travail à destination des pays de l\'espace Schengen. Eurolink Voyages est tenu à une obligation de moyens et non de résultats. La décision finale concernant la délivrance du visa appartient exclusivement aux ambassades et consulats compétents.',
  },
  
  ru: {
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.process': 'Наш метод',
    'nav.countries': 'Страны',
    'nav.pricing': 'Цены',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'nav.faq': 'Вопросы',
    'nav.login': 'Личный кабинет',
    'nav.start': 'Начать',
    
    'home.hero.title': 'Ваш профессиональный проект в Европе начинается здесь',
    'home.hero.subtitle': 'Eurolink Voyages сопровождает вас шаг за шагом в получении рабочей визы в Шенгенскую зону. Строгость, прозрачность и экспертиза к вашим услугам.',
    'home.hero.cta': 'Проверить eligibility за 2 мин',
    'home.hero.cta2': 'Наши услуги',
    'home.hero.badge': 'Нам доверяют более 500 кандидатов',
    'home.hero.price': 'От €100 чтобы открыть дверь к работе в Европе',
    
    'home.pillars.title': 'Почему выбирают Eurolink Voyages?',
    'home.pillars.subtitle': 'Три столпа, определяющие нашу приверженность вашему успеху',
    'home.pillar1.title': 'Административная строгость',
    'home.pillar1.desc': 'Каждый документ проверяется с тщательным вниманием к стандартам Шенгена.',
    'home.pillar2.title': 'Имитация собеседований',
    'home.pillar2.desc': 'Реалистичные тренинги с экспертами для повышения вашей уверенности.',
    'home.pillar3.title': 'Полная прозрачность',
    'home.pillar3.desc': 'Четкое ценообразование, без скрытых платежей.',
    
    'home.reassurance.title': 'Ваш надежный партнер для Европы',
    'home.reassurance.subtitle': 'Присоединяйтесь к сотням успешных кандидатов',
    
    'home.countries.title': 'Страны назначения',
    'home.countries.subtitle': 'Изучите возможности в Шенгенской зоне',
    'home.countries.cta': 'Все страны',
    
    'home.testimonials.title': 'Истории успеха',
    'home.testimonials.subtitle': 'Реальный опыт наших кандидатов',
    
    'home.cta.title': 'Готовы начать свое европейское приключение?',
    'home.cta.subtitle': 'Сделайте первый шаг сегодня. Наша команда готова помочь.',
    'home.cta.button': 'Начать заявку',
    
    'services.title': 'Наши услуги',
    'services.subtitle': 'Полное сопровождение для обеспечения вашего дела',
    'services.s1.title': 'Оценка профиля',
    'services.s1.desc': 'Комплексный анализ ваших дипломов и опыта.',
    'services.s2.title': 'Подготовка документов',
    'services.s2.desc': 'Тщательная проверка всех документов.',
    'services.s3.title': 'Консульская подготовка',
    'services.s3.desc': 'Реалистичная имитация собеседования.',
    'services.s4.title': 'Логистика и страхование',
    'services.s4.desc': 'Помощь с страховкой и жильем.',
    
    'process.title': 'Наш метод',
    'process.subtitle': 'Линейный путь, структурированный для вашего успеха',
    'process.step1.title': 'Первичная диагностика',
    'process.step1.desc': 'Полный аудит текущей ситуации кандидата.',
    'process.step2.title': 'Стратегия и сбор',
    'process.step2.desc': 'Разработка персонализированного списка документов.',
    'process.step3.title': 'Оптимизация и имитация',
    'process.step3.desc': 'Завершение дела и интенсивная устная подготовка.',
    'process.step4.title': 'Подача и сопровождение',
    'process.step4.desc': 'Поддержка до дня подачи и пост-визовое сопровождение.',
    'process.duration': 'Общая продолжительность: от 3 до 6 месяцев',
    
    'countries.title': 'Визовые гиды по странам',
    'countries.subtitle': 'Подробная информация по каждому направлению',
    'countries.explore': 'Изучить возможности',
    
    'pricing.title': 'Прозрачное ценообразование',
    'pricing.subtitle': 'Четкие цены, без сюрпризов',
    'pricing.step': 'Шаг',
    'pricing.official': 'Официальные сборы',
    'pricing.agency': 'Гонорары агентства',
    'pricing.condition': 'Условие разблокировки',
    'pricing.note': 'Все цены ориентировочные.',
    'pricing.cta': 'Получить персональное предложение',
    
    'eligibility.title': 'Проверьте свою eligibility',
    'eligibility.subtitle': 'Ответьте на несколько вопросов',
    'eligibility.step': 'Шаг',
    'eligibility.next': 'Далее',
    'eligibility.prev': 'Назад',
    'eligibility.submit': 'Отправить заявку',
    'eligibility.result.success': 'Поздравляем! Вы подходите!',
    'eligibility.result.pending': 'Спасибо! Наша команда рассмотрит ваш профиль в течение 24 часов.',
    
    'about.title': 'О Eurolink Voyages',
    'about.subtitle': 'Ваш надежный партнер для профессиональной мобильности в Европе',
    'about.story': 'Наша история',
    'about.story.text': 'Основанная в Великобритании, Eurolink Voyages родилась из простого наблюдения.',
    'about.mission': 'Наша миссия',
    'about.mission.text': 'Содействовать профессиональной мобильности в Шенгенскую зону.',
    'about.values': 'Наши ценности',
    'about.value1': 'Честность',
    'about.value2': 'Прозрачность',
    'about.value3': 'Превосходство',
    'about.value4': 'Человечность',
    
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Наша команда готова ответить на все ваши вопросы',
    'contact.form.name': 'Полное имя',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Телефон (WhatsApp)',
    'contact.form.subject': 'Тема',
    'contact.form.message': 'Ваше сообщение',
    'contact.form.send': 'Отправить',
    'contact.info.title': 'Связаться',
    'contact.hours': 'Часы работы: Пн-Пт 9:00-18:00 GMT',
    
    'faq.title': 'Часто задаваемые вопросы',
    'faq.subtitle': 'Найдите ответы на самые распространенные вопросы',
    
    'footer.tagline': 'Ваш путь к профессиональным возможностям в Европе.',
    'footer.company': 'Компания',
    'footer.services': 'Услуги',
    'footer.legal': 'Юридическая информация',
    'footer.rights': 'Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.disclaimer': 'Отказ от ответственности',
    'footer.legalNotice': 'Юридическое уведомление',
    
    'common.learnMore': 'Подробнее',
    'common.viewAll': 'Смотреть все',
    'common.getStarted': 'Начать',
    'common.download': 'Скачать',
    'common.upload': 'Загрузить',
    
    'disclaimer.title': 'Отказ от ответственности',
    'disclaimer.content': 'Eurolink Voyages предоставляет услуги административной и логистической поддержки для заявлений на рабочую визу.',
  },
  
  ar: {
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.process': 'منهجيتنا',
    'nav.countries': 'الدول',
    'nav.pricing': 'الأسعار',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.faq': 'الأسئلة',
    'nav.login': 'بوابة العميل',
    'nav.start': 'ابدأ الآن',
    
    'home.hero.title': 'مشروعك المهني في أوروبا يبدأ من هنا',
    'home.hero.subtitle': 'يورولينك فوياجس ترافقك خطوة بخطوة في الحصول على تأشيرة العمل لمنطقة شنغن. الدقة والشفافية والخبرة في خدمتك.',
    'home.hero.cta': 'تحقق من أهليتك في دقيقتين',
    'home.hero.cta2': 'اكتشف خدماتنا',
    'home.hero.badge': 'يثق بنا أكثر من 500 مرشح',
    'home.hero.price': 'ابتداءً من 100 يورو لفتح باب العمل في أوروبا',
    
    'home.pillars.title': 'لماذا تختار يورولينك فوياجس؟',
    'home.pillars.subtitle': 'ثلاثة أعمدة تحدد التزامنا بنجاحك',
    'home.pillar1.title': 'الدقة الإدارية',
    'home.pillar1.desc': 'يتم التحقق من كل وثيقة بعناية فائقة لتلبية معايير شنغن.',
    'home.pillar2.title': 'محاكاة المقابلات',
    'home.pillar2.desc': 'جلسات تدريب واقعية مع مستشارين خبراء لتعزيز ثقتك.',
    'home.pillar3.title': 'الشفافية الكاملة',
    'home.pillar3.desc': 'تسعير واضح، بدون رسوم خفية.',
    
    'home.reassurance.title': 'شريكك الموثوق لأوروبا',
    'home.reassurance.subtitle': 'انضم إلى مئات المرشحين الناجحين',
    
    'home.countries.title': 'دول الوجهة',
    'home.countries.subtitle': 'استكشف الفرص في منطقة شنغن',
    'home.countries.cta': 'عرض جميع الدول',
    
    'home.testimonials.title': 'قصص النجاح',
    'home.testimonials.subtitle': 'تجارب حقيقية من مرشحينا',
    
    'home.cta.title': 'مستعد لبدء مغامرتك الأوروبية؟',
    'home.cta.subtitle': 'اتخذ الخطوة الأولى اليوم. فريقنا جاهز لإرشادك.',
    'home.cta.button': 'ابدأ طلبي',
    
    'services.title': 'خدماتنا',
    'services.subtitle': 'دعم شامل لتأمين ملفك',
    'services.s1.title': 'تقييم الملف الشخصي',
    'services.s1.desc': 'تحليل شامل لشهاداتك وخبرتك.',
    'services.s2.title': 'إعداد الملف',
    'services.s2.desc': 'التحقق الدقيق من جميع الوثائق.',
    'services.s3.title': 'التحضير القنصلي',
    'services.s3.desc': 'محاكاة واقعية للمقابلة.',
    'services.s4.title': 'اللوجستيات والتأمين',
    'services.s4.desc': 'المساعدة في الحصول على التأمين والسكن.',
    
    'process.title': 'منهجيتنا',
    'process.subtitle': 'مسار خطي منظم لنجاحك',
    'process.step1.title': 'التشخيص الأولي',
    'process.step1.desc': 'تدقيق كامل لوضع المرشح الحالي.',
    'process.step2.title': 'الاستراتيجية والجمع',
    'process.step2.desc': 'تطوير قائمة مخصصة بالوثائق المطلوبة.',
    'process.step3.title': 'التحسين والمحاكاة',
    'process.step3.desc': 'إنهاء الملف والتدريب الشفهي المكثف.',
    'process.step4.title': 'التقديم والمتابعة',
    'process.step4.desc': 'الدعم حتى يوم التقديم والمتابعة بعد التأشيرة.',
    'process.duration': 'المدة الإجمالية: من 3 إلى 6 أشهر',
    
    'countries.title': 'أدلة التأشيرات حسب الدولة',
    'countries.subtitle': 'معلومات مفصلة لكل وجهة',
    'countries.explore': 'استكشف الفرص',
    
    'pricing.title': 'تسعير شفاف',
    'pricing.subtitle': 'رسوم واضحة، بدون مفاجآت',
    'pricing.step': 'الخطوة',
    'pricing.official': 'الرسوم الرسمية',
    'pricing.agency': 'أتعاب الوكالة',
    'pricing.condition': 'شرط الإفراج',
    'pricing.note': 'جميع الأسعار إرشادية.',
    'pricing.cta': 'احصل على عرض مخصص',
    
    'eligibility.title': 'تحقق من أهليتك',
    'eligibility.subtitle': 'أجب على بعض الأسئلة',
    'eligibility.step': 'الخطوة',
    'eligibility.next': 'التالي',
    'eligibility.prev': 'السابق',
    'eligibility.submit': 'إرسال الطلب',
    'eligibility.result.success': 'تهانينا! يبدو أنك مؤهل!',
    'eligibility.result.pending': 'شكراً لك! سيقوم فريقنا بمراجعة ملفك خلال 24 ساعة.',
    
    'about.title': 'عن يورولينك فوياجس',
    'about.subtitle': 'شريكك الموثوق للتنقل المهني في أوروبا',
    'about.story': 'قصتنا',
    'about.story.text': 'تأسست في المملكة المتحدة، ولدت يورولينك فوياجس من ملاحظة بسيطة.',
    'about.mission': 'مهمتنا',
    'about.mission.text': 'تسهيل التنقل المهني نحو منطقة شنغن.',
    'about.values': 'قيمنا',
    'about.value1': 'النزاهة',
    'about.value2': 'الشفافية',
    'about.value3': 'التميز',
    'about.value4': 'الإنسانية',
    
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'فريقنا هنا للإجابة على جميع أسئلتك',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'الهاتف (واتساب)',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'رسالتك',
    'contact.form.send': 'إرسال الرسالة',
    'contact.info.title': 'تواصل معنا',
    'contact.hours': 'ساعات العمل: الاثنين-الجمعة 9ص-6م بتوقيت غرينتش',
    
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'اعثر على إجابات للأسئلة الأكثر شيوعاً',
    
    'footer.tagline': 'بوابتك إلى الفرص المهنية في أوروبا.',
    'footer.company': 'الشركة',
    'footer.services': 'الخدمات',
    'footer.legal': 'الشؤون القانونية',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.disclaimer': 'إخلاء المسؤولية',
    'footer.legalNotice': 'الإشعار القانوني',
    
    'common.learnMore': 'اعرف المزيد',
    'common.viewAll': 'عرض الكل',
    'common.getStarted': 'ابدأ',
    'common.download': 'تحميل',
    'common.upload': 'رفع',
    
    'disclaimer.title': 'إخلاء المسؤولية',
    'disclaimer.content': 'تقدم يورولينك فوياجس خدمات الدعم الإداري واللوجستي لطلبات تأشيرة العمل.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };
  
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
