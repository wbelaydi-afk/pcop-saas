import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PCOP SaaS | Private Commodity Operations Platform',
  description: 'Institutional CRM, workflows, compliance, document automation and productivity OS for commodity transaction teams.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
