import { ReactNode } from 'react';
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';

interface IconProps {
  href: string;
  children: ReactNode;
}
const Icon = (props: IconProps) => {
  return (
    <a
      href={props.href}
      target='_blank'
      className='opacity-30 hover:opacity-100 hover:scale-110 transition-all ease-linear'
    >
      {props.children}
    </a>
  );
};

export const Contact = (props: any) => {
  return (
    <div className='flex flex-col gap-5'>
      <p className='text-[25px] text-white'>Contact</p>

      <p className='text-white md:max-w-[50%] text-[15px]'>
        I&apos;m currently looking to join a cross-functional team that values improving people&apos;s lives
        through accessible design. or have a project in mind ?
        <span className='whitespace-nowrap'>Let&apos;s connect.</span>
      </p>

      <p className='text-white text-[15px]'>hello@longstupid.live</p>

      <div className='flex gap-1'>
        <Icon href={'https://fb.com/nhaatjlong'}>
          <IoLogoFacebook size={'30px'} className='text-white' />
        </Icon>

        <Icon href={'https://instagram.com/nhaatjlong'}>
          <IoLogoInstagram size={'30px'} className='text-white' />
        </Icon>

        <Icon href={'https://www.linkedin.com/in/nhaatjlong/'}>
          <IoLogoLinkedin size={'30px'} className='text-white' />
        </Icon>

        <Icon href={'https://github.com/nhaatjlong'}>
          <IoLogoGithub size={'30px'} className='text-white' />
        </Icon>
      </div>
    </div>
  );
};
