let jogosAlugados = 1;

function mostrarQuantidadeAlugados() {
    
    console.log(`O total de jogos alugados é ${jogosAlugados}`);
}


function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let statusDoBotao = jogoClicado.querySelector('.dashboard__item__button');


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        statusDoBotao.innerHTML = 'Alugar'
        alert('O jogo foi devolvido.')
        jogosAlugados--
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        statusDoBotao.innerHTML = 'Devolver';
        jogosAlugados++
    }

    if (statusDoBotao.classList.contains('dashboard__item__button--return')) {
        statusDoBotao.classList.remove('dashboard__item__button--return');
    } else {
        statusDoBotao.classList.add('dashboard__item__button--return');
    }

    mostrarQuantidadeAlugados()


}

alterarStatus('game1');
alterarStatus('game2');
alterarStatus('game3');
