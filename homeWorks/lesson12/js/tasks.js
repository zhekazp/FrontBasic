//task1
function butEventInitT1() {
    const form = document.forms[0];

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors(form);

        if (checkForm(form)) {
            modalOk();
            form.reset();
        }
    });
}
function task1() {
    document.forms[0].reset();
    clearErrors();
}

function clearErrors() {
    document.getElementById('err1').innerText = "";
    document.getElementById('err2').innerText = "";
    document.getElementById('err3').innerText = "";
}
function checkForm(form) {
    let test = true;
    if (!lenghtError(form.login.value)) {
        test = false;
        document.getElementById('err1').innerText = "Login length form 3 to 15 letters";
    }

    if (!lenghtError(form.password.value)) {
        test = false;
        document.getElementById('err2').innerText = "Password length form 3 to 15 letters";
    }

    if (form.password.value !== form.passConfirm.value) {
        test = false;
        document.getElementById('err3').innerText = "Passwords are not equal";
    }

    return test;
}

function lenghtError(val) {
    if (val.length < 3 || val.length > 15) {
        return false;
    }
    return true;
}

function modalOk() {
    modal("Info sended succesfuly!", true);
    document.forms[0].reset();
}

//task2

function task2() {
    clearInputs();
}

function clearInputs() {
    document.querySelectorAll('.math').forEach(element => {
        element.value = '';
    });

    clearResults();
}

function clearResults() {
    document.querySelectorAll('.result').forEach(element => {
        element.value = '';
    });
}

const params = [];

function checkElements() {
    params.length = 0;
    document.querySelectorAll('.math').forEach(element => {
        params.push(element.value);
        if (element.value === '' || isNaN(Number(element.value))) {
            document.getElementById('err4').innerText = "All elements must be numbers";
            return false;
        }
    });

    return true;
}

function calculate() {
    clearResults();

    let d = params[1] * params[1] - 4 * params[0] * params[2];
    if (d < 0) {
        modal("Discriminant D < 0, therefore the equation has no real roots", false);
    } else {
        d = Math.sqrt(d);
        const res1 = (-params[1] + d) / (2 * params[0]);
        const res2 = (-params[1] - d) / (2 * params[0]);
        const results = document.querySelectorAll('.result');
        results[0].value = res1;
        results[1].value = res2;
    }
}

function elementsEventInitT2() {
    document.getElementById('calculate').addEventListener('click', function () {
        if (checkElements()) {
            calculate();
        }
    }
    );

    document.querySelectorAll('.math').forEach(el => {

        el.addEventListener('focus', function () {
            document.getElementById('err4').innerText = "";
        });

        el.addEventListener('keydown', function (e) {
            if (e.key === ' ') {
                e.preventDefault();
            }
        });

        el.addEventListener('input', function () {
            if (this.value !== '' && isNaN(Number(this.value))) {
                document.getElementById('err4').innerText = "All elements must be numbers";
            } else {
                document.getElementById('err4').innerText = "";
            }
        });
    });
}

//Initialisition
const functions = [task1, task2];

function avctivate() {
    butEventInitT1();
    elementsEventInitT2();
    return functions;
}

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
    if (setTimer) {
        timer = setTimeout(() => {
            removeModal();
        }, "5000");
    }
}