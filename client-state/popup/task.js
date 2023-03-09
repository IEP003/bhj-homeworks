const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal__close')

if(!(getCookie('isClosed') === 'true')){
    modal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
    document.cookie = 'isClosed=true';
    modal.classList.remove('modal_active');
})

function getCookie(name){
    const value = '; ' + document.cookie;
    let parts = value.split('; ' + name + '=');
    return parts.pop();
}
