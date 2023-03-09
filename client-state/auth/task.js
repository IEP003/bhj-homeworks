const signinForm = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if(localStorage.length && localStorage.id){
    greeting(localStorage.id);
} else {
    signin.classList.add('signin_active');
}

document.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let formData = new FormData(signinForm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE){
            const xhrSuccess = JSON.parse(xhr.responseText);
            if(xhrSuccess.success){
                localStorage.id = xhrSuccess.user_id;
                greeting(localStorage.id);
            } else {
                alert('Неверный логин или пароль!');
            }
        }
    })
})

function greeting(id){
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.insertAdjacentHTML('afterbegin', `${id}`);
    const btn = document.createElement('button');
    btn.textContent = 'Деавторизация';
    btn.style.marginTop = '20px';
    userId.insertAdjacentElement('beforeend', btn);
    btn.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    })
}