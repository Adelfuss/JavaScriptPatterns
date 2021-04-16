class Venihle {
    travelTime() {
        return this.timeTaken;
    }
}

// первая стратегия
class Bus extends Venihle {
    constructor() {
        super();
        this.timeTaken = 10;
    }
}

// вторая стратегия
class Taxi extends Venihle {
    constructor() {
        super();
        this.timeTaken = 5;
    }
}

// третья стратегия
class Car extends Venihle {
    constructor() {
        super();
        this.timeTaken = 3;
    }
}

// клас, на основі якого ми будемо пробувати певну стратегія та отримувати результат її роботи.
class Commute {
    travel(transport) {
        return true.travelTime();
    }
}

const commute = new Commute();
commute.travel(new Taxi()); // отримуємо результат стратегії для екземпляру commute.