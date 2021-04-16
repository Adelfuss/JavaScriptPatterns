class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message,this,to);
    }

    receive(message,from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    // ось це по суті mediator звязка.
    // Тобто всі повідомлення відправляють від одного юзера до іншого через медіатор. Медіатор допомагає зменшувати звязаність між екземплярами.
    send(message, from, to) {
        if (to) {
            to.receive(message, from);
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from);
                }
            });
        }
    }
}

const u1 = new User('Bohdan');
const u2 = new User('Anton');
const u3 = new User('Sasha');

const room = new ChatRoom();
room.register(u1);
room.register(u2);
room.register(u3);

u1.send('Hello!', u2);