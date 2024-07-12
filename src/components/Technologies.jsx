import { Tilt } from "react-tilt";
import PropTypes from "prop-types"; // Import PropTypes
import { styles } from "../styles";
import { tech } from "../constants";

const TechnologyCard = ({  title,  }) => (
  <Tilt className='xs:w-[250px] w-full '>
    <div className='ml-10 w-full green-pink-gradient p-[1px] rounded-[20px] 
    shadow-card ' >
      
      <div className='bg-tertiary rounded-[28px] py-5 px-12 min-h-[100px] first-letter  justify-center flex flex-col'
      >
        <h3 className='text-white text-[20px] font-bold text-center '>
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

// Define prop types
TechnologyCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired, // title should be a string and required
};

const Technologies = () => {
  return (
    <>
      <div className=" mt-20 ml-20">
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 ml-10 mr-10 mb-10'>
        {tech.map((technology, index) => (
          <TechnologyCard key={technology.title} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default Technologies;
