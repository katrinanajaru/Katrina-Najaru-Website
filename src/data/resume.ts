// Single source of truth for all portfolio content, taken from Katrina's résumé.

export const resumeUrl = `${import.meta.env.BASE_URL}Katrina-Najaru-Lekalkuli-Resume.pdf`;
export const photoUrl = `${import.meta.env.BASE_URL}najash.jpeg`;

export const profile = {
  firstName: 'Katrina',
  middleName: 'Najaru',
  lastName: 'Lekalkuli',
  title: 'Data Analyst / Engineer',
  location: 'Nairobi, Kenya',
  email: 'katrinanajaru1@gmail.com',
  phoneDisplay: '+254 703 120 716',
  phoneHref: 'tel:+254703120716',
  github: 'katrinanajaru',
  githubUrl: 'https://github.com/katrinanajaru',
  lede:
    'I build reliable data pipelines, clear dashboards and well-structured systems, turning scattered data into information people can act on.',
  summary:
    'Information Technology graduate from Jomo Kenyatta University of Agriculture and Technology, highly motivated and detail-oriented, with a strong foundation in IT supported by a diploma and certifications in data science, artificial intelligence, cloud computing, and data analytics. Eager to apply and further develop technical and analytical skills in a dynamic organizational environment, while contributing effectively to technology-driven goals.',
  languages: ['English', 'Swahili'],
};

export type Job = {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
  tools: string[];
};

export const experience: Job[] = [
  {
    company: 'Pathways Technologies Limited',
    role: 'Data Engineer',
    period: 'Jun 2026 — Present',
    points: [
      'Develop and maintain ETL/ELT data pipelines for extracting, transforming, and loading data from multiple sources.',
      'Build and manage data processing workflows using SQL, Python, Apache NiFi, and Docker.',
      'Work with PostgreSQL, Neon, and Microsoft SQL Server/SSMS to manage, query, and transform data.',
      'Design and maintain data models and database structures to ensure reliable and accessible data for analytics.',
      'Develop interactive Power BI and Apache Superset dashboards for business intelligence and data-driven decision-making.',
      'Transform, clean, and prepare datasets for analytics, reporting, and visualization.',
      'Use InsightGrid to support data analysis, monitoring, and analytical workflows.',
      'Containerize and manage data applications and services using Docker.',
      'Collaborate with stakeholders to understand data requirements and develop appropriate data solutions.',
      'Monitor data quality, pipeline performance, and workflow reliability to ensure accurate reporting.',
    ],
    tools: ['SQL', 'Python', 'Apache NiFi', 'Docker', 'PostgreSQL', 'Neon', 'SQL Server', 'Power BI', 'Apache Superset', 'InsightGrid'],
  },
  {
    company: 'ICT Authority',
    role: 'IT Officer',
    period: 'Jan 2026 — Jun 2026',
    points: [
      'Designed and developed a role-based Project Management System for ICTA to streamline project planning, tracking, and reporting.',
      'Implemented a role-based access control system, ensuring secure and structured access for different user levels.',
      'Built the system around projects and components, enabling efficient breakdown, tracking, and management of project tasks and deliverables.',
      'Led development activities including requirements gathering, system design, development, and deployment.',
      'Developed features for real-time monitoring, task assignment, and progress tracking to improve workflow efficiency.',
      'Participated in stakeholder meetings and contributed to discussions and negotiations with the World Bank team on project implementation and alignment.',
      'Documented system functionality, workflows, and user guidelines to support system adoption and scalability.',
    ],
    tools: ['RBAC', 'System Design', 'Requirements Gathering', 'Deployment', 'Documentation', 'Stakeholder Engagement'],
  },
  {
    company: 'Avané Clinic',
    role: 'SEO & Digital Systems Associate',
    period: 'Nov 2025 — Jan 2026',
    points: [
      'Managed website updates, digital systems, and SEO optimization.',
      'Implemented GA4, GTM, Meta Pixel, and Google Ads tracking.',
      'Built and optimized landing pages and improved site performance.',
      'Produced weekly analytics and technical reports.',
      'Managed social media accounts and content scheduling.',
      'Handled online engagement and audience communication.',
      'Tracked social media and campaign performance metrics.',
      'Coordinated digital marketing efforts across web and social platforms.',
    ],
    tools: ['SEO', 'GA4', 'Google Tag Manager', 'Meta Pixel', 'Google Ads', 'Landing Pages'],
  },
  {
    company: 'One World Leadership Institute (OWLI Africa)',
    role: 'Software Engineer Intern',
    period: 'Oct 2025 — Dec 2025',
    points: [
      'Conducted user research to inform the design and improvement of a Learning Management System (LMS) supporting vulnerable families.',
      'Contributed to UI/UX design and front-end experience improvements to ensure intuitive and user-friendly learning journeys.',
      'Collaborated with University of Maryland student teams on platform research and design activities.',
      'Identified user needs and translated findings into accessible and inclusive interface designs.',
      'Supported CRM-related workflows and data organization to improve learner and stakeholder engagement tracking.',
      'Helped enhance digital accessibility, usability, and engagement across the platform.',
      'Participated in testing and feedback cycles to refine user experience and system interaction flows.',
      'Promoted digital inclusion through simplified navigation and learner-centered design decisions.',
    ],
    tools: ['User Research', 'UI/UX', 'LMS', 'CRM', 'Accessibility', 'Usability Testing'],
  },
  {
    company: 'Bright Innovation Limited',
    role: 'Junior Software Developer',
    period: 'May 2024 — Aug 2024',
    points: [
      'Gained experience in software development, system analysis, and IT management, working with PHP, JavaScript, XAMPP, and Microsoft Dynamics NAV.',
      'Supported the team in graphics and design, and in project management.',
    ],
    tools: ['PHP', 'JavaScript', 'XAMPP', 'Microsoft Dynamics NAV', 'Graphic Design'],
  },
  {
    company: 'Bright Innovation Limited',
    role: 'Assistant IT Consultant',
    period: 'Sep 2021 — Dec 2021',
    location: 'Nairobi, Kenya',
    points: [
      'Handled customer site inquiries, providing technical support and troubleshooting.',
      'Conducted system analysis to identify and resolve IT issues.',
      'Documented processes and procedures for efficient knowledge transfer.',
      'Prepared multimedia content for training and presentations.',
    ],
    tools: ['Technical Support', 'Troubleshooting', 'System Analysis', 'Documentation'],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: 'data' | 'software';
  context?: string;
  url?: string;
};

const gh = (repo: string) => `https://github.com/katrinanajaru/${repo}`;

export const projects: Project[] = [
  {
    title: 'UNDP Streaming Analytics',
    description:
      'A real-time change-data-capture pipeline: Debezium streams PostgreSQL changes through Kafka into ClickHouse, dbt builds staging and mart models, and an Airflow DAG runs ingestion, transformations and impact scoring every 15 minutes, monitored with Prometheus and Grafana.',
    tags: ['Kafka', 'Debezium', 'ClickHouse', 'dbt', 'Airflow', 'Docker', 'Grafana'],
    category: 'data',
    context: 'Data engineering',
    url: gh('undp-streaming-analytics'),
  },
  {
    title: 'Kenya Public Wi-Fi Analytics',
    description:
      'An interactive Power BI dashboard analysing public Wi-Fi sessions across counties, hotspots, devices, users and internet providers, tracking sessions, data used, speed and connection success rate.',
    tags: ['Power BI', 'DAX', 'SQL', 'PostgreSQL', 'Python'],
    category: 'data',
    context: 'Business intelligence',
    url: gh('kenya-public-wifi-analytics'),
  },
  {
    title: 'Pizza Sales Analysis Dashboard',
    description:
      'A Power BI business intelligence dashboard analysing pizza sales performance, customer ordering patterns, product performance and revenue trends.',
    tags: ['Power BI', 'Business Intelligence'],
    category: 'data',
    context: 'Business intelligence',
    url: gh('Pizza-Sales-Analysis-Dashboard'),
  },
  {
    title: 'Online Retail Data Mining',
    description:
      'Cleaned retail transactions and engineered RFM features to predict customer churn with a Random Forest, segment customers with K-Means, and uncover product associations with Apriori basket analysis.',
    tags: ['Python', 'scikit-learn', 'K-Means', 'Apriori', 'Pandas'],
    category: 'data',
    context: 'Data mining',
    url: gh('BI-Projects'),
  },
  {
    title: 'Road Accident Analysis',
    description:
      'Cleaned 300,000+ accident records, identified the ten most accident-prone districts, and explored how weather, road type and junction control affect severity, presented in an interactive Excel dashboard.',
    tags: ['Python', 'Pandas', 'EDA', 'Excel'],
    category: 'data',
    context: 'Future Interns',
    url: gh('Future-Interns-Task-3'),
  },
  {
    title: 'Customer Support Ticket Analysis',
    description:
      'Grouped support tickets with NLTK text analysis to surface the most common issues, peak times and resolution bottlenecks, and recommended automating responses to the top five issues.',
    tags: ['Python', 'NLTK', 'Text Mining', 'Excel'],
    category: 'data',
    context: 'Future Interns',
    url: gh('Future-Interns-Task-2'),
  },
  {
    title: 'Social Media Trends & Sentiment',
    description:
      'Cleaned social media posts and tagged sentiment with TextBlob to track trending topics and public mood across platforms and days of the week in an Excel dashboard.',
    tags: ['Python', 'TextBlob', 'Sentiment Analysis', 'Excel'],
    category: 'data',
    context: 'Future Interns',
    url: gh('Future-Interns-Task-1'),
  },
  {
    title: 'COVID-19 Spread Prediction System',
    description:
      'A big data pipeline that preprocesses and models COVID-19 spread on distributed datasets for predictive analysis.',
    tags: ['PySpark', 'MLlib', 'Big Data'],
    category: 'data',
    context: 'Big data',
  },
  {
    title: 'Project Management System',
    description:
      'A role-based platform built for the ICT Authority around projects and components, improving project tracking, reporting, and workflow efficiency.',
    tags: ['RBAC', 'Real-time Monitoring', 'Reporting'],
    category: 'software',
    context: 'ICT Authority',
  },
  {
    title: 'Barbershop Booking & Payment System',
    description:
      'A web-based system with chatbot booking, M-PESA payment integration, and invoice printing.',
    tags: ['PHP', 'MySQL', 'Dialogflow', 'M-PESA'],
    category: 'software',
    url: gh('Web-Development'),
  },
  {
    title: 'Hospital Information System for CEMA',
    description:
      'A client and program management system with RESTful APIs, user authentication, and clean modular design for healthcare data handling.',
    tags: ['Python', 'REST APIs', 'Authentication'],
    category: 'software',
    url: gh('basic-health-information-system'),
  },
  {
    title: 'Green Guard: AI Plant Disease Detection',
    description:
      'A web-based AI tool that detects plant diseases from leaf images using image processing and deep learning, providing early diagnosis and treatment suggestions.',
    tags: ['Deep Learning', 'Image Processing', 'Web App'],
    category: 'software',
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: 'Data Engineering & Analytics',
    items: [
      'ETL/ELT & Data Pipelines',
      'Apache NiFi',
      'Apache Airflow',
      'dbt',
      'Kafka & Debezium (CDC)',
      'PostgreSQL',
      'Neon',
      'ClickHouse',
      'Microsoft SQL Server / SSMS',
      'Python & Pandas',
      'Power BI & DAX',
      'Apache Superset',
      'Excel Dashboards',
      'InsightGrid',
      'Data Modeling & Reporting',
      'Data Quality & Pipeline Monitoring',
    ],
  },
  {
    title: 'Programming & Software Development',
    items: [
      'Python',
      'JavaScript',
      'PHP',
      'C / C++',
      'HTML & CSS',
      'Bootstrap',
      'REST APIs',
      'Software Development & System Analysis',
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    items: [
      'Docker & Docker Compose',
      'Apache NiFi Orchestration',
      'Prometheus & Grafana',
      'Cloud Computing',
      'Application Deployment',
      'System Integration',
    ],
  },
  {
    title: 'AI & Data Science',
    items: [
      'Data Analysis & Cleaning',
      'Exploratory Data Analysis',
      'Scikit-learn',
      'Predictive Modeling',
      'Clustering & Association Rules',
      'NLP & Sentiment Analysis (NLTK, TextBlob)',
      'AI Applications & Machine Learning',
      'PySpark & MLlib',
    ],
  },
  {
    title: 'Web, Digital & Analytics',
    items: [
      'Technical & On-page SEO',
      'Google Search Console',
      'GA4',
      'Google Tag Manager',
      'Meta Pixel',
      'Google Ads Tracking',
      'UI/UX Design & User Research',
      'CRM & Digital Systems',
    ],
  },
  {
    title: 'Professional',
    items: [
      'Requirements Gathering',
      'System Design & Documentation',
      'Role-Based Access Control',
      'Software Testing & Debugging',
      'Technical Reporting',
      'Stakeholder Collaboration',
      'Project Management',
    ],
  },
];

export const education = [
  {
    school: 'Jomo Kenyatta University of Agriculture and Technology',
    award: 'BSc Information Technology',
    period: 'Sep 2022 — 2025',
  },
  {
    school: 'Jomo Kenyatta University of Agriculture and Technology',
    award: 'Diploma in Information Technology',
    period: 'Sep 2020 — Apr 2022',
  },
];

export const certifications: { issuer: string; items: string[] }[] = [
  {
    issuer: 'IBM',
    items: [
      'Certificate in Data Science',
      'Improving Healthcare: The Role of Artificial Intelligence',
      'Improving Healthcare: The Role of Cloud Computing',
      'Improving Healthcare: The Role of Data Analytics',
    ],
  },
  {
    issuer: 'Cisco',
    items: ['Junior Cybersecurity Analyst', 'Computer Security', 'Network Defense', 'NDG Linux', 'Packet Tracer'],
  },
  { issuer: 'Google', items: ['Certificate in Data Analytics'] },
];

// Referee contact details live in the downloadable résumé rather than on the public page.
export const references = [
  { name: 'Mr. Joshua Opondo', position: 'Assistant Director', org: 'ICT Authority' },
  { name: 'Mr. Jonathan Kisemi', position: 'Executive Director', org: 'Bright Innovation Limited' },
  { name: 'Dr. Isaac Oteyo', position: 'Lecturer, IT Department', org: 'JKUAT' },
];
