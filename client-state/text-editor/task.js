const textArea = document.getElementById('editor');
const btn = document.querySelector('.clear');

textArea.value = localStorage.getItem('text');

textArea.addEventListener('input', () => {
    localStorage.setItem('text', textArea.value)
});

btn.addEventListener('click', () => {
    textArea.value = '';
    localStorage.clear();
});