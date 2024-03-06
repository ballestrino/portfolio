function AboutMeText() {
  return (
    <section className='flex flex-col justify-center border-l-2 border-white w-2/5 h-fit ml-10 pl-10 py-2 text-white'>
      <h2 className='text-5xl text-primary py-2'>Sobre Mi</h2>
      <p className='text-md py-2 '>
        Soy un joven programador de 17 años de Uruguay. Mi fascinación por la
        programación nació desde pequeño. Soy dedicado,creativo y siempre estoy
        en la búsqueda de soluciones innovadoras. Actualmente, creo proyectos
        web con diversas tecnologías del momento y continúo aprendiendo día a
        día para mejorar mis habilidades.
      </p>
      <span className='font-bold py-2 text-md'>
        Explora mi portfolio y descubre cómo transformo ideas en código con
        pasión y originalidad
      </span>
      <button className='w-1/5  rounded-lg border-2 border-primary px-2 my-2'>
        Proyectos
      </button>
    </section>
  );
}

export default AboutMeText;
