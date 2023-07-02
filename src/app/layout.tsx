import './globals.css';
import { Preahvihear } from 'next/font/google';

const preahvihear = Preahvihear({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Hello',
  description: 'long dang portfolio, resume, long dang resume ba lac ba xam ......',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='bg-[#11071F]'>
      <body className={preahvihear.className}>{children}</body>
      <footer>
        <p className='text-white opacity-20 text-right'>© 2023 Long Dang</p>
      </footer>
    </html>
  );
}
