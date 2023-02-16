const buttonsCount = Array.from(document.querySelectorAll('.product__quantity-control'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cartProducrs = document.querySelector('.cart__products');
let parent;
let valueProduct;
let img = [];
let id = [];

buttonsCount.forEach(item => item.addEventListener('click', () => {
    let productValue = item.parentElement.querySelector('.product__quantity-value');
    if(item.classList.contains('product__quantity-control_inc')){
        productValue.textContent ++;
    } else {
        if (productValue.textContent >= 2){
            productValue.textContent --
        } else {
            return;
        }
    }
    valueProduct = productValue.textContent;
}));

productAdd.forEach(item => item.addEventListener('click', () => {
    recusrsion(item);
    valueProduct = item.parentElement.getElementsByClassName('product__quantity-value')[0].textContent;
    item.parentElement.getElementsByClassName('product__quantity-value')[0].textContent = 1;
    if(id.includes(parent.dataset.id)){
        Array.from(cartProducrs.children)
        .filter(item => item.dataset.id == parent.dataset.id)
        .forEach(item => {
            let currentNumber = item.querySelector('.cart__product-count').textContent;
            item.querySelector('.cart__product-count').textContent = Number(currentNumber) + Number(valueProduct);
        })
    } else {
        img.push(parent.getElementsByTagName('img'));
        id.push(parent.dataset.id)
        cartProducrs.innerHTML += `
            <div class="cart__product" data-id="${parent.dataset.id}">
                <img class="cart__product-image" src="${parent.getElementsByTagName('img')[0].currentSrc}">
                <div class="cart__product-count">${valueProduct}</div>
            </div>`
    }
}))

function recusrsion(obj){
    if(obj.dataset.id == undefined){
        obj = obj.parentElement
        recusrsion(obj)
    } else {
        return parent = obj;
    }
}
