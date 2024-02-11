const nomeCapitulo = document.getElementById("capitulo");
const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const quantidadeCapitulos = 10;

let taTocando = false;
let capitulo = 1;

function tocarFaixa() {
    if (audio.src === "") {
        audio.src = "books/dom-casmurro/1.mp3";
    }
    botaoPlayPause.classList.remove("bi-play-circle");
    botaoPlayPause.classList.add("bi-pause-circle");
    audio.play();   
    taTocando = true;
}

function pausarFaixa() {
    botaoPlayPause.classList.add("bi-play-circle");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    audio.pause();
    taTocando = false;
  }
  
  function tocarOuPausarFaixa() {
    if (taTocando === true) {
        pausarFaixa();
    } else {
        if (audio.paused) {
            tocarFaixa();
        } else {
            pausarFaixa();
        }
    }
}


function capituloAnterior (){
    if (capitulo === 1) {
        capitulo = quantidadeCapitulos;
    } else {
        capitulo -= 1;
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    carregarFaixa();
    }
}

function proximoCapitulo(){
    if (capitulo < quantidadeCapitulos) {
        capitulo += 1;
    } else {
        capitulo = 1;
    }
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    carregarFaixa();
}

function carregarFaixa() {
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa(); 
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
audio.addEventListener("ended", proximoCapitulo);