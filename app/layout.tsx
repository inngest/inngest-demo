import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Inngest Demo',
  description: 'Inngest demo application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[url('/grid.svg')] bg-slate-1000 text-white ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
