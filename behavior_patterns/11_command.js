// тобто ми створюємо клас Command, через який ми будемо визивати методи певних обектів. І додавати певну проміжну логіку(приклад метод, який буде виводити інформацію про виконані команди), яка звязана з виконанням даних методів(функціоналу інших обектів) через команди Command класа.

class MyMath {
    constructor(initialValue = 0) {
        this.number = initialValue;
    }

    square() {
        return this.number ** 2;
    }

    cube() {
        return this.number ** 3;
    }
}


class Command {
    constructor(subject) {
        this.subject = subject;
        this.commandsExecuted = [];
    }

    execute(command) {
        this.commandsExecuted.push(command);
        return this.subject[command]();
    }
}

const x = new Command(new MyMath(2));
console.log(x.execute('square'));
console.log(x.execute('cube'));