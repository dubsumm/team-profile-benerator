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
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
const team = [];
const manager = [
    {
        type: 'input',
        message: `What is the team manager's name?`,
        name: 'name',
        default: 'Jill',
        validate: (answer) => {
            if(answer === '') {
                return `Please enter a name for the manager`
            }
            return true;
        }
    },
    {
        type:'input',
        message:`What is the manager's id number`,
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
        message:`What is the team manager's email address?`,
        name:'email',
        default: 'JillyJoi@aol.com',
        validate: (answer) => {
            if(answer === '') {
                return `Please enter a valid email address`
            }
            return true;
        }
    },
    {
        type:'input',
        message:`What is the team manager's office number?`,
        name:'office',
        default: '2',
        validate: (answer) => {
            if(isNaN(answer)) {
                return `Please enter a valid number:`
            }
            return true;
        }
    }
]
const engineer = [
    {
        type: 'input',
        message: `What is the engineer's name?`,
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
        message:`What is the engineer's id number`,
        name:'employeeId',
        default: 602,
        validate: (answer) => {
            if(isNaN(answer)) {
                return `Please enter a valid number:`
            }
            return true;
        }
    },
    {
        type:'input',
        message:`What is the engineer's email address?`,
        name:'email',
        default: 'WillyWoi@aol.com',
        validate: (answer) => {
            if(answer === '') {
                return `Please enter a valid email address`
            }
            return true;
        }
    },
    {
        type:'input',
        message:`What is the engineer's GIthub username?`,
        name:'gitUser',
        default: 'dubsumm',
         
        validate: (answer) => {
            if(answer === '') {
                return `Please enter a valid email address`
            }
            return true;
        },
        filter(val) {return `https://github.com/${val}`}
    }
]
const intern = [
    {
        type: 'input',
        message: `What is the engineer's name?`,
        name: 'name',
        default: 'Bill',
        validate: (answer) => {
            if(answer === '') {
                return `Please enter a name for the manager`
            }
            return true;
        }
    },
    {
        type:'input',
        message:`What is the engineer's id number`,
        name:'employeeId',
        default: 8003,
        validate: (answer) => {
            if(isNaN(answer)) {
                return `Please enter a valid number:`
            }
            return true;
        }
    },
    {
        type:'input',
        message:`What is the engineer's email address?`,
        name:'email',
        default: 'billyboi@aol.com',
        validate: (answer) => {
            if(answer === '') {
                return `Please enter a valid email address`
            }
            return true;
        }
    },
    {
        type:'input',
        message:`What is the intern's School?`,
        name:'school',
        default: 'Mercer U',
         
        validate: (answer) => {
            if(answer === '') {
                return `Please enter a valid School name.`
            }
            return true;
        },
    }
]

const newManager = () => {  //takes answers classes them as manager object pushes them to team array
inquirer.prompt(manager).then(answers => {

        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.office);
        // console.log(manager1)
        console.log(`Let's build the rest of the team\n`);
        team.push(manager);
        console.log(team);
        cont();
    })
}


const newEngineer = () => {  //takes answers classes them as engineer object pushes them to team array
    inquirer.prompt(engineer).then(answers => {
        let engineer1 = new Engineer(answers.name, answers.employeeId, answers.email, answers.gitUser);
        console.log(`Let's build the rest of the team\n`);
        team.push(engineer1);
        cont();
    })
}

const newIntern = () => {   //takes answers classes them as intern object pushes them to team array
    inquirer.prompt(intern).then(answers => {
        let intern1 = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        console.log(intern1)
        console.log(`Let's build the rest of the team\n`);
        team.push(intern1);
        console.log(team);
        cont();
    })
}

const cont = () => {
    console.log(`______________________________________________________\n`)
    inquirer.prompt({
        type:'list',
        message:'Add and engineer, Intern or Finish?',
        name:'role',
        choices: ['Engineer','Intern','All Done']
    }).then(answer => {
        if(answer.role === 'Engineer') {
            newEngineer();
        } else if(answer.role === 'Intern') {
            newIntern();
        } else {
            console.log('Bag secured')
            console.log(team);
            writeHTML();
        }

    })
}

function manCard(manager) {
    return `
      <div class="card m-5" style="width: 20rem;">
        <div class="bg-primary text-white" >
          <h5 class="card-title m-2">${manager.name}</h5>
          <h5 class="card-text m-2">Manager</h5>
        </div>
        <ul class="list-group">
          <li class="list-group-item">id: ${manager.id}</li>
          <li class="list-group-item">email: ${manager.email}</li>
          <li class="list-group-item">office number: ${manager.officeNum}</li>
        </ul>
      </div>`
  };
  
  function cards(role) {
    switch (role.getRole()) {
      case "Engineer":
        return `
          <div class="card m-4" style="width: 20rem;">
            <div class="bg-info text-white" >
              <h5 class="card-title m-2">${role.name}</h5>
              <h5 class="card-text m-2">Engineer</h5>
            </div>
            <ul class="list-group">
              <li class="list-group-item">id: ${role.id}</li>
              <li class="list-group-item">email: ${role.email}</li>
              <li class="list-group-item">github: ${role.gitUser}</li>
            </ul>
          </div>`;
  
      case "Intern" :
        return `
        <div class="card m-4" style="width: 20rem;">
          <div class="bg-success text-white" >
            <h5 class="card-title m-2">${role.name}</h5>
            <h5 class="card-text m-2">Intern</h5>
          </div>
          <ul class="list-group">
            <li class="list-group-item">id: ${role.id}</li>
            <li class="list-group-item">email: ${role.email}</li>
            <li class="list-group-item">school: ${role.school}</li>
          </ul>
        </div>`;
    }  
  }
  
  function makeHTML () {
  return`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=1, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Team Profile</title>
</head>
<body style="background-color: rgb(34, 51, 207);">
    <div class="jumbotron jumbotron-fluid p-5" style="background-color: rgb(34, 51, 207); height: 20vh">
        <h2 class="display-5 text-center" style="color:white">The Team</h2>
    </div>
    <div class="d-flex flex-wrap justify-content-around mt-3" style="background-color: rgb(171, 170, 170) ;">
      ${manCard(team[0])}
      </div>
    <div class="d-flex flex-wrap justify-content-around mt-3" style="background-color: rgb(171, 170, 170) ;">
      ${createCards()}
    </div>
  </body>
  </html>`;
  }
  
  function createCards() {
    let allCards = cards(team[1]);
    for (let i = 1; i < team.length; i++) {
      allCards = allCards + cards(team[i]);
    }
    // console.log(allCards)
    return allCards;
  }

  const writeHTML = function() {
    const newHTML = makeHTML(cards)
    fs.writeFile('./dist/index.html', newHTML, (error) => 
    error ? console.log(error) : console.log('The HTML is generated check out the dist/ folder')
    );
  };
  
newManager(); //runs from the start