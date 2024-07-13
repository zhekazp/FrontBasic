let cat = '0';
let currentProducts = [];

function productsInit(cat) {
    const products = [];
    let imgpath = '';
    let name = '';
    switch (cat) {
        case '0':
            imgpath = '../img/comp.avif';
            name = 'Comp -'
            break;
        case '1':
            imgpath = '../img/asus.avif';
            name = 'Note -'
            break;
        case '2':
            imgpath = '../img/monitor.avif';
            name = 'Monit -'
            break
    }

    for (let i = 0; i < 10; i++) {
        const product = {
            name: name + ' Asus' + i + 1,
            img: imgpath,
            price: (Math.round(Math.random() * 10) * 100) + 100
        }
        products.push(product);
    }
    return products;
}

function showProducts(products) {
    document.getElementById('priceSort').value = '';

    const shop = document.getElementById('products');
    shop.innerHTML = '';
    for (product of products) {
        shop.innerHTML += `<div class="productGrid">
        <img class="productPic" src="${product.img}">
        <div class="productInfo">
            <span>${product.name}</span>
            <p class="price">${product.price} $</p>
            <button class="itemAdd">add to cart</button>
        </div>
    </div>`;
    }

}
function setActiveMenuItem(index) {
    document.querySelectorAll('.item').forEach(item => {
        item.className = 'item';
        if (item.getAttribute("cat") === index) {
            item.classList.add('active');
        }
    });
}

function initialisition() {
    const loc = location.href;
    if (loc.includes('?')) {
        setActiveMenuItem(loc[loc.length - 1]);
        cat = loc[loc.length - 1];
    }
    currentProducts = productsInit(cat);
    document.querySelector('#priceSort').addEventListener('keydown', function (e) {
        if (e.keyCode !== 8) {
            if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    });

    document.querySelectorAll('.item').forEach(item =>
        item.addEventListener('click', (e) => {
            location.href = '../pages/shop.html?cat=' + e.target.getAttribute("cat");
        }));

    document.getElementById('sortBut').addEventListener('click', productFiltr);

    document.getElementById('clearBut').addEventListener('click', clearFiltr);
}

function clearFiltr() {
    document.getElementById('sortTask').innerText = '';
    document.getElementById('clearBut').style.visibility = 'hidden';
    showProducts(currentProducts);
}

function productFiltr() {
    let maxprice = document.querySelector('#priceSort').value;
    document.getElementById('sortTask').innerText = 'Price < ' + maxprice;
    document.getElementById('clearBut').style.visibility = 'visible';

    if (maxprice === '') {
        maxprice = 0;
    } else {
        maxprice = Number(maxprice);
    }
    const filteredProducts = currentProducts.filter(item => item.price <= maxprice);
    showProducts(filteredProducts);
}

function getCategory(){
    let html='';
    fetch('https://dummyjson.com/products/categories')
.then(res => res.json()).then(response=>{response.forEach((item,index)=>{
    html+=`<div cat="${index}" class="item">${item}</div>`;
});;}).then(()=>document.getElementById('catItem').innerHTML=html);

//<div cat="0" class="item">- Computers</div>
}


//initialisition();
//showProducts(currentProducts);
getCategory();

