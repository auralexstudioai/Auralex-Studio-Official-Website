import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Auralex Studio - Professional Creative Services',
  description: 'Professional creative services and digital solutions for your business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}