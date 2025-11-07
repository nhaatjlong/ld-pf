import React, { CSSProperties } from 'react';


export interface Project {
  projectName: string;
  projectDescription: string;
  linkDemo: string;
}

export interface ProjectProps {
  projects: Project[];
}

const Projects = (props: ProjectProps) => {
  if (!props.projects) return <>Loading ... </>;

  return (
    <div className="  bg-[url('/exp-gradient.svg')] bg-no-repeat bg-center">
      {props.projects.map((proj: Project, index: number) => {
        const isTextLeft = index % 2 === 0;

        const styleText: CSSProperties = {
          background: `#000000 linear-gradient(to ${isTextLeft ? 'right' : 'left'}, #36054e, #848484)`,
          borderRadius: '16px',
        };

        return (
          <div
            className={`flex flex-col mt-[50px] lg:mt-[100px] ${isTextLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } relative w-fit `}
            key={'project' + index}
          >
            <div
              className={`gap-[30px] flex flex-col lg:w-[50%] z-20 ${isTextLeft ? 'items-start' : 'items-end'
                }`}
            >
              <div>
                <p
                  className={`text-[#9857D3] text-[16px] font-semibold ${isTextLeft ? 'text-left' : 'text-right'
                    }`}
                >
                  Featured Project
                </p>
                <p className='text-[#CCD6F6] text-[34px] font-semibold'>{proj.projectName}</p>
              </div>

              <div
                className={`px-[26px] py-[24px] text-[18px] text-[#CCD6F6] bg-no-repeat`}
                style={styleText}
              >
                <p>
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks,
                  recently played tracks, and detailed audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing playlists and more.
                </p>
              </div>

              {/* <div className='flex items-center gap-3'>
          <img src='/click.svg' alt='click' />
          <img src='/click.svg' alt='click' />
        </div> */}
            </div>

            <div
              className={`bg-[#2B0B3A] ${isTextLeft ? ' lg:pl-[30px] lg:ml-[-5%]' : 'lg:pr-[30px] lg:mr-[-5%]'
                } rounded-[10px] lg:rounded-none w-full sm:w-fit z-10 lg:pt-[30px]`}
            >
              <img src='/demo_project.png' alt='project_image' className='rounded-[10px] w-full' />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Projects };
