var header = document.getElementById('container');
var navlist = document.getElementById('nav-list');
var content = document.getElementById('content')
var container = document.getElementById('container')
var showSidebar = false;

var Carrinhoid = document.getElementById('carrinho');
var carrinho = false;


function toogleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navlist.style.marginLeft = '-10vw';
        navlist.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)'
        container.style.filter = 'blur(2px)'
    }
    else {
        navlist.style.marginLeft = '-100vw';
        navlist.style.animationName = 'noSee';
        content.style.filter = ''
        container.style.filter = ''
    }
}

function carrinhoOnOf() {
    carrinho = !carrinho;
    if (carrinho) {
        Carrinhoid.style.marginRight = '0vw';
        Carrinhoid.style.animationName = 'CarrinhoOn';
        content.style.filter = 'blur(2px)'
        container.style.filter = 'blur(2px)'
    }
    else {
        Carrinhoid.style.marginRight = '-20vw';
        Carrinhoid.style.animationName = 'CarrinhoOf';
        content.style.filter = ''
        container.style.filter = ''
    }

}