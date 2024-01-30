// Aplicando dinamicidade e funções ao app
const text = document.getElementById('text');
const encrypt = document.getElementById('encrypt');
const decrypt = document.getElementById('decrypt');
const newText = document.getElementById('newtext');
const copyButton = document.getElementById('copybutton');
const ilustration = document.getElementById('graph-ilustration');
const graphText = document.getElementById('graph-text');

const showNewText = (t) => {
  newText.innerHTML = t;
  copyButton.innerText = 'Copiar';
};

encrypt.addEventListener('click', (event) => {
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

  const copyText = newText.innerHTML;

  navigator.clipboard.writeText(copyText);

  copyButton.innerText = 'Copiado!';
});

decrypt.addEventListener('click', (event) => {
  event.preventDefault();

  const textIn = text.value;

  var textDecrypt = textIn.replace(new RegExp('enter', 'g'), 'e');
  textDecrypt = textDecrypt.replace(new RegExp('imes', 'g'), 'i');
  textDecrypt = textDecrypt.replace(new RegExp('ai', 'g'), 'a');
  textDecrypt = textDecrypt.replace(new RegExp('ober', 'g'), 'o');
  textDecrypt = textDecrypt.replace(new RegExp('ufat', 'g'), 'u');

  if (textDecrypt.length > 0) {
    ilustration.style.display = 'none';

    showNewText(textDecrypt);

    graphText.style.display = 'flex';
  }
});
