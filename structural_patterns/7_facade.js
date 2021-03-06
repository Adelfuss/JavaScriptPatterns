class Complaints {
    constructor() {
        this.complaints = [];
    }

    reply(complaint) {}

    add(complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplaints extends Complaints {
    reply({id,customer,details} = complaint) {
        return `Product: ${id}: ${customer} (${details})`;
    }
}

class ServiceComplaints extends Complaints {
    reply({id,customer,details} = complaint) {
        return `Service: ${id}: ${customer} (${details})`;
    }
}

// клас - фасад
class ComplaintRegistry {
    register(customer,type,details) {
        const id = Date.now();
        let complaint;
        if (type === 'service') {
            complaint = new ServiceComplaints();
        } else {
            complaint = new ProductComplaints();
        }
        return complaint.add({id,customer,details});
    }
}

const register = new ComplaintRegistry();

console.log(register.register('Bohdan','service','недоступен'));