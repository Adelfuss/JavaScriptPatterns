const car = {
    wheels: 4,
    init() {
        console.log(`I have ${this.wheels} my owner ${this.owner}`);
    }
};

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Bohdan'
    }
});

carWithOwner.init();