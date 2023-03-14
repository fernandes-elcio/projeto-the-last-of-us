/* 
OBJETIVO -  quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

- passo 1 - dar um jeitodepegar o elemento HTML dos botões

- passo 2 - dar um jeitode identificar o clique do usuario no botão

- passo 3 - desmarcar o botão selecionado anterior

- passo 4 - marcar o botão clicado como se estivesse selecionada

- passo 5 - esconder as imagens de fundo anterior

- passo 6 - fazer aparecer a imagem de fundo corresponte ao botão clicado

*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botões

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// - passo 2 - dar um jeitode identificar o clique do usuario no botão

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // - passo 3 - desmarcar o botão selecionado anterior

        desativarBotaoSelecionado();

        // - passo 4 - marcar o botão clicado como se estivesse selecionado

        selecionarBotaoCarrossel(botao);

        // - passo 5 - esconder as imagens ativa de fundo 

        esconderImagemAtiva();

        // - passo 6 - fazer aparecer a imagem de fundo corresponte ao botão clicado

        mostrarImagemFundo(indice);

    })
})

function mostrarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
