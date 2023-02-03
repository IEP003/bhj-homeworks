const dropList = document.querySelector('.dropdown__list');
const dropListBtn = document.querySelector('.dropdown__value');
const langSelect = document.querySelectorAll('.dropdown__link');

dropListBtn.addEventListener('click', () => {
    dropList.classList.toggle('dropdown__list_active');
});

langSelect.forEach(item => item.addEventListener('click', (event) => {
    event.preventDefault();
    dropListBtn.textContent = item.textContent;
    dropList.classList.remove('dropdown__list_active');
}));