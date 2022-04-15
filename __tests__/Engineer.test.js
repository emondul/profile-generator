const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    describe("Initialization / Constructor", () => {
        it("Should create an object with properties name, ID, and email set to their respective arguments when called with the 'new' keyword", () => {
            
            const name = 'emma';
            const id = '808';
            const email = 'emma@example.com';
            const github = 'emmam'

            const obj = new Engineer(name, id, email, github);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);

        });

        it("Should throw an error if not provided a name value", () => {
            const cb = () => new Engineer("", "808", "emma@example.com", "emmam");
            const err = Error(
                "Expected parameter 'name' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an id value", () => {
            const cb = () => new Engineer("Emma", "", "emma@example.com", "emmam");
            const err = Error(
                "Expected parameter 'id' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an email value", () => {
            const cb = () => new Engineer("Emma", "808", "", "emmam");
            const err = Error(
                "Expected parameter 'email' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided a github value", () => {
            const cb = () => new Engineer("Emma", "808", "emma@example.com", "");
            const err = Error(
                "Expected parameter 'github' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

    });

    describe("getGithub", () => {

        it("Should return the github value of the Employee object", () => {

            const obj1 = new Engineer("Emma", "808", "emma@example.com", "emmam");
    
            const call = obj1.getGithub();
    
            expect(call).toEqual("emmam");

        })

    });

    describe("getRole", () => {

        it("Should return the Role value of the Employee object", () => {

            const obj3 = new Engineer("Emma", "808", "emma@example.com", "emmam");
    
            const call = obj3.getRole();
    
            expect(call).toEqual('Engineer');

        })

    });

})