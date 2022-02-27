const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page.template.js');
const fs = require('fs');

teamArr = []
managerArr = []

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the manger's name.",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Try again, please enter the manager's name")
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the manager's ID number.",
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log("Try again, please enter the manager's ID number.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manger's email address.",
            validate: emailInput => {
                if(emailInput) {
                    return true
                } else {
                    console.log("Try again, please enter the manager's email address")
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the manger's office number.",
            validate: numberInput => {
                if(isNaN(numberInput)) {
                    console.log("Try again, please enter the manager's number.")
                    return false;
                } else {
                    return true;
                }
            }
        },
    ])
    .then(managerData => {
        const { name, id, email, officeNumber } = managerData
        const manager = new Manager(name, id, email, officeNumber)

        teamArr.push(manager)
    })
}

const addEmployee = () => {

    console.log(`
        ==============
         Add Employee
        ==============
    `)

    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Select the employee's role.",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Please enter the employee's name.",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Try again, please enter the employee's name")
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's ID number.",
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log("Try again, please enter the employee's ID number.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email address.",
            validate: emailInput => {
                if(emailInput) {
                    return true
                } else {
                    console.log("Try again, please enter the employee's email address.")
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's GitHub username.",
            when: ({ role }) => {
                if(role === "Engineer") {
                    return true;
                } else {
                    return false;
                }
            },
            validate: githubInput => {
                if(githubInput) {
                    return true
                } else {
                    console.log("Try again please enter the engineer's GitHub username.")
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school.",
            when: ({ role }) => {
                if(role === "Intern") {
                    return true;
                } else {
                    return false;
                }
            },
            validate: githubInput => {
                if(githubInput) {
                    return true
                } else {
                    console.log("Try again, please enter the intern's school.")
                }
            }
        },
        {
            type: "confirm",
            name: "confirmInput",
            message: "Would you like to add another employee?",
            default: false
        }  
    ])
    .then(employeeData => {
        let { role, name, id, email, github, school, confirmInput} = employeeData
        let employees;
        
        if(role === "Engineer") {
            console.log(role)
            employees = new Engineer(name, id, email, github)
        } else if(role ==="Intern") {
            employees = new Intern(name, id, email, school)
        }

        teamArr.push(employeeData);

        if(confirmAdd) {
            return addEmployee(teamArr)
        } else {
            console.log(teamArr)
            return JSON.stringify(teamArr);
        }
    })
}

const writeToFile = teamArr => {
    const pageHTML = generatePage(teamArr) 
    fs.writeFile('./dist/index.html', pageHTML, err =>{
        if(err) {throw err
    } else {
        console.log("HTML file has been generated!")
       
    }
})
}

const copyFile = () => {
    fs.copyFile("./src/style.css", "./dist/style.css", err =>{
        if(err) {throw err
        } else {
            console.log("Style sheet copied successfully!")
        }
    })
}

managerQuestions()
    .then(addEmployee)
    .then(teamArr => {
        return writeToFile(teamArr)
    })
    .then(copyFile)
    .catch(err => {
        console.log(err)
    })