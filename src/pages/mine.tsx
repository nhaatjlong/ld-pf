import React from 'react';
import { AboutMe, Contact, Navigator, Projects, Technology, WorkExperience } from './components';

export default function MinePage() {
  const [currentTab, setCurrentTab] = React.useState<string>('home');

  const listProjects = [
    {
      projectName: 'Bidu Ecommerce',
      projectDescription: 'string',
      linkDemo: 'string',
    },
    {
      projectName: 'Live Mixtape',
      projectDescription: 'string',
      linkDemo: 'string',
    },
    {
      projectName: 'CoinHarbour',
      projectDescription: 'string',
      linkDemo: 'string',
    },
  ];

  return (
    <div className=' min-h-screen relative py-12 lg:py-[100px] px-[20px]'>
      <div className=''>
        <Navigator currentTab={currentTab} onTabChange={(tab: string) => setCurrentTab(tab)} />
      </div>

      <div id='home' className='max-w-[100%] 2xl:max-w-[60%] mx-auto'>
        <AboutMe />

        <p className='text-white text-[40px] my-[100px] text-center'>Work Experience</p>
        <WorkExperience />

        <div className='flex flex-col items-center my-[200px]'>
          <Technology />
        </div>

        <div id='work'>
          <Projects projects={listProjects} />
        </div>

        <div id={'contact'} className='flex flex-col items-center my-[100px]'>
          <Contact />
        </div>
      </div>
    </div>
  );
}
