// паттерн конструктор - це звичайна функція конструктор або метод конструктор в класі.

// ES5 - конструктор
// function Server(name,ip) {
//     this.name = name;
//     this.ip = ip;
// }

// Server.prototype.getUrl = function() {
//     return `https://${this.api}:80`;
// }

// ES6 - конструктор
class Server {
    constructor(name,ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.api}:80`;
    }
}


const aws = new Server('AWS German', '82.21.21.32');
console.log(aws.getUrl());