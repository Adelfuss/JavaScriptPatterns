// singeltone потрібно тоді, коли нам у приложении потрібно створити тільки один екземпляр певного класа.

class Database {
    constructor(data) {
        // обявлення статичних полей в класі.
        if (Database.exists) {
            return Database.instance;
        }
        Database.instance = this;
        Database.exists = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const mongo = new Database('MongoDB');
console.log(mongo.getData());

// верне знову MongoDB - тобто ми не можемо створити кількість екземплярів даного класу в коді не більше чим один.
const mysql = new Database('MySQL');
console.log(mysql.getData());

