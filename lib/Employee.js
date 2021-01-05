
// const fs = require('fs');
// const util = require('util');
// const inquirer = require('inquirer');

// const promptEmployee = () =>
// inquirer
//   .prompt([
   
//     {
//         type: 'input',
//         message: 'What is the employee name?',
//         name: 'name',
//     },
//     {
//         type: 'input',
//         message: 'What is the employee ID?',
//         name: 'id',
//     },
//     {
//         type: 'input',
//         message: 'What is the employee email?',
//         name: 'email',
//     },
//     {
//         type: 'list',
//         message: 'Choose the employee role.',
//         name: 'role',
//         choices: ['Intern', 'Engineer', 'Manager' ]
//         }
// ])


// promptEmployee()

//   .catch((error) => {
//     console.error(error);
//   })



  class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
  
  
    getName() {
        return(`${this.name}`);
    }

    getId() {
        return(`${this.id}`);
    }

    getEmail() {
        return(`${this.email}`);
    }

    getRole() {
        return (`Employee`);

    }

}

  module.exports = Employee;