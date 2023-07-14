function encrypt() {
  var inputText = document.getElementById('inputText').value;
  var outputText = '';

  for (var i = 0; i < inputText.length; i++) {
    var char = inputText[i];

    switch (char) {
      case 'e':
        outputText += 'enter';
        break;
      case 'i':
        outputText += 'imes';
        break;
      case 'a':
        outputText += 'ai';
        break;
      case 'o':
        outputText += 'ober';
        break;
      case 'u':
        outputText += 'ufat';
        break;
      default:
        outputText += char;
    }
  }

  document.getElementById('outputText').value = outputText;
}

function decrypt() {
  var inputText = document.getElementById('inputText').value;
  var outputText = '';
  var i = 0;

  while (i < inputText.length) {
    var char = inputText.substr(i, 5);

    switch (char) {
      case 'enter':
        outputText += 'e';
        i += 5;
        break;
      case 'imes':
        outputText += 'i';
        i += 4;
        break;
      case 'ai':
        outputText += 'a';
        i += 2;
        break;
      case 'ober':
        outputText += 'o';
        i += 4;
        break;
      case 'ufat':
        outputText += 'u';
        i += 4;
        break;
      default:
        outputText += inputText[i];
        i++;
    }
  }

  document.getElementById('outputText').value = outputText;
}

function copyToClipboard() {
  var outputText = document.getElementById('outputText');
  outputText.select();
  outputText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Texto copiado para a área de transferência!');
}