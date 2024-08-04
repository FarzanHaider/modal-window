'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnsopenmodal = document.querySelectorAll('.show-modal');

console.log(btnsopenmodal);

const closemodal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
};
const openmodal = function(){
    console.log('Button Clicked');
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for (let i = 0; i < btnsopenmodal.length; i++)
btnsopenmodal[i].addEventListener('click', openmodal);
btnclosemodal.addEventListener('click', closemodal);

overlay.addEventListener('click', closemodal)
document.addEventListener('keydown', function(e){
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')){

        closemodal();
    
    }
})