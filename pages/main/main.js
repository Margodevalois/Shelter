const pets = [
    {
      "id": "0",
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "1",
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "2",
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "id": "3",
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "4",
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "5",
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "id": "6",
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "7",
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

//slider
  let petsCard = document.querySelectorAll('.card');
  let petsCardsWrapper = document.querySelectorAll('.slider_content');
  
  let currentItem = 0;
  let currentPetsItem = 0;
  let isEnabledBtn = true;

  function changeCurrentItem(n){
    currentItem = (n + petsCardsWrapper.length) % petsCardsWrapper.length;
}
function changePetsItem(n){
    currentPetsItem =  (n + pets.length) % pets.length;
}

const createCard = (amount, reverse = false) => {
    reverse ? changePetsItem(currentPetsItem - amount*2) : void(0);
    let items = [];
    let item;
    for(let i = 0; i < amount; i++){

        item = `<div class="card">
                    <img src=${pets[currentPetsItem].img} alt="${pets[currentPetsItem].name}" id="${pets[currentPetsItem].id}">
                    <h4>${pets[currentPetsItem].name}</h4> 
                    <button type="button">Learn more</button>
                    </div>`;
        items.push(item);
        changePetsItem(currentPetsItem + 1);
        }
    return items.join('');
}
const createCardsNext = (reverse = false) => {
    let items;
    if(document.documentElement.clientWidth >= 1280){
        items = reverse ? createCard(3, true) : createCard(3);
    }else if(document.documentElement.clientWidth > 767){
        items = reverse ? createCard(2, true) : createCard(2);
    }else {
        items = reverse ? createCard(1, true) : createCard(1);
    }
     petsCardsWrapper[currentItem].innerHTML = items;
    // popupListener();
}
function hideItem(direction){
    isEnabledBtn = false;
    petsCardsWrapper[currentItem].classList.add(direction);
    petsCardsWrapper[currentItem].addEventListener('animationend', function() {
        this.classList.remove(direction);
        this.classList.add('disabled');
    });
}
function showItem(direction){
    petsCardsWrapper[currentItem].classList.add(direction);
    petsCardsWrapper[currentItem].addEventListener('animationend', function() {
        this.classList.remove('disabled', direction);
        isEnabledBtn = true;
    });
}
function nextItem(n){
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}
function previousItem(n){
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

createCardsNext();

window.addEventListener('resize', event => {
    createCardsNext();
});
document.querySelectorAll('#btn_left').forEach(el => {
    el.addEventListener('click', () => {
        if(isEnabledBtn){ 
            previousItem(currentItem);
            createCardsNext(true);
        }
});
});
document.querySelectorAll('#btn_right').forEach(el => {
    el.addEventListener('click', () => {
        if(isEnabledBtn){  
            nextItem(currentItem);
            createCardsNext();
        }
});
});

//pop-up
let slider = document.querySelector('.slider');
let popUp = document.querySelector('.window');

function popup (event){
let myElement = event.target.closest('.card');
let myModal = event.target;
if(myElement){
    popUp.classList.toggle('hidden')
  let i = +event.target.closest('.card').getAttribute('id');
  document.querySelector('.img').src = pets[i]["img"];
  document.querySelector('.m_name').innerHTML = pets[i]["name"];
  document.querySelector('.type').innerHTML = pets[i]["type"];
  document.querySelector('.breed').innerHTML = pets[i]["breed"];
  document.querySelector('.m_description').innerHTML = pets[i]["description"];
  document.querySelector('.age').innerHTML = pets[i]["age"];
  document.querySelector('.inoculations').innerHTML = pets[i]["inoculations"];
  document.querySelector('.diseases').innerHTML = pets[i]["diseases"];
  document.querySelector('.parasites').innerHTML = pets[i]["parasites"];
}
if(myModal.getAttribute('class') === 'w_wrapper' || myModal.closest('.w_btn')){
    popUp.classList.toggle('hidden')
}
}

slider.addEventListener('click', popup)
popUp.addEventListener('click', popup)

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
