import AboutMeText from './AboutMeText';
import TechnologiesSlider from './TechnologiesSlider';

function AboutMe() {
  return (
    <section
      id='aboutMe'
      className='flex w-screen bg-secondary p-56
      xl:vh-65 xl:items-center xl:flex-row
      lg:flex-col md:h-vh65 md:justify-between md:items-center
       '
    >
      <AboutMeText />
      <TechnologiesSlider />
    </section>
  );
}

export default AboutMe;
