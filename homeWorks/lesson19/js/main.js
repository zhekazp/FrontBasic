class Transport {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayMainInfo() {
        return [this.brand, this.model, this.year];
    }
}

class Car extends Transport {
    constructor(brand, model, year, numDoors, isConvertible) {
        super(brand, model, year);
        this.numDoors = numDoors;
        this.isConvertible = isConvertible;
        this.type = 'car';
    }
    displayMainInfo() {
        const infoArr = super.displayMainInfo();
        infoArr.push(this.numDoors);
        infoArr.push(this.isConvertible);
        infoArr.push(this.type);
        return infoArr;
    }
}

class Motorcycle extends Transport {
    constructor(brand, model, year, numWheels, hasSideCar) {
        super(brand, model, year);
        this.numWheels = numWheels;
        this.hasSideCar = hasSideCar;
        this.type = 'moto';
    }
    displayMainInfo() {
        const infoArr = super.displayMainInfo();
        infoArr.push(this.numWheels);
        infoArr.push(this.hasSideCar);
        infoArr.push(this.type);
        return infoArr;
    }
}

const vihcle1 = new Car('Mercedes-AMG', 'GT 63 S 4-door', '2023', 4, false);
const vihcle2 = new Car('Mercedes-AMG', 'S 500 Cabriolet', '2017', 2, true);
const vihcle3 = new Motorcycle('BMW', 'S 1000 RR', '2022', 2, false);
const vihcle4 = new Motorcycle('Pannonia', '250 TLF deLuxe', '1962', 3, true);

const vihcles = [vihcle1, vihcle2, vihcle3, vihcle4];

function showInfo() {
    const currentVihle = vihcles[document.querySelector('.active').dataset.bsSlideTo];
    document.getElementById('brand').innerText = currentVihle.brand;
    document.getElementById('model').innerText = currentVihle.model;
    document.getElementById('year').innerText = currentVihle.year;

    if (currentVihle.type === 'car') {
        document.getElementById('param1').innerText = `Doors: ${currentVihle.numDoors}`;
        document.getElementById('param2').innerText = `Is convertible: ${currentVihle.isConvertible ? 'Yes' : 'No'}`;
    } else {
        document.getElementById('param1').innerText = `Wheels: ${currentVihle.numWheels}`;
        document.getElementById('param2').innerText = `Has sidecar: ${currentVihle.hasSideCar ? 'Yes' : 'No'}`;
    }
}

function initialisation() {
    document.getElementById('footer').innerText = new Date().getFullYear();
    document.querySelectorAll('.vihleInfo').forEach(item => {
        item.addEventListener('click', showInfo);
    });
}

initialisation();
showInfo();
