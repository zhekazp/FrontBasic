
const spaceShip1 = {
    img: './img/ship1.jpg',
    name: 'Ship1',
    manufacturer: 'Space - Factory',
    crew: ['Captain', 'Pilot', 'Cook'],
    maxSpeed: 10000
}

function intitialisiton() {
    document.getElementById('footer').innerText = new Date().getFullYear();

    document.getElementById('hideButton').addEventListener('click',(e)=>{
        document.getElementById('factory').style.display='none';
        e.target.style.display='none';
    });
}

function showShip(obj) {
    const block = document.getElementsByClassName('tasksBlock')[0];

    const img = document.createElement('img');
    img.src = obj.img;
    img.alt = "spaceship";
    img.classList.add('shipImg');
    block.appendChild(img);

    const name = document.createElement('h3');
    name.innerText = obj.name;
    block.appendChild(name);

    const manufectured = document.createElement('h3');
    manufectured.innerText ="Manufectured by: "+ obj.manufacturer;
    manufectured.id = 'factory';
    block.appendChild(manufectured);

    const crew = document.createElement('h3');
    crew.innerText = 'CREW:';
    block.appendChild(crew);

    for (let i = 0; i < obj.crew.length; i++) {
        const member = document.createElement('p');
        member.innerText =obj.crew[i];
        block.appendChild(member);
    }

    const maxSpeed = document.createElement('h3');
    maxSpeed.innerText ="Max speed : "+ obj.maxSpeed.toLocaleString('ru');
    block.appendChild(maxSpeed);

    const button = document.createElement('button');
    button.innerText ="Manufectorer is a secret";
    button.id="hideButton";
    block.appendChild(button);

}

showShip(spaceShip1);
intitialisiton();