function rgbGenerator() {
    const var01 = Math.ceil(Math.random() * 255);
    const var02 = Math.ceil(Math.random() * 255);
    const var03 = Math.ceil(Math.random() * 255);
    return [var01, var02, var03];
  }
  
  function getScore() {
    const score = localStorage.getItem('score');
    const elemento = document.getElementById('score');
    elemento.innerText = score;
  }
  
  function ballsColoring() {
    const elementsBalls = document.getElementsByClassName('ball');
    const numSorteado = Math.ceil(Math.ceil(Math.random() * 60) / 10);
    const arrayColorsBalls = [];
    for (let index = 0; index < elementsBalls.length; index += 1) {
      arrayColorsBalls.push(rgbGenerator());
      const cor1 = arrayColorsBalls[index][0];
      const cor2 = arrayColorsBalls[index][1];
      const cor3 = arrayColorsBalls[index][2];
      if (index === numSorteado - 1) {
        document.getElementById('rgb-color').innerText = `(${cor1}, ${cor2}, ${cor3})`;
      }
      elementsBalls[index].style.backgroundColor = `rgb(${cor1}, ${cor2}, ${cor3})`;
    }
  }
  
  function addScore() {
    if (localStorage.getItem('score') != null) {
      let placar = parseInt(localStorage.getItem('score'), 10);
      placar = parseInt(placar, 10);
      placar += 3;
      localStorage.setItem('score', placar);
    }
  }
  
  document.getElementsByClassName('rgb-body')[0].addEventListener('click', (event) => {
    const elemento = event.target;
    if (elemento.className.includes('ball')) {
      const pickColor = elemento.style.backgroundColor;
      const choosenColor = `rgb${document.getElementById('rgb-color').innerText}`;
      const answerElement = document.getElementById('answer');
      if (pickColor === choosenColor) {
        answerElement.innerText = 'Acertou!';
        addScore();
        getScore();
      } else {
        answerElement.innerText = 'Errou! Tente novamente!';
      }
    }
  });
  
  document.getElementById('reset-game').addEventListener('click', () => {
    ballsColoring();
    document.getElementById('answer').innerText = 'Escolha uma cor';
  });
  
  window.onload = () => {
    ballsColoring();
    if (localStorage.getItem('score') === null) {
      localStorage.setItem('score', 0);
    }
    getScore();
  };