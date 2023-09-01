var header = document.getElementById('container');
var navlist = document.getElementById('nav-list');
var content = document.getElementById('content')
var container = document.getElementById('container')
var showSidebar = false;

function toogleSidebar(){
    showSidebar = !showSidebar;
    if(showSidebar){
        navlist.style.marginLeft='-10vw';
        navlist.style.animationName='showSidebar';
        content.style.filter='blur(2px)'
        container.style.filter='blur(2px)'
    }
    else{
        navlist.style.marginLeft='-100vw';
        navlist.style.animationName='noSee';
        content.style.filter=''
        container.style.filter=''
    }
}