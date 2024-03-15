import prop_types from 'prop-types';

function ProjectSquare({ title, description, src, alt }) {
  return (
    <div
      className='
    flex flex-col justify-start overflow-hidden
    '
    >
      <div className=''>
        <img
          //images 16/9 aspect ratio
          src={src}
          alt={alt}
          className='mb-5 aspect-video rounded-lg'
        />
      </div>
      <h3
        className='text-ProjectTitle 

      text-2xl'
      >
        {title}
      </h3>
      <p className='text-white text-md'>{description}</p>
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
