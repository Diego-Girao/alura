function playSound(audioSelector) {
    const element = document.querySelector(audioSelector);

    if (element && element.localName === 'audio') {
        element.play();
    } else {
        // alert('Elemento não encontrado 😒');
        console.log('Elemento não encontrado ou seletor inválido 😒');
    }
}
const keysList = document.querySelectorAll('.tecla');

for (let count = 0; count < keysList.length; count++) {
    const keys = keysList[count];
    const instrument = keys.classList[1];
    const audioId = `#som_${instrument}`;

    keysList[count].onclick = function () {
        playSound(audioId);
    }

    keys.onkeydown = function (event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            keys.classList.add('ativa');
        }
    }
    keys.onkeyup = function () {
        keys.classList.remove('ativa');
    }
}
