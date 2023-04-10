let cheese = document.querySelector('.cheese');
let button = document.querySelector('.cross');
button.addEventListener('click', showCheese);

function showCheese(){
    cheese.classList.toggle('showCheese');
}