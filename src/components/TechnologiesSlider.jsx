import Slider from 'react-slick';
import prop_types from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TechnologiesSlider() {
  // Array of technologies icons format .png
  const elements = [
    'css.png',
    'html.png',
    'git.png',
    'github.png',
    'javascript.png',
    'react.png',
    'node.png',
    'python.png',
    'SQL.png',
    'tailwind.png',
    'vite.png',
  ];
  // NextArrow personalized
  const NextArrow = props => {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style, height: '50px', width: '50px' }}
        onClick={onClick}
        src='/rightArrow.svg'
        alt=''
      />
    );
  };

  // Prop types for NextArrow
  NextArrow.propTypes = {
    className: prop_types.string,
    style: prop_types.object,
    onClick: prop_types.func,
  };

  // PrevArrow personalized
  const PrevArrow = props => {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style, height: '50px', width: '50px' }}
        onClick={onClick}
        src='/leftArrow.svg'
        alt=''
      />
    );
  };

  // Prop types for PrevArrow
  PrevArrow.propTypes = {
    className: prop_types.string,
    style: prop_types.object,
    onClick: prop_types.func,
  };

  // Settings for the slider from react-slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    //quitar el select
    swipeToSlide: true,
  };

  // UI
  return (
    <div className='flex justify-center w-3/5'>
      <div className='flex items-center justify-center w-fit bg-slate-800 relative'>
        <h2 className='text-14xl text-white opacity-30 absolute -translate-y-6'>
          Skills
        </h2>
        <Slider {...settings}>
          {elements.map((element, index) => (
            <div key={index} className='flex justify-center'>
              <img
                className='m-auto w-16 h-16'
                src={element}
                alt={`slide ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TechnologiesSlider;
