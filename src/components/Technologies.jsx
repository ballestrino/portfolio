function Technologies() {
  //css, html, git, github, javascript, react, python, SQL, tailwind, vite
  let elements = [
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
  ];

  const handleRightArrow = () => {
    let newElements = [];
    for (let i = 0; i < elements.length; i++) {
      //example with i = 0
      let previousElement = elements[i - 1]; //vite
      if (previousElement === undefined) {
        previousElement = elements[elements.length - 1];
        newElements[i] = previousElement; //vite
        continue;
      }
      //asignamos a previous element el ultimo valor de el array elements
      newElements[i] = previousElement; //vite
    }
    elements = newElements;
    console.log(elements);
  };

  const handleLeftArrow = () => {
    let newElements = [];
    for (let i = 0; i < elements.length; i++) {
      //example with i = 0
      let nextElement = elements[i + 1]; //vite
      if (nextElement === undefined) {
        nextElement = elements[0];
        newElements[i] = nextElement; //vite
        continue;
      }
      //asignamos a previous element el ultimo valor de el array elements
      newElements[i] = nextElement; //vite
    }
    elements = newElements;
    console.log(elements);
  };

  //test funcionamiento
  return (
    <section className='h-screen w-screen bg-gray-100'>
      <button onClick={handleLeftArrow}>left</button>
      <hr />
      <button onClick={handleRightArrow}>right arrow</button>
    </section>
  );
}

export default Technologies;
