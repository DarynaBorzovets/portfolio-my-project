import PropTypes from 'prop-types';
import { Tilt } from 'react-tilt';

const PhotoCard = ({ title, icon }) => {
  return (
    <Tilt className="xs:w-[320px] w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[380px] flex justify-center items-center flex-col">
          {/* Increased photo size and slightly rounded corners */}
          <img src={icon} alt={title} className="w-74 h-74 object-cover rounded-[12px]" />
          <h3 className="text-white text-[20px] font-bold text-center mt-4">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

PhotoCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default PhotoCard;
