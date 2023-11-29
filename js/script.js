"use strict";


// slider one


const imgsEl = document.querySelectorAll("img.img-slider");
const leftBtnEl = document.querySelector("#left");
const rightBtnEl = document.querySelector("#right");
const resImgsEl = document.querySelectorAll("img.res");
console.log(imgsEl)
let index = 0;

function nextImage() {
  imgsEl[index].classList.remove("active");
  index++;
  if (index == imgsEl.length) {
    index = 0;
  }
  imgsEl[index].classList.add("active");
}

function leftImgs() {
  imgsEl[index].classList.remove("active");
  index--;
  if (index < 0) {
    index = imgsEl.length-1;
  }
  imgsEl[index].classList.add("active");
}


// res slider
function nextImageRes() {
  resImgsEl[index].classList.remove("active");
  index++;
  if (index == resImgsEl.length) {
    index = 0;
  }
  resImgsEl[index].classList.add("active");
}

function leftImgsRes() {
  resImgsEl[index].classList.remove("active");
  index--;
  if (index < 0) {
    index = resImgsEl.length-1;
  }
  resImgsEl[index].classList.add("active");
}

leftBtnEl.addEventListener("click", () => {
  leftImgs();
  leftImgsRes()
});


rightBtnEl.addEventListener("click", () => {
  nextImage();
  nextImageRes()
});


setInterval(() => {
  nextImage();
}, 4000);



// slider two

const sliderEl=document.querySelectorAll('.slider-item')

function removeActiveClass(){
  for(let i=0 ; i<sliderEl.length ; i++){
    sliderEl[i].classList.remove('active')
  }
}
for(let i=0 ; i<sliderEl.length ; i++){
  sliderEl[i].addEventListener('click',()=>{
    removeActiveClass()
    sliderEl[i].classList.add('active')
  })
}



// menu hamburger

const openMenuEl=document.querySelector('#open-menu')
const closeMenu=document.querySelector('#close-menu')
const subMenuEL=document.querySelector('#menu-hamburger')

openMenuEl.addEventListener('click' , ()=>{
  subMenuEL.classList.remove('show')
  document.body.style.overflowY='hidden'
})

closeMenu.addEventListener('click' , ()=>{
  subMenuEL.classList.add('show')
  document.body.style.overflowY='scroll'
})