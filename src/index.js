// Aplicando dinamicidade e funções ao app

const text = document.getElementById('text');
const criptograph = document.getElementById('cript');
const descript = document.getElementById('descript');
const newText = document.getElementById('newtext');
const copyButton = document.getElementById('copybutton');
const ilustration = document.getElementById('graph-ilustration');
const graphText = document.getElementById('graph-text');

const showNewText = (t) => {
  newText.innerHTML = t;
  copyButton.innerText = "Copiar";
};

criptograph.addEventListener('click', (event) => {
  event.preventDefault();

  const textIn = text.value;
  var codeText = '';

  for (let i = 0; i < textIn.length; i++) {
    if (textIn[i] === 'e') {
      codeText += 'enter';
    } else if (textIn[i] === 'i') {
      codeText += 'imes';
    } else if (textIn[i] === 'a') {
      codeText += 'ai';
    } else if (textIn[i] === 'o') {
      codeText += 'ober';
    } else if (textIn[i] === 'u') {
      codeText += 'ufat';
    } else {
      codeText += textIn[i];
    }
  }

  if (codeText.length > 0) {
    ilustration.style.display = 'none';

    showNewText(codeText);

    graphText.style.display = 'flex';
  }
});

copyButton.addEventListener('click', (event) => {
  event.preventDefault();

  const copyText = newText.innerHTML ;

  navigator.clipboard.writeText(copyText);

  copyButton.innerText = "Copiado!"
});
