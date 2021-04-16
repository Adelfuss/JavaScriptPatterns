class Server {
    constructor(ip,port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`;
    }
}

// дана функція - це декоратор
// декоратор - приймає екземпляр класа, робить над екземпляром класа певні маніпуляції, та вертає даний екземпляр назад.
function aws(server) {
    server.isAWS = true;
    server.awsInfo = function() {
        return server.url;
    }
    return server;
}

// другий декоратор.
function azure(server) {
    server.isAzure = true;
    server.port += 500;
    return server;
}

const s1 = aws(new Server('12.34.5.34', 8080));
console.log(s1.awsInfo());

const s2 = azure(new Server('96.33.53.5',1000));
console.log(s2.url);