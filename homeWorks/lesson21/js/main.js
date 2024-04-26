function initialisation() {
    document.getElementById('footer').textContent = new Date().getFullYear();

    document.getElementById('calculate').addEventListener('click', (e) => calculate(e.target));

    document.getElementById('number').addEventListener('input', () => {
        document.getElementById('condition').textContent = '';
        document.getElementById('answer').textContent = '';
    });
}

function calculate(el) {
    const promice = new Promise((resolve, reject) => {
        document.getElementById('answer').textContent = '';

        const input = document.getElementById('number');
        const number = parseInt(input.value);

        document.getElementById('condition').textContent =
            `of multiplication '${input.value === '' ? 'Empty string' : input.value}' by 2 is`;

        input.value = '';

        startSpiner(el);

        setTimeout(() => {
            if (!isNaN(number)) {
                resolve(number * 2);
                stopSpiner(el);
            } else {
                stopSpiner(el);
                reject('Error: You entered not a numbr');
            }
        }
            , 5000);
    });

    promice.then((data) => {
        document.getElementById('answer').textContent = data.toLocaleString('ru');
    }).catch((data) => {
        document.getElementById('condition').textContent = '';
        showModal(data);
    });;
}

function startSpiner(el) {
    el.disabled = true;
    el.innerHTML = `
        <span class="spinner-border spinner-border-sm" aria-hidden="true">
        </span>
        <span role="status">
            Loading...
        </span>`;
    document.getElementById('number').disabled = true;
}

function stopSpiner(el) {
    el.disabled = false;
    el.innerHTML = `Culculate`;
    document.getElementById('number').disabled = false;
}

function removeModal() {
    const modal = document.getElementById('modalDialog');
    modal.removeEventListener('click', removeModal)
    modal.remove();
    clearTimeout(timer);
}

let timer;

function showModal(message) {
    const back = document.createElement('div');
    back.classList = 'modalBack';
    back.id = 'modalDialog';
    document.body.appendChild(back);

    const modal = document.createElement('div');
    modal.classList = 'mymodal';
    back.appendChild(modal);

    const info = document.createElement('h3');
    info.textContent = message;
    modal.appendChild(info);

    const button = document.createElement('button');
    modal.appendChild(button);
    button.textContent = "OK";
    button.classList.add('butOK');
    button.addEventListener("click", removeModal);
    timer = setTimeout(() => 
    { removeModal(timer) }
    , 4000);
}

initialisation();


