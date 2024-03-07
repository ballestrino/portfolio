import { useState } from 'react';

function Technologies() {
  //css, html, git, github, javascript, react, python, SQL, tailwind, vite

  const [elements, setElements] = useState([
    'css.png',
    'html.png',
    'git.png',
    'github.png',
    'javascript.png',
    'react.png',
    'python.png',
    'SQL.png',
    'tailwind.png',
    'vite.png',
  ]);

  const handleRightArrow = () => {
    let newElements = [];
    for (let i = 0; i < elements.length; i++) {
      let previousElement = elements[i - 1];
      if (previousElement === undefined) {
        previousElement = elements[elements.length - 1];
      }
      newElements[i] = previousElement;
    }
    setElements(newElements);
    console.log(elements);
  };

  const handleLeftArrow = () => {
    let newElements = [];
    for (let i = 0; i < elements.length; i++) {
      let nextElement = elements[i + 1];
      if (nextElement === undefined) {
        nextElement = elements[0];
      }
      newElements[i] = nextElement;
    }
    setElements(newElements);
    console.log(elements);
  };

  //Interfaz
  return (
    <section className='h-vh50 w-screen bg-gray-100'>
      <img
        onClick={handleLeftArrow}
        src='/leftArrow.svg'
        alt='move slider left'
      />
      <div className='flex flex-col'></div>
      <img
        onClick={handleRightArrow}
        src='/rightArrow.svg'
        alt='move slider right'
      />
    </section>
  );
}

export default Technologies;
