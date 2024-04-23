
function Character(name, health, level) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.introduce = () => {
        return `Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.\n\n`;
    }
}

function Warrior(name, health, level, weaponName, weaponStrangth) {
    Character.call(this, name, health, level);
    this.weaponName = weaponName;
    this.weaponStrangth = weaponStrangth;
    this.attack = () => {
        return `Attack with ${this.weaponName}`;
    }
}

function Wizard(name, health, level, spellName, spellStrangth) {
    Character.call(this, name, health, level);
    this.spell = spellName;
    this.spellStrangth = spellStrangth;
    this.castSpell = () => {
        return `Magic spell: ${this.spell}`;
    }
}

let unit1;
let unit2;

const spells = ['Lightning', 'Fire'];
const weapons = ['Sword', 'Ax'];

function createWizard() {
    const level = Math.floor(Math.random() * 10) + 1;
    const spell = Math.floor(Math.random() * 2) + 1;
    return new Wizard('Wizard', 80, level, spells[spell - 1], spell + 1);
}

function createWarrior() {
    const level = Math.floor(Math.random() * 10) + 1;
    const weapon = Math.floor(Math.random() * 2) + 1;
    return new Warrior('Warrior', 100, level, weapons[weapon - 1], weapon);
}

function start() {
    document.getElementById('butleInfo').innerText='';
    unit1 = createWizard();
    unit2 = createWarrior();
    document.getElementById('wizHealth').innerText = unit1.health;
    document.getElementById('warHealth').innerText = unit2.health;
    if (Math.floor(Math.random() * 2) + 1 == 1) {
        addInfo(`First attack by ${unit1.name}\n\n`);
        setButtonEnsabled('wizAttack');
        setButtonDisabled('warAttack');
    } else {
        addInfo(`First attack by ${unit2.name}\n\n`);
        setButtonEnsabled('warAttack');
        setButtonDisabled('wizAttack');
    }
}

function setButtonDisabled(id) {
    document.getElementById(id).disabled = true;
    document.getElementById(id).style.cursor = 'default';
}

function setButtonEnsabled(id) {
    document.getElementById(id).disabled = false;
    document.getElementById(id).style.cursor = 'pointer';
}

function warAttack() {
    const luck = Math.floor(Math.random() * 3) + 1;
    const damage = unit2.level * unit2.weaponStrangth * luck;
    setButtonDisabled('warAttack');
    addInfo(`${unit2.attack()} Damage - ${damage}\n\n`);
    if (unit1.health - damage > 0) {
        setButtonEnsabled('wizAttack');
        unit1.health = unit1.health - damage;
        document.getElementById('wizHealth').innerText = unit1.health;
    } else {
        document.getElementById('wizHealth').innerText = 0;
        setButtonDisabled('wizAttack');
        addInfo(`${unit2.name} WIN!\n\n`);
    }
}

function addInfo(info) {
    infoDiv = document.getElementById('butleInfo');
    infoDiv.innerText += info;
    infoDiv.scrollTop = 9999;
}

function wizAttack() {
    const luck = Math.floor(Math.random() * 3) + 1;
    const damage = unit1.level * unit1.spellStrangth * luck;
    setButtonDisabled('wizAttack');
    addInfo(`${unit1.castSpell()}. Damage - ${damage}\n\n`);
    if (unit2.health - damage > 0) {
        setButtonEnsabled('warAttack');
        unit2.health = unit2.health - damage;
        document.getElementById('warHealth').innerText = unit2.health;
    } else {
        document.getElementById('warHealth').innerText = 0;
        setButtonDisabled('warAttack');
        addInfo(`${unit1.name} WIN!\n\n`);
    }
}

function initialisation() {
    document.getElementById('footer').innerText = new Date().getFullYear();
    document.querySelectorAll('.getInfo').forEach(element => {
        element.addEventListener('click', function (e) {
            if (e.target.dataset.unti === '1') {
                addInfo(unit1.introduce());
            } else {
                addInfo(unit2.introduce());
            }
        });
    });
    document.getElementById('warAttack').addEventListener('click', warAttack);
    document.getElementById('wizAttack').addEventListener('click', wizAttack);
    document.getElementById('newGame').addEventListener('click', start);
}

initialisation();
start();
