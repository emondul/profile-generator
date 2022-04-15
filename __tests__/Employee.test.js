const Employee = require('../lib/Employee');

describe("Employee", () => {

    describe("Initialization / Constructor", () => {
        it("Should create an object with the properties name, ID, and email when called with the 'new' keyword", () => {
          
            const name = 'Mike';
            const id = '123';
            const email = 'example@example.com';

            const obj = new Employee(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);

        });

        it("Should throw an error if not provided a name value", () => {
            const cb = () => new Employee("", "808", "emma@example.com");
            const err = Error(
                "Expected parameter 'name' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an id value", () => {
            const cb = () => new Employee("Emma", "", "emma@example.com");
            const err = Error(
                "Expected parameter 'id' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an email value", () => {
            const cb = () => new Employee("Emma", "808", "");
            const err = Error(
                "Expected parameter 'email' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

    });

    describe("getName", () => {

        it("Should return the name value of the Employee object", () => {

            const obj1 = new Employee("Emma", "808", "emma@example.com");
    
            const call = obj1.getName();
    
            expect(call).toEqual("Emma");

        })

    });

    describe("getId", () => {

        it("Should return the id value of the Employee object", () => {

            const obj2 = new Employee("Emma", "808", "emma@example.com");
    
            const call = obj2.getId();
    
            expect(call).toEqual("808");

        })

    });

    describe("getEmail", () => {

        it("Should return the email value of the Employee object", () => {

            const obj3 = new Employee("Emma", "808", "emma@example.com");
    
            const call = obj3.getEmail();
    
            expect(call).toEqual("emma@example.com");

        })

    });

    describe("getRole", () => {

        it("Should return the Role value of the Employee object", () => {

            const obj3 = new Employee("Emma", "808", "emma@example.com");
    
            const call = obj3.getRole();
    
            expect(call).toEqual('Employee');

        })

    });

})