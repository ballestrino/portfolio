import AboutMeText from './AboutMeText';
import TechnologiesSlider from './TechnologiesSlider';

function AboutMe() {
  return (
    <section
      id='aboutMe'
      className='flex flex-col items-center h-vh65 w-screen bg-slate-800 '
    >
      <div className='flex items-center h-full w-screen relative'>
        <AboutMeText />
        <TechnologiesSlider />
      </div>
      <div></div>
    </section>
  );
}

export default AboutMe;
