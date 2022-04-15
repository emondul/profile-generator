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

    addEmployee() {
        inquirer
        .prompt([
            {
                type: "list",
                name: "nextMove",
                choices: ["Engineer", "Intern", "Quit"],
                message: "Who do you want to add?"
            },
        ])
        .then((data) => {
            if (data.nextMove === "Engineer"){
                inquirer 
                .prompt([
                    {
                        type: "input",
                        name: "engineer",
                        message: "What is the engineers name?"
                    },
                    {
                        type: "input",
                        name: "employeeId",
                        message: "What is the engineers employee id?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the engineers email?"
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is the engineers Github username?"
                    },
        
                ]) 
                .then((data) => {
                    const engineer = new Engineer (data.engineer, data.employeeId, data.email, data.github);
                    company.push(generateEmployeeCard(engineer));
                    this.addEmployee();
                })
            } else if (data.nextMove === "Intern"){
                inquirer 
                .prompt([
                    {
                        type: "input",
                        name: "intern",
                        message: "What is the interns name?"
                    },
                    {
                        type: "input",
                        name: "employeeId",
                        message: "What is the interns employee id?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the interns email?"
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "What school does the intern attend?"
                    },
        
                ]) 
                .then((data) => {
                    const intern = new Intern (data.intern, data.employeeId, data.email, data.school);
                    company.push(generateEmployeeCard(intern));
                    this.addEmployee();
                })
            } else {
                fs.writeFile("./dist/index.html", generateHtml(company), (err) =>
                err ? console.error(err) : console.log('Success!')
                );
            }
        })
    }
}
module.exports = Generator;