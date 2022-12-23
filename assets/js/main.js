
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav__menu');


//open nav menu

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
});


//close nav menu

const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);

//scrolling effect

var nodeArray = [

    document.querySelector('#skills'),
    document.querySelector('#projects'),
    document.querySelector('#git_calender'),
    document.querySelector('#contact'),
    document.querySelector('.header__image'),
    

];

ScrollReveal().reveal(nodeArray,{ delay: 500, reset: true });

var projects =  document.querySelectorAll('.project__block')
ScrollReveal().reveal(projects,{ delay: 500, reset: true });

var myname = document.querySelector('.myname');
ScrollReveal().reveal(myname,{ delay: 700, reset: true });


