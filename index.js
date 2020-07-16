const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generatePage = require('./utils/generateMarkdown.js');


const promptUser = data => {
    console.log(`
==========================================================
Answer the questions to generate your professional readme.
==========================================================
`);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: TitleInput => {
            if (TitleInput) {
              return true;
            } else {
              console.log('Please enter a title for your project.');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information for your project:'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines for your project:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter testing information for your project:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['Unlicensed', 'MIT', 'GNU GPLv3', 'GNU AGPLv3']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github username for the question section:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your Email for the question section:',
      },
      {
        type: 'input',
        name: 'live',
        message: 'Provide a live link for your project:',
      }
    ])
  };

promptUser()
    .then(readmeData => {
      console.log(readmeData);
      fs.writeFile('./Readme.md', generatePage(readmeData), err => {
        if (err) throw new Error(err);
      })
    });
