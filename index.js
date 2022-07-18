// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
const inquirer = require('inquirer')
const Employee = require('./lib/employee')
const fs = require('fs');
const manager = [
    {
        type: 'input',
        message: `What is the team manager's name?`,
        name: 'name',
        default: 'Will',
        validate: (answer) => {
            if(answer === '') {
                return `Please enter a name for the manager`
            }
            return true;
        }
    },
    {
        type:'input',
        message:`What is your manager's id number`,
        name:'employeeId',
        default: 456,
        validate: (answer) => {
            if(isNaN(answer)) {
                return `Please enter a valid number:`
            }
            return true;
        }
    },
    {
        type:'input',
        message:`What is your team manager's email address?`,
        name:'email',
        default: 'billyboi@aol.com',
        validate: (answer) => {
            if(answer === '') {
                return `Please enter a valid email address`
            }
            return true;
        }
    }
]

function initialPrompt() {
inquirer.prompt(manager).then(answers => {

        const employee1 = new Employee(answers.name,answers.employeeId, answers.email)
        console.log(employee1)
        console.log(`this is ${employee1.name} with the ID: ${employee1.id} they can be reached at, ${employee1.email}`);
        // cont();
    })
}

// function cont() {
//     inquirer.prompt({
//         type:'list',
//         message:'Add and engineer, Intern or Finish building your team?',
//         name:'roles',
//         choices: ['Engineer','Intern','All Done']
//     }).then(answer => {
//         console.log(JSON.stringify(answer.name))
//         if(answer.name === 'Engineer') {
//             console.log('test')

//         } else if(answer === 'Intern') {

//         } else {

//         }

//     })
    
}

initialPrompt();