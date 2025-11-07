import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const COLOR =
  'linear-gradient(163deg, #130428 7.29%, #251043 34.38%, #38126D 56.77%, #261045 84.90%, #190634 100%)';

const WorkExperience = () => {
  return (
    <div className="flex flex-col items-center bg-[url('/exp-gradient.svg')] bg-no-repeat bg-center">
      <VerticalTimeline animate>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{
            background:
              'linear-gradient(163deg, #130428 7.29%, #251043 34.38%, #38126D 56.77%, #261045 84.90%, #190634 100%)',
            color: '#fff',
            boxShadow: '4px 7px 26px 0px rgba(0, 0, 0, 0.12)',
          }}
          contentArrowStyle={{ display: 'none' }}
          date='08/2018 - 08/2022'
          iconStyle={{
            background: COLOR,
            color: COLOR,
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
          }}
          icon={<img src='/code.svg' />}
        >
          <h3 className='text-[26px] font-semibold'>Duy Tan University</h3>
          <h4 className=''>Da Nang, Viet Nam</h4>
          <p className='text-xs'>Learning Code Base, Fundamental and Advanced of Computing, Programing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{
            background:
              'linear-gradient(163deg, #130428 7.29%, #251043 34.38%, #38126D 56.77%, #261045 84.90%, #190634 100%)',
            color: '#fff',
            boxShadow: '4px 7px 26px 0px rgba(0, 0, 0, 0.12)',
          }}
          contentArrowStyle={{ display: 'none' }}
          date='11/2021 - 05/2022'
          iconStyle={{
            background: COLOR,
            color: COLOR,
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
          }}
          icon={<img src='/react.svg' />}
        >
          <h3 className='text-[26px] font-semibold'>ReactJS Developer</h3>
          <h4 className=''>STDIO.Hue, Da Nang Branch</h4>
          <p className='text-xs'>Working on an E-commerce Web App Project</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{
            background:
              'linear-gradient(163deg, #130428 7.29%, #251043 34.38%, #38126D 56.77%, #261045 84.90%, #190634 100%)',
            color: '#fff',
            boxShadow: '4px 7px 26px 0px rgba(0, 0, 0, 0.12)',
          }}
          contentArrowStyle={{ display: 'none' }}
          date='06/2022 - Current'
          iconStyle={{
            background: COLOR,
            color: COLOR,
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
          }}
          icon={<img src='/react.svg' />}
        >
          <h3 className='text-[26px] font-semibold'>Web Application Developer</h3>
          <h4 className=''>24hdev CO., LTD | Da Nang</h4>
          <p className='text-[8px]'>Working on Web App Projects with Fullstack Role</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export { WorkExperience };
