const Intern = require('../lib/intern');
const Employee = require('../lib/employee');

describe('Intern Attributes', () => {
    it('should return an obj containing name, id, email, and school name', () => {
        const obj = new Intern('will', 456, 'w.b.summerlin@gmail.com','Mercer U');
        
        expect(obj.name).toEqual('will');
        expect(obj.id).toEqual(456);
        expect(obj.email).toEqual('w.b.summerlin@gmail.com');
        expect(obj.school).toEqual('Mercer U');
    })
});

describe('Intern Methods', () => {
    it('should return an object containing name, id, email, and school name', () => {
        const emp = new Intern ('will', 456, 'w.b.summerlin@gmail.com', 'Mercer U');

        expect(emp.getName()).toEqual('will');
        expect(emp.getId()).toEqual(456);
        expect(emp.getEmail()).toEqual('w.b.summerlin@gmail.com');
        expect(emp.getSchool()).toEqual('Mercer U');
        expect(emp.getRole()).toEqual('Intern');
    })
});