

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
          <img
            src='/long.jpeg'
            width={400}
            height={100}
            alt='me'
            className='lg:h-[99%] rounded-full object-cover transform scale-[0.8] lg:hover:scale-90 transition-all ease-linear'
          />
          <img
            alt='arrow'
            src='/Arrow.svg'
            width={200}
            height={80}
            style={{ objectFit: 'contain' }}
            className='absolute bottom-[-5rem] right-0 transform rotate-[90deg] sm:top-[-3rem] sm:rotate-0'
          />
        </div>

        {/* TEXT */}
        <div className='w-full'>
          <p className='text-white'>
            Hello! I Am <span className='text-[#7127BA] text-2xl'>Long Dang</span>
          </p>
        </div>
      </div>

      <div className='mt-16'>
        <p className='text-white text-[50px]'>I&lsquo;m a Web Application Developer.| </p>

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
