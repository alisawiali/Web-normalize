// Check If Thers Local Storge Color Option
let mainColor = localStorage.getItem('color-option')
if (mainColor === true) {
  // console.log(localStorage.getItem("color-option"));
  document.documentElement.style.setProperty('--main-color', mainColor)

  // Remove Active Class From All Class List Item .
  document.querySelectorAll('.color-list li').forEach(elemnt => {
    elemnt.classList.remove('active')
    // Add Active Class On Element With Data Color === LocalStroge Item
    if (elemnt.dataset.color === mainColor) {
      // Add Active Class
      elemnt.classList.add('active')
    }
  })
}

//____________________________________________________________________________
//Toggle Spin Class on Icon
document.getElementById('Gear').onclick = function () {
  //toggle class fa-spin for Rotation on self
  this.classList.toggle('fa-spin')
  //Toggle class open and Main Sttings-box
  document.getElementById('sttinhgs-box').classList.toggle('open')
}

//Swith Colors
let colorsLi = document.querySelectorAll('.color-list li')

colorsLi.forEach(li => {
  // Loop On set Items
  li.addEventListener('click', e => {
    // set color on root
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

    // Set Color On Local Stroage.
    localStorage.setItem('color-option', e.target.dataset.color)

    // Remove Active Class From All Chlidern.
    e.target.parentElement.querySelectorAll('.active').forEach(elemnt => {
      elemnt.classList.remove('active')
    })
    // Add Active  Class On Target
    e.target.classList.add('active')
  })
})

// ___________________RANDOM BACkgraound-----------------span-->
//Swith Colors
let randomBackEl = document.querySelectorAll('.random-background span')

randomBackEl.forEach(span => {
  // Loop On All span
  span.addEventListener('click', e => {
    // Remove Active Class From All Chlidern.
    e.target.parentElement.querySelectorAll('.active').forEach(elemnt => {
      elemnt.classList.remove('active')
    })
    // Add Active  Class On Target
    e.target.classList.add('active');

    if(e.target.dataset.background === "yes"){
        console.log("yes")
    }else{
        console.log("no")
    }
  })
})

//____________________________________________________________________________
// Select Lading paga Element____________________________-
let laindigPage = document.getElementById('landing-pag')

// Get Array of Imag
let imagesArray = [
  './images/website-design.jpeg',
  './images/tool-inc-XFW-r3ALz2M-unsplash.jpg',
  './images//Web-Desgin.jpeg'
]

// setInterval(() => {

//      // Get Random Number
//         let randomNumber = Math.floor(Math.random() * imagesArray.length);

//         //Change  Background Image Url
//         laindigPage.style.backgroundImage =
//        ` url(${imagesArray[randomNumber]} )`;
// }, 2000);

let backInterval;

let count = 0
backInterval = setInterval(counter, 3000)
function counter () {
  if (count >= 2) 
  count = 0
  else count++

  laindigPage.style.backgroundImage = `url(${imagesArray[count]})`
}
// let randombackElemnt = true;
// function randomback(){
//     if(randombackElemnt === true){

//     }
// }
//____________________________________________________________________________

// let firstname = "Imad";
// let lastName = "Alisawi";
// let age = 33;

// console.log( `mein name lautet: ${firstname +" " +lastName}und ich bin : ${age}`);
