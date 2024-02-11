//Em JavaScript, uma função é um bloco de código nomeado que pode ser definido e chamado para realizar
//uma tarefa específica. Funções ajudam a organizar o código, promovem a reutilização e tornam o código
//mais modular. Aqui estão os principais elementos de uma função em JavaScript:

//function nomeDaFuncao(parametro1, parametro2, ...){
// Código a ser executado
//return resultado; // Opcional: a função pode retornar um valor    
//}

const nomeCapitulo = document.getElementById("capitulo");
//add uma variavel que armazenará o botão se avançar para o proximo capitulo
const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");

//vai armazenar a quantidade de capitulos
const quantidadeCapitulos = 10;
//variavel que pode ser mudada ao longo do codigo
//estamos iniciando a variavel com valor false para ser usada para controlar o estado de reprodução
//por padrão, vem com esse valor false, indicando que a faixa não está sendo tocada
//conforme o cod evoluir, esse valor pode ser atualizado para true quando a faixa estiver tocando
//e false quando estiver pausada
let taTocando = false;
//Vamos criar uma variável para representar os capítulos do nosso Audiobook.
//Como queremos que a jornada comece no capítulo um, vamos atribuir o valor 1 a essa variável.
let capitulo = 1;

function tocarFaixa() {
    botaoPlayPause.classList.remove("bi-play-circle");
//Remove a classe "bi-play-circle" do botão, caso esteja presente.
    botaoPlayPause.classList.add("bi-pause-circle");
//Adiciona a classe "bi-pause-circle" ao botão, indicando visualmente que
//a faixa está sendo reproduzida e agora o botão representa uma opção de pausa.
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
      tocarFaixa();
    }
  }

//function tocarOuPausarFaixa() 
//Declaração de uma função chamada tocarOuPausarFaixa. Esta função
//será chamada quando o evento associado ao botão for acionado.

//if (taTocando === true) { pausarFaixa(); } else { tocarFaixa(); }
//Estrutura condicional (if...else) que verifica se a variável taTocando é igual a true.
//Se for verdadeiro (taTocando === true), significa que a faixa está sendo
//reproduzida, então a função pausarFaixa() é chamada para pausar a faixa.
//Se for falso (else), ou seja, a faixa não está sendo reproduzida, a função
//tocarFaixa() é chamada para começar a reprodução.

function capituloAnterior (){
    if (capitulo === 1) {
        capitulo = quantidadeCapitulos;
    } else {
        capitulo -= 1;
//Nessa estrutura condicional (if-else), verificamos se o capitulo é igual a 1. Se for verdadeiro (ou seja,
//estamos no primeiro capítulo), ajustamos o capitulo para ser igual à quantidadeCapitulos (representando o último capítulo do livro). Caso
//contrário (se não estivermos no primeiro capítulo), simplesmente decrementamos o capitulo em 1. 
    audio.src = "/Intensivão/books/dom-casmurro/" + capitulo + ".mp3";
// variavel constante para armanezar o elemento responsável por guardar o nome do capitulo    
    const nomeCapitulo = document.getElementById("capitulo");

//Essa linha de código está associada à manipulação do conteúdo de um elemento HTML na página, mais
//especificamente, o elemento que armazena o título do capítulo. Aqui está uma explicação passo a passo:
//nomeCapitulo: Isso representa um elemento HTML que foi previamente selecionado no código, geralmente
//usando document.getElementById() ou métodos semelhantes. Esse elemento serve como o local onde
//desejamos exibir o título do capítulo.
//.innerText: innerText é uma propriedade que permite modificar o texto interno de um elemento HTML. Ao
//usá-la, podemos alterar dinamicamente o conteúdo textual dentro do elemento.
//"Capítulo " + capitulo: Aqui, estamos concatenando a string fixa "Capítulo " com a variável capitulo, que
//representa o número do capítulo atual. A concatenação (+) combina essas partes para criar uma nova
//string que representa o título formatado do capítulo.
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
    }
}

function proximoCapitulo(){
    if (capitulo < quantidadeCapitulos) {
        capitulo += 1;
    } else {
        capitulo = 1;
    }
    //else if aqui mante a logica da navegação entre capitulos consistente e controlada,
    //assegura que, ao chegar no ultimo capitulo, ao inves de continuar indefinadamente
    //a navegação retorne ao inicio da história
    audio.src = "/Intensivão/books/dom-casmurro/" + capitulo + ".mp3";
    //vai carregar o audio correto, essa concatenação dinâmica permite que o cod se ajuste automaticamente
    //ao capitulo atual, carregando o audio apropriado
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}
//não apenas avança a narrativa, mas também sincroniza o áudio para que os ouvintes
//possam aproveitar sem interrupções, que o audio correspondente a esse capitulo seja carregado e esteja pronto
//para tocar

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
// Adiciona um "ouvinte" ao botão, esperando pela ação de clique ("click"). Em outras palavras, estamos
// dizendo ao computador para "escutar" quando alguém clica no botão.

//classList é uma propriedade de objetos DOM em JavaScript que fornece acesso às classes de um elemento
//HTML. Ela contém métodos para adicionar, remover e verificar a presença de classes em um elemento.

//Métodos Principais:
//.add("classe1", "classe2", ...): Adiciona uma ou mais classes ao elemento.
//.remove("classe1", "classe2", ...): Remove uma ou mais classes do elemento.
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
//refere-se a um evento que é acionado quando o áudio chega ao fim, ou seja, quando a reprodução da faixa de áudio atual é concluída.
//é o tipo de evento que estamos ouvindo. Neste caso, estamos interessados no evento 'ended', que ocorre quando o áudio termina de ser reproduzido.
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
audio.addEventListener("ended", proximoCapitulo);