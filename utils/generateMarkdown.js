// function to generate markdown for README
function generateMarkdown(readmeData) {

  return `
# [${readmeData.title}](${readmeData.live})

## Description 

${readmeData.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

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

## Questions

* Email: ${readmeData.email}
* Github: www.github.com/${readmeData.github}

`;
}

module.exports = generateMarkdown;
