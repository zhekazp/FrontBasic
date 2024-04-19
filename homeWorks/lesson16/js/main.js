let todoItems = [
    { id: '1', date: '2024.04.17', task: 'shoping somesing to eat for a week', executed: true },
    { id: '2', date: '2024.04.18', task: 'resting', executed: false },
    { id: '3', date: '2024.04.19', task: 'playing', executed: false }
]

let curIndex = todoItems.length;
let currentID = todoItems[curIndex - 1].id;

function intitialisiton() {
    document.getElementById('footer').innerText = new Date().getFullYear();

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('executed')) {
            const paretn = e.target.parentNode;
            e.target.parentNode.innerHTML = `<span class="taskElement sp4">Executed</span>`;
            const id = e.target.dataset.execute;
            document.getElementById('task' + e.target.dataset.execute).classList.add('executedTask');
            executeTask(id);
        } else if (e.target.classList.contains('remove')) {
            const id = e.target.dataset.remove;
            removeTask(id);
        }
    });

    document.getElementById('addTask').addEventListener('click', addTask);
}

function addTask() {
    const taskText = document.getElementById('addInput').value;
    if (taskText === '') {
        modal("The task must not to be empty", timer);
    } else {
        currentID++;
        curIndex++;
        task = {
            id: currentID.toString(),
            date: getCurDate(),
            task: taskText,
            executed: false
        }
        todoItems.push(task);
        document.getElementById('task').innerHTML += createTaskHTML(task, curIndex);
        document.getElementById('addInput').value = '';
    }

}

function getCurDate() {
    const curDate = new Date;
    let month = curDate.getMonth() + 1;
    let zero=''
    if (month < 10) {
        zero = "0";
    }
    return curDate.getFullYear() + "." +zero + month + "." + curDate.getDate();
}

function executeTask(id) {
    for (task of todoItems) {
        if (id === task.id) {
            task.execute = true;
            break;
        }
    }
}

function removeTask(id) {
   curIndex--;
    todoItems = todoItems.filter(item => item.id !== id);
    showTasks(todoItems);
}

function createTaskHTML(task, index) {

    let html = ` 
        <div class='task'>
        <span class="taskElement sp1">${index + 1}</span>
        <span class="taskElement sp2">${task.date}</span>`;

    let classT = '';
    let executedEl = '';
    if (task.executed) {
        classT = 'executedTask';
        executedEl = '<span class="taskElement sp4">Executed</span>';
    } else {
        executedEl = `<div><button data-execute='${task.id}' class='executed'>Executed</button></div>`;
    }

    html += `<span id='task${task.id}' class="taskElement sp3 ${classT}">${task.task}</span>
        ${executedEl}
        <button data-remove='${task.id}' class='remove'>Remove</button>
        </div>
        `;
    return html;
}

function showTasks(tasks) {
    let html = '';
    document.getElementById('task').innerHTML = '';
    for (const [index, task] of tasks.entries()) {
        html += createTaskHTML(task, index);
        curIndex = index;
    }
    document.getElementById('task').innerHTML = html;
}

showTasks(todoItems);
intitialisiton();

//modal window

function removeModal() {
    const modal = document.getElementById('modalDialog');
    modal.removeEventListener('click', removeModal)
    modal.remove();
    clearTimeout(timer);
}

let timer;

function modal(message, setTimer) {
    const back = document.createElement('div');
    back.classList = 'modalBack';
    back.id = 'modalDialog';
    document.body.appendChild(back);

    const modal = document.createElement('div');
    modal.classList = 'modal';
    back.appendChild(modal);

    const info = document.createElement('h3');
    info.innerText = message;
    modal.appendChild(info);

    const button = document.createElement('button');
    modal.appendChild(button);
    button.innerText = "OK";
    button.classList.add('butOK');
    button.addEventListener("click", removeModal);
    timer = setTimeout(() => {
           if(timer){removeModal();}
        }, "4000");
    
}
