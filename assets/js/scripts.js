let button = document.querySelector('#input-submit');
let answer = document.querySelector('#warning');
button.addEventListener('click',()=>{
    let elInput = document.querySelector('#email');
    if(elInput.value == '') {
        answer.style.display = 'flex';
        elInput.classList.add('error-border');
    }
})