const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');
const send = document.getElementById('send');

send.addEventListener('click', (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let data = new FormData(form);
    xhr.upload.onprogress = (evt) => {
        progress.setAttribute('value', evt.loaded/evt.total);
    };
    xhr.open('post', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(data)
})
