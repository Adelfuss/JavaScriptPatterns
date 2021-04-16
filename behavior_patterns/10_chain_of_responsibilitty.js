class MySum {
    constructor(initialValue = 42) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value;
        return this;
    }
}

const sum1 = new MySum();
// типу ось така цепочка визовів і є chain of responsibility в JavaScript
console.log(sum1.add(8).add(10));