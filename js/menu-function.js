const menuHamburger = document.querySelector('#menu-hamburger')
const fecharMenu = document.querySelector('.fechar-menu')
const containerMenuHamburger = document.querySelector('.container-menu-hamburger')

function functionAbrirMenu() {
    containerMenuHamburger.classList.remove('fechado')
}

function functonFecharMenu() {
    containerMenuHamburger.classList.add('fechado')
}

menuHamburger.addEventListener('click', (e) => {
    e.preventDefault

    functionAbrirMenu()
})

fecharMenu.addEventListener('click', (e) => {
    e.preventDefault

    functonFecharMenu()
})