const Manager = require('../lib/Manager');

describe("Manager", () => {

    describe("Initialization / Constructor", () => {
        it("Should create an object with properties name, ID, and email set to their respective arguments when called with the 'new' keyword", () => {
           
            const name = 'Emma';
            const id = '808';
            const email = 'emma@example.com';
            const officeNumber = '303'

            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);

        });

        it("Should throw an error if not provided a name value", () => {
            const cb = () => new Manager("", "808", "emma@example.com", "303");
            const err = Error(
                "Expected parameter 'name' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an id value", () => {
            const cb = () => new Manager("Emma", "", "emma@example.com", "303");
            const err = Error(
                "Expected parameter 'id' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an email value", () => {
            const cb = () => new Manager("Emma", "808", "", "303");
            const err = Error(
                "Expected parameter 'email' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an officeNumber value", () => {
            const cb = () => new Manager("Emma", "808", "emma@example.com", "");
            const err = Error(
                "Expected parameter 'Office Number' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

    });

    describe("getOfficeNumber", () => {

        it("Should return the officeNumber value of the Employee object", () => {

            const obj1 = new Manager("Emma", "808", "emma@example.com", "303");
    
            const call = obj1.getOfficeNumber();
    
            expect(call).toEqual("303");

        })

    });

    describe("getRole", () => {

        it("Should return the Role value of the Employee object", () => {

            const obj3 = new Manager("Emma", "808", "emma@example.com", "303");
    
            const call = obj3.getRole();
    
            expect(call).toEqual('Manager');

        })

    });

})