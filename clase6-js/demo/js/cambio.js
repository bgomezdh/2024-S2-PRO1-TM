const body = document.querySelector('body');
const button = document.querySelector('#btn');

const ligth = "white";
const dark  = "black";


button.addEventListener('click', (e) =>{
    if (button.innerText == ligth) {
        body.style.backgroundColor = dark;
        body.style.color = ligth;
        button.innerText = dark;
    } else {
        body.style.backgroundColor = ligth;
        body.style.color = dark;
        button.innerText = ligth;
    }
});