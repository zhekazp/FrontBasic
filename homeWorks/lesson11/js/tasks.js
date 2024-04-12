//task1

const stringArr = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo in, aliquam eveniet odio architecto voluptatibus odit deleniti sint, ut asperiores fugit deserunt dolores ullam? Itaque cum eaque sequi hic.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo in, aliquam eveniet odio architecto voluptatibus odit deleniti sint, ut asperiores fugit deserunt dolores ullam? Itaque cum eaque sequi hic.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo in, aliquam eveniet odio architecto voluptatibus odit deleniti sint, ut asperiores fugit deserunt dolores ullam? Itaque cum eaque sequi hic."];

function task1(el) {
    createDivs(stringArr, el);
}
function getRandomColor() {
    const colors = ['red', 'green', 'black', 'grey'];
    return colors[Math.floor(Math.random() * 4)];
}

function createDivs(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement('div');
        el.appendChild(div);
        div.classList = 'divT1';
        div.style.color = getRandomColor();
        div.innerText = arr[i];
    }
}

//task2

function task2(el) {
    const div = document.createElement('div');
    el.appendChild(div);
    div.classList = 'divT2';
    div.innerText = "Some TEXT to change color with button click";
    const but = document.createElement('button');
    but.innerText = 'OK';
    but.addEventListener('click', () => {
        div.style.color = 'red';
    });
    el.appendChild(but);
}

//task3
function task3(el) {
    const but = document.createElement('button');
    but.innerText = 'Click Me';
    but.addEventListener('click', () => {
        addCart(el);
    });
    but.style.margin = '20px';
    el.appendChild(but);

}
function addCart(el) {
    const div = document.createElement('div');
    el.appendChild(div);
    div.classList = 'divT2';
    const h3=document.createElement('h3');
    h3.innerText="Brendan Eich";
    div.appendChild(h3);
    const p=document.createElement('p');
    p.innerText="The man how invented Java Script";
    div.appendChild(p);
    const img = document.createElement('img');
    img.setAttribute('src','./img/Brendan_Eich.jpg');
    img.setAttribute('alt','Brendan_Eich');
    div.appendChild(img);
}



const functions = [task1, task2, task3];

function avctivate() {
    return functions;
}

