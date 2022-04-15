const Intern = require('../lib/Intern');

describe("Intern", () => {

    describe("Initialization / Constructor", () => {
        it("Should create an object with properties name, ID, and email set to their respective arguments when called with the 'new' keyword", () => {
           
            const name = 'Emma';
            const id = '808';
            const email = 'emma@example.com';
            const school = 'uw'

            const obj = new Intern(name, id, email, school);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);

        });

        it("Should throw an error if not provided a name value", () => {
            const cb = () => new Intern("", "808", "emma@example.com", "uw");
            const err = Error(
                "Expected parameter 'name' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an id value", () => {
            const cb = () => new Intern("Emma", "", "emma@example.com", "uw");
            const err = Error(
                "Expected parameter 'id' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an email value", () => {
            const cb = () => new Intern("Emma", "808", "", "uw");
            const err = Error(
                "Expected parameter 'email' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided a school value", () => {
            const cb = () => new Intern("Emma", "808", "emma@example.com", "");
            const err = Error(
                "Expected parameter 'school' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

    });

    describe("getSchool", () => {

        it("Should return the school value of the Employee object", () => {

            const obj1 = new Intern("Emma", "808", "emma@example.com", "uw");
    
            const call = obj1.getSchool();
    
            expect(call).toEqual("uw");

        })

    });

    describe("getRole", () => {

        it("Should return the Role value of the Employee object", () => {

            const obj3 = new Intern("Emma", "808", "emma@example.com", "uw");
    
            const call = obj3.getRole();
    
            expect(call).toEqual('Intern');

        })

    });

})