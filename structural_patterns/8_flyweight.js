// зазвичай використовується для оптимізації роботи додатку. 
// завдяки даному паттерну - можна реалізовувати класи кешування певних даних.

class Car {
    constructor(model,price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    create(model,price) {
        const candadate = this.getCar(model);
        if (candadate) {
            return candadate;
        }
        const newCar = new Car(model,price);
        this.cars.push(newCar);
        return newCar;
    }

    getCar(model) {
        return this.cars.find(car => car.model === model);
    }
}

const factory = new CarFactory();

const bmw6 = factory.create('bmw',1000); // bmw - закиширований, тепер при наступному створенні bmw - ми отримаємо дані з кеша. І нового обекта зберігатися не буде.
const audi = factory.create('audi',12000);
const bmw3 = factory.create('bmw',8000);
console.log(bmw6);
console.log(audi);
console.log(bmw3);