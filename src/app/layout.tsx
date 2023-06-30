import './globals.css';
import { Preahvihear } from 'next/font/google';

const preahvihear = Preahvihear({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'small world of long dang',
  description: 'long dang portfolio, resume, ba lac ba xam ......',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/x-icon' href='/logo.svg'></link>
      </head>
      <body className={preahvihear.className}>{children}</body>
    </html>
  );
}
