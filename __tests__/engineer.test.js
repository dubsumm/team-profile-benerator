const Engineer = require('../lib/engineer');
const Employee = require('../lib/employee');

describe('Engineer Attributes', () => {
    it('should return an obj containing name, id, email, and Github username', () => {
        const obj = new Engineer('will', 456, 'w.b.summerlin@gmail.com','dubsumm');
        
        expect(obj.name).toEqual('will');
        expect(obj.id).toEqual(456);
        expect(obj.email).toEqual('w.b.summerlin@gmail.com');
        expect(obj.gitUser).toEqual('dubsumm');
    })
});

describe('Engineer Methods', () => {
    it('should return an object containing name, id, email, and Github username', () => {
        const emp = new Engineer('will', 456, 'w.b.summerlin@gmail.com', 'dubsumm');

        expect(emp.getName()).toEqual('will');
        expect(emp.getId()).toEqual(456);
        expect(emp.getEmail()).toEqual('w.b.summerlin@gmail.com');
        expect(emp.getGithub()).toEqual('dubsumm');
        expect(emp.getRole()).toEqual('Engineer');
    })
});