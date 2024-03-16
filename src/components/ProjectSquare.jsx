import prop_types from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

function ProjectSquare({ title, description, src, alt }) {
  const { translationProvider } = useContext(AppContext);
  return (
    <div
      className='
      flex flex-col justify-start 
      group overflow-hidden
      hover:scale-105 transition-transform duration-500 ease-in-out
      '
    >
      <div
        className='
      
      '
      >
        <img
          //images 16/9 aspect ratio
          src={src}
          alt={alt}
          className='
          mb-5 aspect-video rounded-lg
          '
        />
      </div>
      <h3
        className='
        text-eachProjectH3 
        text-2xl
        group-hover:text-hoverProjectTitle
        '
      >
        {translationProvider[title]}
      </h3>
      <p
        className='
        text-white
        text-md
      '
      >
        {translationProvider[description]}
      </p>
    </div>
  );
}

ProjectSquare.propTypes = {
  title: prop_types.string.isRequired,
  description: prop_types.string.isRequired,
  src: prop_types.string.isRequired,
  alt: prop_types.string.isRequired,
};

export default ProjectSquare;
