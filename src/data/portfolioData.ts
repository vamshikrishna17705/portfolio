export type DomainType = 'all' | 'pm' | 'data-ai' | 'engineering';

export interface Internship {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  domain: 'pm' | 'data-ai' | 'engineering';
  objective: string;
  highlights: string[];
  skills: string[];
  featured?: boolean;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  domain: 'pm' | 'data-ai' | 'engineering';
  category: 'AI / Software' | 'Data & Quantitative' | 'Deep Tech & Metallurgy';
  description: string;
  objective: string;
  bullets: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured?: boolean;
}

export interface Competition {
  award: 'Gold Winner' | 'Silver Winner' | 'Winner';
  title: string;
  organization: string;
  date: string;
  domain: 'pm' | 'data-ai' | 'engineering';
  description: string;
  bullets: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  domain: DomainType;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
  detail?: string;
}

export const PERSONAL_INFO = {
  name: 'Arepally Vamshi Krishna',
  shortName: 'Vamshi Krishna',
  rollNumber: '23MT10009',
  degree: 'B.Tech. (Hons.) in Metallurgical & Materials Engineering',
  institute: 'Indian Institute of Technology, Kharagpur',
  classYear: '2027',
  cgpa: '6.72 / 10',
  email: 'arepallyvamshikrishna17@gmail.com',
  linkedin: 'https://linkedin.com/in/arepally-vamshi-krishna-176599327',
  github: 'https://github.com/vamshikrishna17705',
  portfolioUrl: 'https://portfolio-mu-sepia-11.vercel.app',
  signeUrl: 'https://signe.in',
  tagline: 'Product Manager · AI & Data Systems Engineer · Metallurgical Engineer',
  bio: 'Engineering candidate at IIT Kharagpur building high-leverage products at the intersection of product management, AI/ML workflows, and technical systems. Experienced across 10+ internships, co-founder of a ₹9L+ revenue D2C brand, and holder of multiple inter-IIT gold medals.',
};

export const CV_DOWNLOADS = [
  {
    title: 'Product Management CV',
    description: 'Focusing on Product Roadmaps, RICE Prioritization, User Research, and Metrics Growth',
    fileName: 'Vamshi_Krishna_Product_CV.pdf',
    url: '/Vamshi_Krishna_CV.pdf',
    domain: 'pm',
    badge: 'PM & Growth',
  },
  {
    title: 'Data Science & AI CV',
    description: 'Focusing on ML Models, ETL Pipelines, Generative AI, and Product Analytics',
    fileName: 'Vamshi_Krishna_Data_AI_CV.pdf',
    url: '/Vamshi_Krishna_CV.pdf',
    domain: 'data-ai',
    badge: 'AI & Data Systems',
  },
  {
    title: 'Core Materials Engineering CV',
    description: 'Focusing on Metallurgical Processes, DES Metal Extraction, and Characterization (XRD/SEM)',
    fileName: 'Vamshi_Krishna_Metallurgy_CV.pdf',
    url: '/Vamshi_Krishna_CV.pdf',
    domain: 'engineering',
    badge: 'Materials & Core',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech. (Hons.) in Metallurgical and Materials Engineering',
    institution: 'IIT Kharagpur',
    year: '2023 - 2027',
    score: '6.72 / 10 CGPA',
    detail: 'Core coursework in Thermodynamics, Computational Metallurgy, Transport Phenomena, and Materials Characterization',
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'Alphores Junior College',
    year: '2023',
    score: '95%',
    detail: 'Excellence in Mathematics, Physics, and Chemistry',
  },
  {
    degree: 'Board of Secondary Education (Class X)',
    institution: 'Siddartha High School',
    year: '2021',
    score: '10.0 / 10 GPA',
    detail: 'Perfect 10/10 GPA with institutional honors',
  },
];

export const STATS_DATA = [
  { numericValue: 900000, prefix: '₹', suffix: '+', label: 'Revenue Generated', subtext: 'Co-Founder at Signe D2C Brand' },
  { numericValue: 98, prefix: '', suffix: '%', label: 'Extraction Efficiency', subtext: 'Sustainable DES E-Waste Metallurgy' },
  { numericValue: 40, prefix: '+', suffix: '%', label: 'MVP Adoption Surge', subtext: 'Galaxy AI at Imago AI' },
  { numericValue: 3, prefix: '', suffix: 'x', label: 'Inter-IIT / National Podiums', subtext: 'IIT Bombay & IIT Kharagpur Gold & Silver' },
];

export const INTERNSHIPS_DATA: Internship[] = [
  {
    id: 'bounce-infinity',
    company: 'Bounce Infinity',
    role: 'Product Management & Data Analytics Intern',
    location: 'Bengaluru',
    period: 'May 2025 – Jun 2025',
    domain: 'pm',
    objective: "Identify feature gaps and prioritize improvements across Bounce Infinity's B2C and B2B product lines, including app, scooter, and swapping ecosystem.",
    highlights: [
      'Investigated 20+ key performance metrics for E1+ and overall B2C/B2B business workflows, diagnosing usage friction across the rider base.',
      'Mapped 15+ functional requirements into E1X PRDs and pinpointed 8+ critical improvement areas across app, scooter telemetry, and battery-swapping stations.',
      'Used Excel and Google Sheets for metrics tracking, gathered direct customer feedback, and authored PRDs in Notion with clear strategic prioritization (RICE).',
    ],
    skills: ['PRD Authoring', 'Notion', 'RICE Framework', 'Metrics Tracking', 'Customer Feedback', 'B2B/B2C Workflows'],
    featured: true,
  },
  {
    id: 'lovingroom',
    company: 'Lovingroom',
    role: 'Product Management Intern',
    location: 'Amsterdam, Netherlands (Remote)',
    period: 'May 2026 – Jul 2026',
    domain: 'pm',
    objective: "Support data-driven product decisions across Lovingroom's workflows through structured research, KPI analysis, and team recommendations.",
    highlights: [
      'Used SQL to extract and analyze user and business data, then built KPI dashboards supporting critical, data-driven product decisions consistently weekly.',
      'Analyzed user and business requirements, product research findings, and KPI trends across multiple Lovingroom workflows and product areas.',
      'Delivered 5+ actionable recommendations and structured weekly reports that directly informed key product planning and roadmap milestones.',
    ],
    skills: ['SQL', 'KPI Dashboards', 'Product Roadmap', 'User Research', 'Data-Driven PM', 'Feature Prioritization'],
    featured: true,
  },
  {
    id: 'imago-ai',
    company: 'Imago AI',
    role: 'UX Engineer',
    location: 'Gurugram',
    period: 'May 2024 – Jul 2024',
    domain: 'data-ai',
    objective: 'Improved product alignment for Galaxy AI, a lab workflow tool, by closely and effectively collaborating with a 5-member UX and product team.',
    highlights: [
      'Conducted 20+ in-depth user interviews and authored detailed PRDs, translating data-driven insights into clear, validated end-to-end user flows.',
      'Analyzed user interview data and MVP adoption metrics to diagnose UX adjustments and PRD clarifications, reducing development rework by 35%.',
      'Increased MVP adoption by 40% and enabled on-time delivery of 6 features successfully across multiple cross-functional teams.',
    ],
    skills: ['User Interviews', 'PRDs', 'User Flow Mapping', 'MVP Adoption Metrics', 'Figma', 'UX Strategy'],
    featured: true,
  },
  {
    id: 'quick-verse',
    company: 'Quick Verse',
    role: 'Product Management Intern',
    location: 'IIT Kharagpur',
    period: 'Oct 2025 – Jan 2026',
    domain: 'pm',
    objective: 'Expand campus-based service offerings at IIT Kharagpur by growing the vendor network and overall brand outreach through strategic initiatives.',
    highlights: [
      'Built and managed an opportunity pipeline of 15+ vendor leads across Instagram, WhatsApp Business, and in-person campus events.',
      'Led a 15-member team to onboard 10 local vendors, improving brand outreach by 40% across campus touchpoints.',
      'Executed 10+ go-to-market strategies successfully to drive student adoption and partner satisfaction.',
    ],
    skills: ['Vendor Acquisition', 'Team Leadership (15 members)', 'GTM Strategy', 'Pipeline Tracking', 'Growth Operations'],
  },
  {
    id: 'skilldunia',
    company: 'SkillDunia Edutech',
    role: 'Product Management Intern (Sales & Marketing)',
    location: 'Hyderabad',
    period: 'May 2026 – Present',
    domain: 'pm',
    objective: 'Hit 40+ monthly enrollment targets through strategic and targeted student outreach and effective lead conversion strategies.',
    highlights: [
      'Tracked and analyzed lead conversion funnels and drop-off points across the entire student enrollment and outreach pipeline.',
      'Achieved 40+ monthly enrollments through targeted WhatsApp outreach, calling funnels, and data-backed messaging.',
      'Recommended process changes that reduced lead response time significantly across teams, noticeably lifting conversion rates.',
    ],
    skills: ['Funnel Optimization', 'Lead Conversion', 'Cohort Tracking', 'Edutech Growth', 'Sales Analytics'],
  },
  {
    id: 'gradgo',
    company: 'GradGo',
    role: 'Data Science Intern',
    location: 'Remote',
    period: 'Jan 2025 – Feb 2025',
    domain: 'data-ai',
    objective: 'Built machine learning models for prediction and classification tasks during a 2-month Data Science internship.',
    highlights: [
      'Utilized Python with Pandas and NumPy for efficient data processing, alongside SQL for querying and preparing structured datasets.',
      'Analyzed structured datasets to engineer features suited for training predictive and classification machine learning models.',
      'Delivered trained prediction and classification models as part of a structured two-month data science program.',
    ],
    skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Predictive Modeling', 'Classification ML', 'Feature Engineering'],
  },
  {
    id: 'kalva-engineers',
    company: 'Kalva Engineers Pvt. Ltd.',
    role: 'NDT & Turbine Blade Quality Assurance Engineer Intern',
    location: 'Hyderabad',
    period: 'Feb 2026 – Apr 2026',
    domain: 'engineering',
    objective: 'Investigated turbine-blade quality and structural integrity using NDT techniques and materials engineering principles to detect defects on-site.',
    highlights: [
      'Applied non-destructive testing (NDT) methods alongside materials engineering principles to inspect turbine blades and evaluate structural reliability.',
      'Analyzed metallurgical defects and quality parameters, relating material properties to component performance and fatigue life in turbine applications.',
      'Supported industrial inspection workflows, contributing to materials testing, defect classification, and on-site quality assurance practices.',
    ],
    skills: ['NDT Inspection', 'Turbine Blades', 'Structural Integrity', 'Defect Analysis', 'Quality Assurance', 'Metallurgy'],
    featured: true,
  },
  {
    id: 'bhel',
    company: 'Bharat Heavy Electricals Limited (BHEL)',
    role: 'Manufacturing & Industrial Systems Engineering Intern',
    location: 'Visakhapatnam',
    period: 'May 2026 – Jun 2026',
    domain: 'engineering',
    objective: 'Gained hands-on industrial exposure studying manufacturing processes, heavy engineering systems, and production operations.',
    highlights: [
      'Studied manufacturing processes and engineering systems directly on the shop floor, observing industrial equipment, standards, and production workflows closely.',
      'Analyzed engineering workflows and processes, developing a practical understanding of equipment tolerances and manufacturing standards.',
      'Observed end-to-end manufacturing operations, connecting theoretical metallurgical concepts with industrial process optimization.',
    ],
    skills: ['Manufacturing Systems', 'Heavy Engineering', 'Industrial Workflows', 'Process Optimization', 'Shop Floor Operations'],
  },
  {
    id: 'rinl',
    company: 'RINL Visakhapatnam Steel Plant',
    role: 'Blast Furnace & Ironmaking Process Intern',
    location: 'Visakhapatnam',
    period: 'Jun 2025 – Jul 2025',
    domain: 'engineering',
    objective: 'Studied blast furnace operations and ironmaking processes during a 4-week industrial internship training program.',
    highlights: [
      'Observed blast furnace operations directly on-site, applying metallurgical concepts to understand large-scale steel production processes and equipment.',
      'Analyzed blast furnace-based iron production processes, connecting key metallurgical thermodynamics with real-world industrial steelmaking operations.',
      'Developed a practical understanding of raw material charging, hot metal tapping, and energy efficiency in integrated steel plants.',
    ],
    skills: ['Blast Furnace', 'Ironmaking', 'Integrated Steel Plants', 'Thermodynamics', 'Pyrometallurgy'],
  },
  {
    id: 'midhani',
    company: 'Mishra Dhatu Nigam Limited (MIDHANI)',
    role: 'Industrial Training Intern',
    location: 'Hyderabad',
    period: 'Dec 2024 – Jan 2025',
    domain: 'engineering',
    objective: 'Completed a 4-week Industrial Training Program in Melt Shops at MIDHANI, gaining valuable industrial exposure firsthand practically.',
    highlights: [
      'Worked directly in melt-shop operations, observing metal melting processes and industrial metallurgical equipment used in production.',
      'Gained practical exposure to superalloys, special steels, and vacuum melting operations in an advanced industrial metallurgical environment.',
      'Earned a performance rating of "Good" throughout the training program as part of the IIT Kharagpur curriculum.',
    ],
    skills: ['Melt Shop Operations', 'Superalloys & Special Steels', 'Vacuum Melting', 'Industrial Metallurgy'],
  },
];

export const VENTURE_DATA = {
  name: 'Signe',
  title: 'Personalized Clothing Brand',
  role: 'Co-Founder',
  period: 'Sep 2025 – Present',
  website: 'https://signe.in',
  websiteDisplay: 'Signe.in',
  revenue: '₹9,00,000+ (9L+ INR)',
  description: 'Built and grew Signe into a customized apparel and personalized clothing brand through strategic digital marketing, efficient operations, and data-driven business decisions.',
  highlights: [
    'Generated ₹9L+ revenue by establishing an end-to-end customer acquisition and fulfillment engine.',
    'Managed the complete supply chain across multiple product lines, supplier negotiations, and fabric sourcing.',
    'Sold and marketed through Instagram and WhatsApp Business, automated web orders via Signe.in, and managed inventory in Excel.',
    'Grew customer acquisition and repeat purchase rates consistently over time via targeted customer engagement.',
  ],
  tags: ['D2C Brand', 'E-Commerce', 'Supply Chain', 'Growth Marketing', 'Unit Economics', 'Inventory Analytics'],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'insightflow-ai',
    number: '01',
    title: 'InsightFlow AI',
    subtitle: 'AI-Powered Business Analytics Platform (Self-Project)',
    domain: 'data-ai',
    category: 'AI / Software',
    description: 'A full-stack AI-driven business intelligence platform that automates ETL, generates KPI dashboards, detects revenue/metric anomalies, and enables conversational natural language queries.',
    objective: 'Build a full-stack AI-powered platform enabling automated business data analysis, insight generation, and natural language querying for users.',
    bullets: [
      'Architected a scalable full-stack application using Next.js, React.js, TypeScript, FastAPI, and Python.',
      'Engineered ML-driven anomaly detection models utilizing Isolation Forest, XGBoost, and K-Means clustering.',
      'Integrated Google Gemini API for natural-language chat over complex datasets, slashing time-to-insight for non-technical stakeholders.',
      'Built automated ETL pipelines and dynamic KPI dashboards with real-time visualization.',
    ],
    tags: ['Next.js', 'React.js', 'FastAPI', 'Python', 'XGBoost', 'Isolation Forest', 'K-Means', 'Gemini API'],
    githubUrl: 'https://github.com/vamshikrishna17705/insightflow-ai',
    image: '/images/project-insightflow.jpg',
    featured: true,
  },
  {
    id: 'ai-receptionist',
    number: '02',
    title: 'AI Receptionist Assistant',
    subtitle: 'Conversational AI & Automation Engineer (Self-Project)',
    domain: 'data-ai',
    category: 'AI / Software',
    description: 'An autonomous conversational AI receptionist that handles front-desk inquiries, answers visitor questions, and coordinates calendar bookings seamlessly through a conversational interface.',
    objective: 'Designed an AI receptionist supporting 3 workflows: front-desk assistance, visitor queries, and appointment scheduling through a single interface.',
    bullets: [
      'Built automated appointment booking, rescheduling, and cancellation flows using stateful conversational AI.',
      'Automated a 3-appointment workflow end-to-end and streamlined 3 front-desk operations, resolving queries directly.',
      'Implemented robust intent classification and structured calendar sync for real-time visitor coordination.',
    ],
    tags: ['Conversational AI', 'Prompt Engineering', 'FastAPI', 'Workflow Automation', 'Calendar Sync', 'NLP'],
    githubUrl: 'https://github.com/vamshikrishna17705',
    image: '/images/project-insightflow.jpg',
    featured: true,
  },
  {
    id: 'des-metal-extraction',
    number: '03',
    title: 'Sustainable Metal Extraction via Deep Eutectic Solvents',
    subtitle: 'IIT Kharagpur Course Project · Prof. Tarun Kumar Kundu',
    domain: 'engineering',
    category: 'Deep Tech & Metallurgy',
    description: 'Green hydrometallurgical extraction evaluating Deep Eutectic Solvents (DES) as eco-friendly alternatives to toxic acids for recovering critical minerals from electronic waste.',
    objective: 'Investigated Deep Eutectic Solvents as sustainable alternatives to conventional extraction, analyzing metal-ion complexation mechanisms.',
    bullets: [
      'Applied deep eutectic solvent-based extraction methods to evaluate metal recovery from e-waste, lithium, rare earth, gold, and silver.',
      'Achieved extraction efficiencies reaching 98% across targeted metals using optimized choline chloride/organic acid solvent systems.',
      'Demonstrated high recyclability of green solvents, significantly cutting secondary waste in hydrometallurgical processing.',
    ],
    tags: ['Deep Eutectic Solvents', 'E-Waste Recycling', 'Critical Minerals', '98% Efficiency', 'Hydrometallurgy', 'Sustainability'],
    image: '/images/project-finance.jpg',
    featured: true,
  },
  {
    id: 'lithium-ion-cathode',
    number: '04',
    title: 'Lithium-Ion Cathode Characterization (XRD & SEM)',
    subtitle: 'IIT Kharagpur Course Project · Prof. Karabi Das',
    domain: 'engineering',
    category: 'Deep Tech & Metallurgy',
    description: 'Comprehensive microstructure and crystallography study linking phase purity, crystal lattice parameters, and morphology to EV battery safety and cycle life.',
    objective: 'Analyzed NMC, LCO, and LFP cathode materials, linking crystal structure with energy density, cycle life, and overall safety.',
    bullets: [
      'Characterized cathode materials using X-Ray Diffraction (XRD) and Scanning Electron Microscopy (SEM) for phase purity and lattice parameters.',
      'Delivered a structured structural and performance comparison across three cathode chemistries (NMC vs LCO vs LFP).',
      'Informed safety and cycle-life conclusions directly applicable to EV battery management and longevity.',
    ],
    tags: ['XRD', 'SEM', 'Li-Ion Batteries', 'NMC / LFP / LCO', 'Materials Characterization', 'Microstructure'],
    image: '/images/project-risk.jpg',
    featured: true,
  },
  {
    id: 'quantitative-finance',
    number: '05',
    title: 'Quantitative Finance & Product Portfolio',
    subtitle: 'Risk Metrics, Sharpe Ratio & 3-Statement Modeling Engines',
    domain: 'pm',
    category: 'Data & Quantitative',
    description: 'A suite of Python financial modeling engines computing Sharpe ratios, Beta volatility, portfolio sector optimization, and integrated 3-statement DCF models.',
    objective: 'Develop quantitative algorithms to analyze risk-adjusted equity returns and model startup financial feasibility.',
    bullets: [
      'Computed returns, Beta indices, and Sharpe risk-adjusted parameters for a ₹1,00,000 equity portfolio of 10 NSE stocks.',
      'Built an integrated 3-Statement Model (P&L, Cash Flow, Balance Sheet) with automated DCF valuation and dynamic break-even sensitivity analysis.',
      'Programmed 5-panel statistical visualizers to assess sector weightings and risk-return tradeoffs.',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Financial Modeling', 'DCF Valuation', 'Sharpe Ratio', 'Beta Risk'],
    githubUrl: 'https://github.com/vamshikrishna17705/finance-product-portfolio',
    image: '/images/project-valuation.jpg',
  },
  {
    id: 'eaf-steelmaking',
    number: '06',
    title: 'Scrap-Based Electric Arc Furnace (EAF) Steelmaking',
    subtitle: 'IIT Kharagpur Term Project · Prof. Gour Gopal Roy',
    domain: 'engineering',
    category: 'Deep Tech & Metallurgy',
    description: 'Techno-economic and environmental evaluation of Electric Arc Furnace steelmaking to reduce carbon emissions through scrap recycling and green power.',
    objective: 'Analyzed the complete EAF steelmaking process, from scrap charging and electric arc melting to refining and tapping operations.',
    bullets: [
      'Evaluated raw materials and refining practices, including scrap, DRI/HBI, fluxes, electrodes, impurity removal, and alloy additions.',
      'Assessed EAF sustainability through scrap recycling, lower CO2 footprint, flexible production, and integration with renewable electricity.',
    ],
    tags: ['EAF Steelmaking', 'Scrap Recycling', 'Decarbonization', 'Pyrometallurgy', 'DRI/HBI', 'Process Simulation'],
    image: '/images/project-finance.jpg',
  },
  {
    id: 'defect-engineering',
    number: '07',
    title: 'Strain-Modulated Defect Engineering in 2D Materials',
    subtitle: 'IIT Kharagpur Research Project · Prof. Prasana Kumar Sahoo',
    domain: 'engineering',
    category: 'Deep Tech & Metallurgy',
    description: 'Investigating how mechanical strain influences defect behavior, electronic properties, and stability in 2D nanomaterials through literature and simulations.',
    objective: 'Conducted a literature review on strain-modulated defect engineering in 2D materials, examining defect behavior under strain.',
    bullets: [
      'Developed preliminary computational models establishing a foundation for subsequent simulations and analysis of strained 2D material systems.',
      'Analyzed strain-induced defect behavior in 2D materials, evaluating how mechanical deformation influences stability and defect evolution.',
    ],
    tags: ['2D Materials', 'Defect Engineering', 'Computational Modeling', 'Nanomaterials', 'Mechanical Strain'],
    image: '/images/project-risk.jpg',
  },
];

export const COMPETITIONS_DATA: Competition[] = [
  {
    award: 'Gold Winner',
    title: 'AAKAAR 3D Highway Design & Corridor Modeling',
    organization: 'IIT Bombay (Civil Engineering Festival)',
    date: 'May 2026',
    domain: 'engineering',
    description: 'Designed an optimized highway alignment integrating horizontal curves, vertical profiles, safety standards, and bridge-tunnel crossings.',
    bullets: [
      'Used AutoCAD Civil 3D for alignment and corridor modeling, plus manual calculations for drainage and earthwork optimization.',
      'Designed horizontal curves, vertical profiles, drainage provisions, and bridge-tunnel crossings at two chainages, ensuring safety and earthwork efficiency.',
    ],
    tags: ['AutoCAD Civil 3D', 'Corridor Modeling', 'Earthwork Optimization', 'Geometric Design', 'IIT Bombay Gold'],
  },
  {
    award: 'Gold Winner',
    title: 'Open IIT (Technology) Case Study',
    organization: 'IIT Kharagpur',
    date: 'Oct 2025',
    domain: 'pm',
    description: 'Evaluated Flipkart’s quick-commerce strategy (Flipkart Minutes vs competitors) and proposed an AI-integrated hybrid kirana model.',
    bullets: [
      'Built Excel-based financial models with DCF and ROI-based valuation methods and a structured competitive benchmarking framework.',
      'Proposed a hybrid retail model integrating local kirana partners and AI-based demand forecasting, projecting a 13-month payback and ~380% ROI.',
    ],
    tags: ['Financial Modeling', 'DCF Valuation', 'Competitive Benchmarking', 'Quick Commerce', 'IIT Kharagpur Gold'],
  },
  {
    award: 'Silver Winner',
    title: 'Regen Power Solutions | B-Plan 2025 (Among 90 Teams)',
    organization: 'Kshitij, IIT Kharagpur',
    date: 'Jan 2025',
    domain: 'pm',
    description: 'Proposed EV battery-repurposing systems and solar microgrids to reduce lifecycle costs and operational inefficiencies in 2W/3W EVs.',
    bullets: [
      'Developed three scalable business models: Regen GO, Regen Connect, and Regen Alliance, targeting underserved EV market segments.',
      'Formulated circular economy economics, battery health grading protocols, and distributed charging infrastructure maps.',
    ],
    tags: ['EV Batteries', 'Circular Economy', 'Business Plan', 'CleanTech', 'Kshitij Silver Winner'],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Product Management & Analytics',
    domain: 'pm',
    skills: [
      'Product Strategy',
      'PRD Drafting',
      'RICE Framework',
      'Amplitude',
      'Mixpanel',
      'Funnel Analysis',
      'Cohort Analysis',
      'User Segmentation',
      'Retention Analysis',
      'A/B Testing',
      'User Research',
      'Figma',
      'Notion',
    ],
  },
  {
    title: 'Data Science & Machine Learning',
    domain: 'data-ai',
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'XGBoost',
      'Isolation Forest',
      'K-Means Clustering',
      'Predictive Modeling',
      'Anomaly Detection',
      'Model Evaluation',
    ],
  },
  {
    title: 'AI, Generative AI & Full-Stack',
    domain: 'data-ai',
    skills: [
      'Prompt Engineering',
      'GPT-4o',
      'Claude',
      'Google Gemini API',
      'FastAPI',
      'Next.js',
      'React.js',
      'TypeScript',
      'PostgreSQL',
      'MySQL',
      'REST APIs',
    ],
  },
  {
    title: 'Data Analytics & Business Intelligence',
    domain: 'data-ai',
    skills: [
      'SQL Querying',
      'Power BI',
      'Tableau',
      'Advanced Excel',
      'Google Analytics',
      'Data Cleaning',
      'KPI Dashboarding',
      'Financial Modeling',
      'DCF Valuation',
    ],
  },
  {
    title: 'Metallurgy & Materials Engineering',
    domain: 'engineering',
    skills: [
      'Deep Eutectic Solvents (DES)',
      'XRD Analysis',
      'SEM Microstructure',
      'Non-Destructive Testing (NDT)',
      'AutoCAD Civil 3D',
      'Metallurgical Thermodynamics',
      'Materials Processing',
      'EAF Steelmaking',
      'Defect Engineering',
    ],
  },
];

export const LEADERSHIP_DATA = [
  {
    role: "Public Relations Team Member",
    organization: "Students' Alumni Cell, IIT Kharagpur",
    period: "Oct 2024 – Jun 2025",
    description: "Worked under the Dean of Alumni Affairs, strengthening engagement between 10,000+ students and 40,000+ alumni through outreach and coordination.",
    highlights: [
      "Organized the 21st Annual Alumni Meet, featuring 15 large-scale events and engaging 700+ alumni guests through coordinated activities.",
      "Mentored a 50-member team in event planning, filming, post-production, and creative direction, ensuring seamless execution.",
    ],
  },
  {
    role: "Volunteer",
    organization: "ISRO STC CONFLUENCE 2025",
    period: "2025",
    description: "Volunteered at ISRO STC CONFLUENCE 2025, hosted by ISRO and IIT Kharagpur, with 70+ delegates actively participating nationwide.",
    highlights: [
      "Facilitated technical delegate coordination, logistics management, and session facilitation for national space research scientists.",
    ],
  },
  {
    role: "Wing Representative",
    organization: "Hall of Residence, IIT Kharagpur",
    period: "2024 – 2025",
    description: "Nominated as Wing Representative, coordinating gatekeeping sessions and student welfare concerns.",
    highlights: [
      "Addressed resident welfare concerns, facilitated peer conflict resolution, and fostered active collegiate engagement.",
    ],
  },
];
