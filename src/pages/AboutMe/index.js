import React from 'react';

import CustomLink from '../../components/CustomLink';
import aboutMeData from '../../db/aboutMe';
import globalUtils from '../../globalUtils';

const { github, linkedIn, resume } = aboutMeData.links;

const AboutMe = () => {
  return (
    <main className='text-white'>
      <div className='my-10 text-center font-writing'>
        <h1 className='mb-5  text-5xl text-bright'>{aboutMeData.name}</h1>
        <h2 className='text-3xl'>{aboutMeData.title}</h2>
      </div>

      <div className='grid lg:grid-cols-2 gap-2 mb-0'>
        <div className='shadow-lg bg-gradient-to-b from-dark-gray to-black p-5 m-5'>
          <div className='text-md m-0 md:text-xl md:m-2'>
            <p>{aboutMeData.brandStatement}</p>
            <div className='mt-6 text-3xl md:text-4xl text-center'>
              {[github, linkedIn, resume].map(obj => (
                <CustomLink
                  {...obj}
                  key={`${obj.link}-about-me-link`}
                  className='px-5 text-bright hover:text-white hover:opacity-50 lg:pt-16'
                />
              ))}
            </div>
          </div>
        </div>
        <div className='shadow-lg bg-gradient-to-b from-dark-gray to-black p-5 m-5'>
          {aboutMeData.technologies.map(({ title, list }) => (
            <div key={`${title}-tech-info`} className='m-2'>
              <h3 className='text-xl text-bright'>{title}</h3>
              <p className='text-md md:text-lg'>{globalUtils.arrToPipedStr(list)}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
