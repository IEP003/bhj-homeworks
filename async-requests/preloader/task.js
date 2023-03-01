let xhr = new XMLHttpRequest();
const loader = document.querySelector('.loader');
const valuteContainer = document.getElementById('items');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', () => {
    if(xhr.status != 200){
        alert(`Ошибка ${xhr.status}, ${xhr.statusText}`)
    } else {
        loader.classList.remove('loader_active');
        let valuteObj = xhr.response;
        let valuteObjArray = Object.values(valuteObj.response.Valute);
        console.log(valuteObjArray)
        valuteObjArray.forEach(item => {
            valuteContainer.innerHTML += `
            <div class ="item">
                <div class="item__code">
                    ${item.CharCode}
                </div>
                <div class="item__value">
                    ${item.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>    
            `
        })
    }
})

/* setInterval(()=>{
    let info = xhr.response
    if(info != null){
        console.log(info.response.Valute)
    }
}, 2000)
 */