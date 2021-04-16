class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemeberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership,
    }

    create(name,type = 'simple') {
        const Membership = MemeberFactory.list[type] || MemeberFactory.list.simple;
        const member = new Membership(name);
        member.type = type;
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }
        return member;
    }
}

const factory = new MemeberFactory();
const members = [
    factory.create('Vladilen','simple'),
    factory.create('Elena','premium'),
    factory.create('Vasilisa','standard')
];

//console.log(members);

members.forEach((member) => {
    member.define();
});