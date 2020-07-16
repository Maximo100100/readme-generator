const inquirer = require('inquirer');

const promptUser = () => {
    console.log(`
==========================================================
Answer the questions to generate your professional readme.
==========================================================
`);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter a title for your project.');
              return false;
            }
          }
      },
      {
        type: 'confirm',
        name: 'confirmDes',
        message: 'Would you like to enter a description of your project',
        default: true
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of your project:',
        when: ({ confirmDes }) => confirmDes
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'confirm',
        name: 'another',
        message: 'Would you like to make another Readme?',
        default: false
      }
    ]);
  };

promptUser()
    .then(answers => console.log(answers))


// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
