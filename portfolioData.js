import { SiPython, SiPostgresql, SiMicrosoftexcel, SiPowerbi, SiPandas, SiNumpy, SiGit, FiGithub } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export const SKILLS_DATA = [
  {
    category: 'Programming & Foundations',
    items: [
      { name: 'Python', icon: 'python', desc: 'Data structures & script automation' },
      { name: 'SQL', icon: 'sql', desc: 'Complex joins, CTEs & query tuning' }
    ]
  },
  {
    category: 'Data Analysis & Manipulation',
    items: [
      { name: 'Pandas', icon: 'pandas', desc: 'Data cleaning & matrix profiling' },
      { name: 'NumPy', icon: 'numpy', desc: 'Vectorized mathematical computation' }
    ]
  },
  {
    category: 'Business Intelligence & Visualization',
    items: [
      { name: 'Power BI', icon: 'powerbi', desc: 'DAX modeling & semantic dashboarding' },
      { name: 'Excel', icon: 'excel', desc: 'Pivot engineering & lookups' },
      { name: 'Matplotlib', icon: 'chart', desc: 'Exploratory programmatic charts' }
    ]
  },
  {
    category: 'Developer Workflow Tools',
    items: [
      { name: 'Git', icon: 'git', desc: 'Version isolation' },
      { name: 'GitHub', icon: 'github', desc: 'Remote repository workflows' },
      { name: 'VS Code', icon: 'vscode', desc: 'Core environment configuration' }
    ]
  }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'E-Commerce Customer Retention Pipeline',
    description: 'Designed an end-to-end cohort analysis and Recency, Frequency, Monetary (RFM) model using Python to segment users into actionable marketing tiers.',
    tags: ['Python', 'Pandas', 'Cohorts', 'Data Cleaning'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 2,
    title: 'Supply Chain Operations Performance Analytics',
    description: 'Engineered a multi-table SQL data warehouse layout and linked it to a dynamic Power BI report tracking fulfillment efficiency and cost leakages.',
    tags: ['SQL', 'Power BI', 'DAX', 'Dashboarding'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

export const CERTIFICATES_DATA = [
  {
    id: 1,
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera / Google',
    date: '2025',
    verificationUrl: 'https://coursera.org'
  },
  {
    id: 2,
    title: 'Advanced SQL for Data Engineers',
    issuer: 'Hackerrank Verification',
    date: '2025',
    verificationUrl: 'https://hackerrank.com'
  }
];