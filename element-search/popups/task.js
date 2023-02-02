let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let modalClose = Array.from(document.querySelectorAll('.modal__close'));
let showSuccess = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

modalClose.forEach(btn => btn.onclick = () => {
    modalSuccess.classList.remove('modal_active');
    modalMain.classList.remove('modal_active');
});

showSuccess.onclick = () => {
    modalSuccess.classList.add('modal_active');
};