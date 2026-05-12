import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'PCOP — Private Commodity Operations Platform', description: 'Institutional Commodity SaaS CRM, Workflow, Compliance and Document Platform' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="fr"><body>{children}</body></html>; }
