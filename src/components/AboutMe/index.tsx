import Image from 'next/image';
import Link from 'next/link';

export interface AboutMeProps { }

const AboutMe = (props: AboutMeProps) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center sm:flex-row'>
        {/* IMAGE */}
        <div
          className={
            'bg-aboutMe bg-no-repeat flex items-center justify-center bg-center h-[400px] relative w-full md:min-w-[400px]'
          }
        >
          <Image
            src='/long.jpeg'
            width={400}
            height={100}
            alt='me'
            className='lg:h-[99%] rounded-full object-cover transform scale-[0.8] lg:hover:scale-90 transition-all ease-linear'
          />
          <Image
            alt='arrow'
            src='/Arrow.svg'
            width={200}
            height={80}
            style={{ objectFit: 'contain' }}
            className='absolute bottom-[-5rem] right-0 transform rotate-[90deg] sm:top-[-3rem] sm:rotate-0'
          />
        </div>

        {/* TEXT */}
        <div className='flex flex-col justify-between'>
          <p className='text-white'>
            Hello! I Am <span className='text-[#7127BA] text-2xl'>Long Dang</span>
          </p>

          <div className='pb-[70px] lg:max-w-[70%]'>
            <p className='text-white text-lg'>A Developer who</p>
            <p className='text-white text-[50px]'>
              eat, sleep and breathe with <strong className='text-[#7127BA]'>React</strong>
            </p>

            <p className='text-white text-xs'>Just kidding !!</p>
          </div>
        </div>
      </div>

      <div className='mt-16'>
        <p className='text-white text-[50px]'>I&lsquo;m a Web Application Developer.| </p>
        <p className=' text-white'>
          Currently, I&lsquo;m working at
          <Link href={'https://www.facebook.com/24hdotdev'} target='_blank' className='mx-2 text-[#1877F2]'>
            24hdev CO., LTD | Da Nang
          </Link>
        </p>

        <p className='lg:max-w-[60%] text-white mt-[50px]'>
          <span className='lg:whitespace-nowrap'>
            A self-taught Web Application, functioning in the industry for 2+ years now.
          </span>{' '}
          <br />
          <span>I make meaningful and modern products.</span>
          <br />
          <span>Just give me the idea, I can do everything you want.</span>
        </p>
      </div>
    </div>
  );
};

export { AboutMe };
