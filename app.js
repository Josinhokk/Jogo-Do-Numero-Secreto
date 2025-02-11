let listaDeNumerosSorteados = []
let numeroLimite = 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function atribuirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = (texto);
}

function exibirMensagemInicial(){
    atribuirTexto('h1','Bem vindos ao jogo do número secreto.');
    atribuirTexto('p','Escolha um número de 1 a 100');
}

exibirMensagemInicial();

//funcao do tipo boolean que retorna verdadeiro ou falso


function botaoChutar(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        atribuirTexto('h1','Acertou!');
        //ultilizada para concordancia do portugues
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Parabéns voce adivinhou o numero secreto! com um total de ${tentativas} ${palavraTentativa}!`
        atribuirTexto('p',mensagemTentativas);
        //o botão no html tem um id com o comando abaixo estamos buscando justamente esse id
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{ 
        if (chute > numeroSecreto){
        atribuirTexto('p',"o número é menor");
    }else{
        atribuirTexto('p','o número é maior');
    }
    tentativas++;
    limparCampo();
    }
}
//funcao do tipo return que nos devolve um dado
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',true);
}
