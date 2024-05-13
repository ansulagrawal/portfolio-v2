import { siteConfig } from '@/config/global';
import { Be_Vietnam_Pro } from 'next/font/google';

import Footer from '@/components/Footer';
import MobileNavbar from '@/components/MobileNavbar';
import Navbar from '@/components/Navbar';

import './globals.css';

const font = Be_Vietnam_Pro({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-bg text-white min-h-dvh w-dvw max-w-7xl m-auto px-5`}>
        <section className="hidden sm:block py-3" id="navbar">
          <Navbar />
        </section>

        <section className="sm:hidden py-3" id="mobile-navbar">
          <MobileNavbar />
        </section>

        {children}

        <section id="footer">
          <Footer />
        </section>
      </body>
    </html>
  );
}
