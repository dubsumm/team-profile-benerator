const Employee = require('./employee')

class Manager extends Employee {
    constructor() {
        super(name, id, email);
        this.officeNum = officeNum;
    }
}

module.exports = Manager;