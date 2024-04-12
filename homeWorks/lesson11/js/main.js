const tasksText = ["There is an array of strings. Output each line into a div and put the div to the document",
    "The page has a div with text and an 'ok' button, make the color of the text red when button clicked",
     "Make a button that adds cards to the page. Each card has a title, text and picture"];
const tasks = avctivate();
let currentTask=0;

document.getElementById('footer').innerText = new Date().getFullYear();

function hideAllBlocks() {
    document.getElementsByClassName('block1')[0].style.display = "none";
    document.getElementsByClassName('block2')[0].style.display = 'none';
    document.getElementsByClassName('block3')[0].style.display = 'none';
}
function showBottons(){
    document.querySelectorAll('.button').forEach(el=>{
        el.style.display='block';
    });
}
function showBlock(n) {
    hideAllBlocks();
    const head = document.querySelector('.desigionsBlock');
    head.children[0].innerText = 'Task' + n;
    head.children[1].innerText = tasksText[n - 1];
    const el = document.querySelector('.block' + n);
    el.style.display = "block";
    if(currentTask === 0){
        showBottons();
    }
    clearBlock(el);
    execute(n, el);
    currentTask=n;
}
function runButton(){
    showBlock(currentTask);
}
function clearButton(){
    const el=document.querySelector('.block' + currentTask);
    clearBlock(el);
}
function clearBlock(el) {
    el.innerHTML = '';
}

function execute(n, el) {
    tasks[n - 1](el);
}


