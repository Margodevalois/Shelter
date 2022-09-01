//burger
let btnBurger = document.querySelector('.burger_menu');
let navMenu = document.querySelector('.nav_menu');
let overflow = document.querySelector('.overflow');
let navBurger = document.querySelector('.nav_burger');
let logoBurger = document.querySelector('.logo_burger');
let bodyScroll = document.body;

function handler (){
    overflow.classList.toggle('block-none')
    navMenu.classList.toggle('nav_toggle')
    btnBurger.classList.toggle('burger-animation')
    bodyScroll.classList.toggle('scroll-hide')
}

function handlerMenu (event){
  let myElement = event.target.getAttribute('class');
  if(myElement === 'burger_link'){
    overflow.classList.toggle('block-none')
    navMenu.classList.toggle('nav_toggle')
    btnBurger.classList.toggle('burger-animation')
    bodyScroll.classList.toggle('scroll-hide')  
  }
}

btnBurger.addEventListener('click', handler)
overflow.addEventListener('click', handler)
logoBurger.addEventListener('click', handler)
navBurger.addEventListener('click', handlerMenu)
