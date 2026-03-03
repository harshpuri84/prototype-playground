export type Category = 'All' | 'Dashboard' | 'Web App' | 'AI / ML' | 'Analytics';

export interface Prototype {
  id: string;
  title: string;
  description: string;
  category: Category;
  techStack: string[];
  status: 'deployed' | 'local-only';
  url?: string;
  builtWith?: 'Bolt' | 'Lovable' | 'Custom' | 'Python';
}

export const categories: Category[] = ['All', 'Dashboard', 'Web App', 'AI / ML', 'Analytics'];

export const prototypes: Prototype[] = [
  {
    id: 'bosch-iftsa',
    title: 'Bosch IFTSA Error Report',
    description:
      'Interactive dashboard that reads Bosch PROD SB IFTSTA error report Excel files and visualizes data with charts. Includes Vercel serverless APIs for data upload and retrieval with blob storage.',
    category: 'Dashboard',
    techStack: ['HTML/JS', 'Chart.js', 'SheetJS', 'Vercel Serverless'],
    status: 'deployed',
    url: 'https://bosch-iftsta-dashboard.vercel.app',
    builtWith: 'Custom',
  },
  {
    id: 'bosch-milestone',
    title: 'Bosch Milestone Analysis',
    description:
      'Data analysis suite for Bosch shipment milestone plausibility, KPI tracking, and correlation analysis. Python scripts generate standalone HTML dashboards with deep drill-down capabilities.',
    category: 'Analytics',
    techStack: ['Python', 'Pandas', 'Static HTML', 'Vercel Static'],
    status: 'deployed',
    url: 'https://bosch-milestone-analysis.vercel.app',
    builtWith: 'Python',
  },
  {
    id: 'driver-status',
    title: 'Driver Status Link',
    description:
      'Multi-role React app for driver milestone tracking with three interfaces: Driver (submit milestones with geolocation), Partner Admin Dashboard, and Maersk Operations Dashboard. Features AI assistant, offline sync, and multi-language support.',
    category: 'Web App',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    status: 'deployed',
    url: 'https://driver-status-link-p-chwi.bolt.host',
    builtWith: 'Bolt',
  },
  {
    id: 'milestone-connect',
    title: 'Milestone Connect AI MVP',
    description:
      'AI-powered milestone tracking MVP with role-based views: Driver Interface for submitting milestones (pickup, delivery, POD), Operations Board for monitoring and approvals, and Customer Tracking for real-time shipment visibility.',
    category: 'AI / ML',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    status: 'deployed',
    url: 'https://maersk-milestone-con-48za.bolt.host',
    builtWith: 'Bolt',
  },
  {
    id: 'cargox',
    title: 'CargoX — One Platform',
    description:
      'Comprehensive freight operations platform covering the full lifecycle: booking intake (manual, email, wizard), order creation, consolidation planning, route & vendor management, compliance, rate determination, exception management, and predictive analytics.',
    category: 'Web App',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Chart.js', 'React Router'],
    status: 'deployed',
    url: 'https://cargox-freight-platform.vercel.app/',
    builtWith: 'Custom',
  },
  {
    id: 'cargox-reimagined-poc',
    title: 'One Platform Reimagined POC',
    description:
      'Proof-of-concept replacing traditional form-based interactions with natural language task delegation to AI agents. Features task queue interface, Email Agent processing, real-time WebSocket updates, artifact generation with confidence scores, and human review workflows.',
    category: 'AI / ML',
    techStack: ['React 19', 'Express', 'Socket.IO', 'TypeScript'],
    status: 'deployed',
    url: 'https://frontend-zeta-mocha-41.vercel.app/',
    builtWith: 'Custom',
  },
  {
    id: 'rfq-analyzer',
    title: 'RFQ Contract Analyzer',
    description:
      'Python-based contract analysis tool for the Volvo Air RFQ. Reads contract PDFs (service contracts, SOPs, GTCs) and generates a pricing output spreadsheet based on the Maersk AIR GTM Pricing Template v6.4.',
    category: 'Analytics',
    techStack: ['Python', 'openpyxl', 'PDF Parsing'],
    status: 'local-only',
    builtWith: 'Python',
  },
  {
    id: 'ai-consol-planning',
    title: 'AI Consol Planning',
    description:
      'AI-powered Human-in-the-Loop voyage routing workflow with event monitoring, routing grids, AI reasoning panels, track-and-trace modals, and approval action bars. Built with shadcn/ui component library.',
    category: 'AI / ML',
    techStack: ['React', 'TypeScript', 'shadcn/ui', 'Recharts', 'React Query'],
    status: 'deployed',
    url: 'https://voyage-clarity-ai.lovable.app',
    builtWith: 'Lovable',
  },
  {
    id: 'huddle-dashboard',
    title: 'Huddle Board Dashboard',
    description:
      'Real-time logistics operations dashboard for proactive milestone tracking across Air/LCL shipments. Features KPI tiles, risk severity indicators, consolidation management, financial tracking, advanced filtering, and a Supabase-powered backend with intelligent status engine.',
    category: 'Dashboard',
    techStack: ['React', 'TypeScript', 'Supabase', 'Recharts', 'Tailwind CSS'],
    status: 'deployed',
    url: 'https://huddle-dashboard.netlify.app',
    builtWith: 'Bolt',
  },
];
