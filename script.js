const header = document.querySelector("header");
const headerImgs = ["url(img/rdo_0167.jpg)", "url(img/rdo_0311.jpg)", "url(img/rdo_0512.jpg)", "url(img/rdo_0657.jpg)"];

const burger = document.querySelector ('.burger');
const menu = document.querySelector ('aside');
const menuItems = document.querySelectorAll('aside ul li');

const sections = [...document.querySelectorAll('.main section')];
const footer = document.querySelector('#footer');

const navbar = document.querySelector('header .nav-box');

// logo swap
if(window.innerWidth < 1024){
    document.querySelector('.logo img').src = 'img/marine logo white.png'
}else if(window.innerWidth >= 1024) {
    document.querySelector('.logo img').src = 'img/marine logo grey.png'
}

// burger
burger.addEventListener("click", function(){
    burger.classList.toggle("active");
    menu.classList.toggle("active");
})

// mobile menu
menuItems.forEach((li) => {
    li.addEventListener('click', function(){
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    })
})

// header animation
let activeElement = 0;
const timeChange = 4000;
header.style.backgroundImage = headerImgs[Math.floor(Math.random()*4)];

function changeImg() {
    activeElement++;
    if(activeElement == headerImgs.length) {
        activeElement = 0;
    }
    header.style.backgroundImage = headerImgs[activeElement];
}
setInterval(changeImg, timeChange)

// scroll animation / navbar fixed
document.addEventListener('scroll', function(){

const scrollValue = window.scrollY;

// scrollHeight
// offsetTop
// offsetHeight


for (i=0; i<sections.length; i++){
    if(scrollValue > sections[i].offsetTop - sections[i].offsetHeight/2){
        sections[i].classList.add('active')
    }else if(scrollValue < 100){
        sections[i].classList.remove('active')
    }
}

if(scrollValue > footer.offsetTop - footer.offsetHeight/2){
    footer.classList.add('active')
}else if(scrollValue < footer.offsetTop){
    footer.classList.remove('active')
}

if(scrollValue > 0){
    navbar.classList.add('active');
}else{
    navbar.classList.remove('active')
}

// wykrycie kiedy strona zostala przewinieta do konca
if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
    document.querySelector('header .nav-box.active').classList.add('bottom');
}else{
    document.querySelector('header .nav-box.active').classList.remove('bottom');
}
})