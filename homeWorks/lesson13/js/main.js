let positiv = true;
let point = false;
let firstArg = null;
let secondArg = null;
let actionPressed = false;
let actionArg = null;

function intitialisiton() {
    document.getElementById('footer').innerText = new Date().getFullYear();
    
    document.querySelectorAll('.number').forEach(
        x => {
            x.addEventListener('click', function () {
                numberPress(x);
            });
        }
    );

    document.getElementById('clear').addEventListener('click', clear);

    document.getElementById('del').addEventListener('click', del);

    document.getElementById('change').addEventListener('click', change);

    document.getElementById('point').addEventListener('click', pointF);

    document.getElementById('equals').addEventListener('click', equals);

    document.querySelectorAll('.action').forEach(
        x => {
            x.addEventListener('click', function () {
                actionPress(x);
            });
        }
    );
}

function equals() {
    if (actionPressed === false || actionArg === null) {
        document.getElementById('result').innerText = document.getElementById('screen').value;
    } else {
        secondArg = (Number)(document.getElementById('screen').value);
        document.getElementById('result').innerText = firstArg.toLocaleString('ru') + " " +
            actionArg + " " + secondArg.toLocaleString('ru') + " = "+calculate().toLocaleString('ru');
    }
    clearData();
}

function actionPress(e) {

    if (firstArg === null) {
        actionPressed = true;
        firstArg = (Number)(document.getElementById('screen').value);
        document.getElementById('screen').value = '0';
        point=false;
        positiv=true;
    }
    actionArg = e.innerText;
    document.getElementById('result').innerText = firstArg.toLocaleString('ru') + " " + e.innerText;
}

function pointF() {
    if (!point) {
        point = true;
        document.getElementById('screen').value += '.';

    }
}

function clear() {
    document.getElementById('result').innerText = "";
    clearData();
}

function clearData() {
    document.getElementById('screen').value = "0";
    firstArg = null;
    secondArg = null;
    point = false;
    positiv = true;
    actionPressed = false;
    actionArg = null;
}

function change() {
    if (document.getElementById('screen').value !== "0") {
        if (positiv) {
            document.getElementById('screen').value = "-" +
                document.getElementById('screen').value;
            positiv = false;
        } else {
            let num = document.getElementById('screen').value;
            document.getElementById('screen').value =
                num.substr(1, num.length);
            positiv = true;
        }
    }
}

function del() {
    let num = document.getElementById('screen').value;

    if (num[num.length - 1] === '.') {
        point = false;
    }

    if (num.length > 1) {
        document.getElementById('screen').value = num.substr(0, num.length - 1);
    } else {
        document.getElementById('screen').value = '0';
    }

    if(document.getElementById('screen').value === '-'){
        document.getElementById('screen').value = '0';
        positiv = true;
    }
}

function numberPress(e) {
    if (document.getElementById('screen').value === '0') {
        document.getElementById('screen').value = e.innerText;
    } else {
        document.getElementById('screen').value += e.innerText;
    }
    if (firstArg == null){
        document.getElementById('result').innerText = "";
    }
}

function calculate(){
    switch(actionArg){
        case '+':
            return firstArg + secondArg;
        case '-':
            return firstArg - secondArg;
        case '*':
            return firstArg * secondArg;    
        case '/':
            if(secondArg === 0){
                return "Error - zero deviding";
            }else{
                return firstArg / secondArg;
            }    
    } 
}

intitialisiton();