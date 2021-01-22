const deu = document.querySelector('.text-deu__block');
const rus = document.querySelector('.text-rus__block');
const eng = document.querySelector('.text-eng__block');

const buttonRus = document.querySelector('.button__rus');
const buttonDeu = document.querySelector('.button__deu');
const buttonEng = document.querySelector('.button__eng');

buttonRus.addEventListener('click', () => {
    deu.classList.toggle("active");
    eng.classList.toggle("active");
});

buttonDeu.addEventListener('click', () => {
    rus.classList.toggle("active");
    eng.classList.toggle("active");
});

buttonEng.addEventListener('click', () => {
    rus.classList.toggle("active");
    deu.classList.toggle("active");
});