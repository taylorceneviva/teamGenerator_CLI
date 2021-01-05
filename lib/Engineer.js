// const promptEngineer = () =>
// inquirer
//   .prompt([
   
//     {
//         type: 'input',
//         message: 'What is the GitHub username?',
//         name: 'GitHubUser',
//     }
// ])


// promptEngineer()

//   .catch((error) => {
//     console.error(error);
//   })

class Engineer {
    constructor(name, id, email, GitHubUser) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.GitHubUser = GitHubUser;
        
    }

    getGithub() {
        return(`GitHubUser`);
    }

    getRole() {
        return(`Engineer`);

    }

}

module.exports = Engineer;