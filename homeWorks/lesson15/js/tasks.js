//task1
const arr = [];

function randomArray(arr, length, max) {
    for (let i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random() * max);
    }
}

function arrToString(arr) {
    let result = ''
    arr.forEach((item, index) => {
        result += item;
        if (index < arr.length - 1) {
            result += ', ';
        }
    });
    return result;
}

function task1() {
    randomArray(arr, 10, 10);

    const block1Elements = document.getElementById('block1').children;

    block1Elements[0].innerText = 'Start array : [' + arrToString(arr) + ']';

    block1Elements[1].innerText = 'Result array : [' + arrToString(arr.filter(item => item > 5)) + ']';
}


//task2

function productsInit() {
    const products = [];
    for (let i = 0; i < 10; i++) {
        const product = {
            name: 'product' + i,
            producer: 'producer' + i,
            price: (Math.round(Math.random() * 10+1) * 1000)
        }
        products.push(product);
    }
    return products;
}

function addProducts(el, name, producer, price) {
    
    const div=document.createElement('div');
    div.classList.add('product');
    el.appendChild(div);

    const h2 = document.createElement('h2');
    h2.innerText = name;
    div.appendChild(h2);

    const h3 = document.createElement('h3');
    h3.innerText = producer;
    div.appendChild(h3);

    const span = document.createElement('span');
    span.innerText = price;
    div.appendChild(span);

}

function task2() {

    const block2=document.getElementById('block2');
    block2.innerHTML='';

    const div = document.createElement('div');
    div.classList.add('products');
    block2.appendChild(div);

    const products=productsInit();
    products.filter(item => item.price > 5000)
    .forEach(item => {
        addProducts(div, item.name, item.producer, item.price);
    });
}


//task3

function task3(){
    
}

//Initialisition
const functions = [task1, task2,task3];

function avctivate() {
    return functions;
}

