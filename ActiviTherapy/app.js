  
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))


document.getElementById("exitButton").onclick=function(){

    container.classList.remove('show-nav')
}



const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 600;

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})

const images=document.getElementById('images');

const img=document.querySelectorAll('#images img');

let index=0;

let interval=setInterval(run, 3000);

function run(){

    index++;
    change();

}

function change(){

    if(index > img.length - 1){

        index=0;

    }

    else if(index<0){

        index=img.length - 1;

    }

    images.style.transform = `translateX(${-index * 500}px)`;

}



