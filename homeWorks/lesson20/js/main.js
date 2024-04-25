
let timer = 60;
let maxTimer = 60;
let interval;
let inProgres = false;


function startTimer() {
    stopTimer();
    showTimer(timer);
    inProgres = true;
    interval = setInterval(() => {
        if (timer === 0) {
            clearInterval(interval);
        } else {
            timer--;
            showTimer(timer);
        }
    }, 1000);
}

function showTimer(timer) {
    const timerElement = document.getElementById('timer');
    if (timer < 10) {
        timerElement.style = 'fill: red';
        timerElement.x.baseVal[0].value = 56;
    } else {
        timerElement.x.baseVal[0].value = 30;
        timerElement.style = 'fill: #2083df';
    }
    let timerPercent = 0;
    if (maxTimer > 0) {
        timerPercent = Math.round(timer / maxTimer * 440);
    }
    timerElement.textContent = timer;
    document.getElementById('circle').style = `stroke-dasharray:${timerPercent}px 440px;`;
}

function stopTimer() {
    if (inProgres) {
        inProgres = false;
        clearInterval(interval);
    }
}

function initialisation() {
    document.getElementById('footer').innerText = new Date().getFullYear();

    document.querySelector('#setTimer').addEventListener('click', () => {
        const maxTime = document.querySelector('#maxTimer').value;
        timer = +maxTime;
        maxTimer = timer;
        startTimer();
    });

    document.querySelector('#maxTimer').addEventListener('keydown', (e) => {
        if (e.keyCode !== 8) {
            if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    });

    document.querySelector('#maxTimer').addEventListener('keyup', (e) => {
        if (e.target.value.length > 2) {
            e.target.value = '99';
        }
    });

    document.querySelector('#start').addEventListener('click', () => {
        if (!inProgres) {
            startTimer();
        }
    });

    document.querySelector('#stop').addEventListener('click', () => {
        stopTimer();
    })
}

initialisation();
startTimer();

