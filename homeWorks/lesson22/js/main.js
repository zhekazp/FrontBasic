function initialisation() {
    document.getElementById('footer').textContent = new Date().getFullYear();

    document.getElementById('getFact').addEventListener('click', (e) => getFact(e.target));

}

function getFact(el) {
    startSpiner(el);

    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(fact => {
            document.getElementById('answer').textContent = fact.fact;
        }).catch(response => {
            document.getElementById('answer').textContent = '';
            showModal(response);
        }).finally(() => stopSpiner(el));
}

function startSpiner(el) {
    el.disabled = true;
    el.innerHTML = `
        <span class="spinner-border spinner-border-sm" aria-hidden="true">
        </span>
        <span role="status">
            Loading...
        </span>`;
}

function stopSpiner(el) {
    el.disabled = false;
    el.innerHTML = `Get Cat Fact`;
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
    timer = setTimeout(() => { removeModal(timer) }
        , 4000);
}

initialisation();


