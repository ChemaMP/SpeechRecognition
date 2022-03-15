const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('cómo estás')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Estoy bien';
      texts.appendChild(p)
    }
    if (text.includes("cuál es tu nombre") || text.includes('Cuál es tu nombre')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Mi nombre es Leunam';
      texts.appendChild(p)
    }
    if (text.includes('Abre YouTube')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Abriendo YouTube';
      texts.appendChild(p)
      console.log('Abriendo Youtube')
      window.open('https://www.youtube.com/watch?v=1V_xRb0x9aw')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();