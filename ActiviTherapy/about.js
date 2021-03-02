const textInputs=['problems...','goals...','hope...'];

let textCounter=0;

let textIndex=0; //each character

let currentText='';

let letter='';



(function typeEffect(){

    if(textCounter === textInputs.length){

        textCounter=0;

    }

    currentText=textInputs[textCounter];

    letter=currentText.slice(0,++textIndex);

    document.querySelector('.textChange').textContent=letter;

    if(letter.length === currentText.length){

       

        textCounter++;
        textIndex=0;

    }


    setTimeout(typeEffect, 300);

    

    

}());


const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

document.getElementById("exitButton").onclick=function(){

    container.classList.remove('show-nav')
}

const clockHour=document.querySelector('.hour')

const clockMinute=document.querySelector('.minute')

const clockSecond=document.querySelector('.second')

function clock(){

    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    clockHour.style.transform=`translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`

    clockMinute.style.transform=`translate(-50%,-100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`

    clockSecond.style.transform=`translate(-50%,-100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

clock()

setInterval(clock,1000)


const testimonialContainer=document.querySelector('.testimonialZone')

const testimonial=document.querySelector('.testimonial')

const userImage=document.querySelector('.userImage')

const userName=document.querySelector('.userName')

const userRole=document.querySelector('.userRole')

const testimonials =  [

    {
        name:'Karina Stall',
        role: 'Photographer',
        image:'Portrait1.jpg',
        text:"I've only been subscribed for a month. This is how fast they've helped me overcome my problems. They're not interested in waisting time and find the best solutions in the shortest amount of time",

    },

    {
        name:'Leonard Heims',
        role: 'Shoutcaster',
        image:'Portrait2.jpg',
        text:"My courage, as well as my self-esteem, had grown substantially since following ActiviTherapy. The selected activities really help finding the root of all problems and fixing them!",

    },

    {
        name:'Anthony Carlson',
        role: 'Bartender',
        image:'Portrait3.jpg',
        text:"I've always feared public speaking. Thanks to this place, I've started playing chess, and felt that each move is like a subtle conversation. The therapists are all A-class and wonderful people.",

    },

]

let testimonialIndex=1

function slideTestimonial(){

const {name,role,image,text}=testimonials[testimonialIndex]

testimonial.innerHTML=text

userImage.src=image

userName.innerHTML=name

userRole.innerHTML=role

testimonialIndex++

if(testimonialIndex>testimonials.length-1){

    testimonialIndex=0

}

}

setInterval(slideTestimonial,10000)