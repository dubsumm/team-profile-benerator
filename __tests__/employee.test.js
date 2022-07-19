const Employee = require('../lib/employee');

describe('Employee Attributes', () => {
    it('should return an obj containing name, id, and email', () => {
        const obj = new Employee('will', 456, 'w.b.summerlin@gmail.com');
        
        expect(obj.name).toEqual('will');
        expect(obj.id).toEqual(456);
        expect(obj.email).toEqual('w.b.summerlin@gmail.com')
    })
})

describe('Employee Methods', () => {
    it('should return an object containing name, id, and email', () => {
        const emp = new Employee ('will', 456, 'w.b.summerlin@gmail.com');

        expect(emp.getName()).toEqual('will');
        expect(emp.getId()).toEqual(456);
        expect(emp.getEmail()).toEqual('w.b.summerlin@gmail.com');
        expect(emp.getRole()).toEqual('Employee');
    })
})