import { ReactNode } from 'react';
import './globals.css';
import ScrollToTopButton from '@/components/button/ScrollToTopButton';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { CardProvider } from '@/context/CardContext';

export const metadata = {
  title: "Lapo-app | Good web application.",
  description: "Lapo-app is good.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className='relative h-full min-h-fit flex bg-[#f8fbff]'>
        <CardProvider>
          <Sidebar />
          <div className="w-full lg:w-5/6 h-fit min-h-screen">
            <Navbar />
            {children}
          </div>
          <ScrollToTopButton/>
        </CardProvider>
      </body>
    </html>
  );
}
