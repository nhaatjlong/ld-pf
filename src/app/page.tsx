'use client';
import React from 'react';
import { AboutMe, Contact, Navigator, Technology, WorkExperience } from '@/components';

export default function Home() {
  const [currentTab, setCurrentTab] = React.useState<string>('home');

  return (
    <div className=' min-h-screen relative py-[100px]'>
      <div className='fixed top-[100px] left-[100px]'>
        <Navigator currentTab={currentTab} onTabChange={(tab: string) => setCurrentTab(tab)} />
      </div>

      <div className='max-w-[100%] 2xl:max-w-[60%] mx-auto'>
        <AboutMe />

        <p className='text-white text-[40px] my-[100px] text-center'>Work Experience</p>
        <WorkExperience />

        <div className='flex flex-col items-center my-[200px]'>
          <Technology />
        </div>

        <div className='flex flex-col items-center my-[100px]'>
          <Contact />
        </div>
      </div>
    </div>
  );
}
