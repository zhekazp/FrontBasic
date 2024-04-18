const tasksText = ["There is an array of numbers - you need to select all numbers greater than 5.",
    "There is an array of products: each product is an object with fields: name, price, manufacturer, (prices are random values), write a function for filtering products price above 5000.",
    "Layout the page with products, products are displayed one after another - the layout is at your discretion, add an input where the user can enter a price - after entering, products are filtered by price less than or equal to the one specified by the user"];
const tasks = avctivate();
let currentTask = 0;

document.getElementById('footer').innerText = new Date().getFullYear();

function initialisition() {
    document.querySelectorAll('.task').forEach(
        item =>
            item.addEventListener('click', function (e) {
                showBlock(e.target.getAttribute('n'));
            })
    );
    document.getElementById('execute').addEventListener('click', runButton);
    document.getElementById('clear').addEventListener('click', clearButton);
}

function hideAllBlocks() {
    document.querySelectorAll('.blocks').forEach(item => item.style.display = "none");
}

function showBottons() {
    document.querySelectorAll('.button').forEach(el => {
        el.style.display = 'block';
    });
}

function hideBottons() {
    document.querySelectorAll('.button').forEach(el => {
        el.style.display = 'none';
    });
}

function showBlock(n) {
    hideAllBlocks();
    const head = document.querySelector('.desigionsBlock');
    head.children[0].innerText = 'Task' + n;
    head.children[1].innerText = tasksText[n - 1];
    const el = document.querySelector('#block' + n);
    el.style.display = "block";
    if (currentTask === 0) {
        showBottons();
    }
    execute(n);
    currentTask = n;
}

function runButton() {
    console.log(currentTask);
    showBlock(currentTask);
}

function clearButton() {
    currentTask = 0;
    const head = document.querySelector('.desigionsBlock');
    head.children[0].innerText = '';
    head.children[1].innerText = "";
    hideAllBlocks();
    hideBottons();
}

function execute(n) {
    tasks[n - 1]();
}
initialisition();


