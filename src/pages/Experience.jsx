import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { styles } from '../styles';
import { experiences } from '../constants';

function Experience() {
  return (
    <>
      <div className="mt-20">
        <h2 className={`${styles.sectionHeadText} text-center`}>Experience</h2>
      </div>

      <div className='mt-20 ml-20 mr-20 mb-10 flex flex-col'>
        <VerticalTimeline>
          {experiences && experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={`experience-${index}`}
              contentStyle={{
                background: '#1d1836',
                color: '#fff',
                borderRadius: '20px',
              }} > 
              
              <div className="ml-5 mt-5 mb-10 ">
              &nbsp;<h3 className='text-white text-[22px] font-bold'>{experience.company_name}</h3>
             <p>{experience.date}</p>
              </div>

              <ul className='mt-3 list-disc ml-5 space-y-2'>
              <p className='text-secondary text-[20px] font-semibold' >{experience.title}</p>
                {experience.points.map((point, index) => (
                  <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
                ))}
              </ul>&nbsp;
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Experience;
