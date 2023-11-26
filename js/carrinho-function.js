const btnCarrinho = document.querySelector('#meu-carrinho-botao')
const btnFecharCarrinho = document.querySelector('.fechar-carrinho')
const containerCarrinho = document.querySelector('.container-carrinho')

function functionAbrirCarrinho() {
    containerCarrinho.classList.remove('fechado')
}

function functionFecharCarrinho() {
    containerCarrinho.classList.add('fechado')
}


btnCarrinho.addEventListener('click', (e) => {
    e.preventDefault

    functionAbrirCarrinho()
})

btnFecharCarrinho.addEventListener('click', (e) => {
    e.preventDefault

    functionFecharCarrinho()
})