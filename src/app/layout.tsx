import { IoLogoFigma, IoLogoGithub } from 'react-icons/io5';
import './globals.css';
import { Preahvihear } from 'next/font/google';
import { CiHeart, CiKeyboard, CiMonitor } from 'react-icons/ci';
import Link from 'next/link';
import { FIGMA_LINK, REPO_LINK } from '@/config';
import { Metadata } from 'next';

const preahvihear = Preahvihear({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Hello | longstupid',
  description: 'long dang portfolio, the life, and ba lac ba xam about me :vvvv',
  keywords: [
    'long dang',
    'long dang resume',
    'longstupid',
    'longstupid.dev',
    'longstupid dev',
    'long 24hdev',
    'long24hdev',
    'longstupid resume',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='bg-[#11071F]'>
      <body className={preahvihear.className}>{children}</body>
      <Footer />
    </html>
  );
}

const Footer = () => (
  <div className='flex flex-wrap justify-between text-white'>
    <div className='flex items-center gap-1'>
      <Link href={FIGMA_LINK} target='_blank' className='flex items-center opacity-20 hover:opacity-100'>
        Design
        <IoLogoFigma />
      </Link>

      <Link href={REPO_LINK} target='_blank' className='flex items-center opacity-20 hover:opacity-100'>
        Code
        <IoLogoGithub />
      </Link>
    </div>

    <p className='flex  items-center gap-2 opacity-20'>
      Created By Me with <CiKeyboard size={'30px'} /> - <CiMonitor size={'30px'} /> and{' '}
      <CiHeart size={'30px'} className='text-red-400' />
    </p>

    <p className='opacity-20 text-right'>© 2023 Long Dang</p>
  </div>
);
