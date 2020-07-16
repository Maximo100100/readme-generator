// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

// this is important for later
const generateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${aboutText}</p>
    </section>
  `;
};

module.exports = generateMarkdown;
