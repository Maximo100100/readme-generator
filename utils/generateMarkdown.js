// function to generate markdown for README
function generateMarkdown(readmeData) {

// template for readme data added from readmeData object
return `
# [${readmeData.title}](${readmeData.live})  ![License](https://img.shields.io/badge/License-${readmeData.license}-Blue)

## Description 

${readmeData.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${readmeData.installation}

## Usage 

${readmeData.usage}

## Contributing

${readmeData.contribution}

## Tests

${readmeData.tests}

## License

${readmeData.license} 

To learn more about this license visit https://choosealicense.com/licenses/

## Questions

${readmeData.question}

* Email: ${readmeData.email}
* Github: www.github.com/${readmeData.github}

`;
};

// Export the function
module.exports = generateMarkdown;
