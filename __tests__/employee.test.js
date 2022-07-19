const Employee = require('../lib/employee');

describe('Employee', () => {
    it('should return an obj containing name, id, and email', () => {
        const obj = new Employee('will', 456, 'w.b.summerlin@gmail.com');
        
        expect(obj.name).toEqual('will');
        expect(obj.id).toEqual(456);
        expect(obj.email).toEqual('w.b.summerlin@gmail.com')
    })
})