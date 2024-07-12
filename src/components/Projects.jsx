import { Tilt } from "react-tilt";
import PropTypes from "prop-types"; // Import PropTypes
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";

const ProjectCard = ({
  name,
  description,

  image,
  source_code_link,
}) => {
  return (
    <div>
      <Tilt
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ml-10'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

       
      </Tilt>
    </div>
  );
};

// Define prop types
ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired, // name should be a string and required
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
};

const Projects = () => {
  return (
    <>
      <div className="ml-10">
        <h2 className={`${styles.sectionHeadText} ml-10 mt-20`}>Projects</h2>
      </div>

      <div className='w-full flex ml-10 mr-10'>
        <p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] ml-10 mr-10'
        >
          These projects showcase my skills as a software engineer, where I utilized modern frameworks and best practices to deliver effective solutions. By analyzing well-known applications and market trends, I identified existing problems and developed innovative solutions to address them.
        </p>
      </div>

      <div className='ml-10 mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
