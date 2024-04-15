const tasksText = ["Create a form consisting of login, password and repeat password and submit buttons. When you click on the send button, a check is made - if the password and repeat the password are the same - then the user receives a message: the data has been sent otherwise the message password and repeat password do not match is displayed.",
    "Write a quadratic equation calculator (discriminant and roots) the user enters three variables a, b, c and the answer is displayed to him in x1 and x2 in any form."];
const tasks = avctivate();
let currentTask=0;

document.getElementById('footer').innerText = new Date().getFullYear();

function hideAllBlocks() {
    document.getElementsByClassName('block1')[0].style.display = "none";
    document.getElementsByClassName('block2')[0].style.display = 'none';
}
function showBottons(){
    document.querySelectorAll('.button').forEach(el=>{
        el.style.display='block';
    });
}
function hideBottons(){
    document.querySelectorAll('.button').forEach(el=>{
        el.style.display='none';
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
    execute(n);
    currentTask=n;
}
function runButton(){
    console.log(currentTask);
    showBlock(currentTask);
}

function clearButton() {
    currentTask=0;
    const head = document.querySelector('.desigionsBlock');
    head.children[0].innerText = '';
    head.children[1].innerText = "";
    hideAllBlocks();
    hideBottons();
}

function execute(n) {
    tasks[n - 1]();
}


