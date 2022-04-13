const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

const inquirer = require("inquirer");
const fs = require("fs");

const {generateHtml} = require('../htmlTemp');
const {generateEmployeeCard} = require('../card');

let company = [];

class Generator {
    constructor() {

    }

    run() {
        inquirer 
        .prompt([
            {
                type: "input",
                name: "manager",
                message: "What is the managers name?"
            },
            {
                type: "input",
                name: "employeeId",
                message: "What is the managers employee id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the managers email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the managers office number?"
            },

        ]) 
        .then((data) => {
            const manager = new Manager (data.manager, data.employeeId, data.email, data.officeNumber);
            company.push(generateEmployeeCard(manager));
            this.addEmployee();
        })
    }
        
}
