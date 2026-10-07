import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Geothermal Community Hub - Connecting Energy with Communities',
  description: 'Platform digital yang menghubungkan kebutuhan industri geothermal dengan potensi masyarakat lokal melalui peluang kerja, pelatihan, bisnis, supplier, dan pemanfaatan langsung panas bumi.',
  keywords: ['geothermal', 'komunitas', 'energi terbarukan', 'peluang kerja', 'ESG', 'community hub'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
