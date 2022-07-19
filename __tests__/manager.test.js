const Manager = require('../lib/manager');
const Employee = require('../lib/employee');

describe('Manager Attributes', () => {
    it('should return an obj containing name, id, email, and office number', () => {
        const obj = new Manager('will', 456, 'w.b.summerlin@gmail.com',3);
        
        expect(obj.name).toEqual('will');
        expect(obj.id).toEqual(456);
        expect(obj.email).toEqual('w.b.summerlin@gmail.com');
        expect(obj.officeNum).toEqual(3);
    })
});

describe('Manager Methods', () => {
    it('should return an object containing name, id, email, and office number', () => {
        const emp = new Manager ('will', 456, 'w.b.summerlin@gmail.com', 3);

        expect(emp.getName()).toEqual('will');
        expect(emp.getId()).toEqual(456);
        expect(emp.getEmail()).toEqual('w.b.summerlin@gmail.com');
        expect(emp.getOfficeNumber()).toEqual(3);
        expect(emp.getRole()).toEqual('Manager');
    })
});