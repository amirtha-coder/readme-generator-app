// Copyright (c) 2022 amirthamuthirulandi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
// import inquirer
const inquirer = require("inquirer");
const fs = require("fs");

// declare questions
const questions = [
  {
    type: "input",
    message: "Please enter project name",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a description",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter how to install",
    name: "installation",
  },
  {
    type: "input",
    message: "Please enter how to use",
    name: "usage",
  },
  {
    type: "list",
    message: "Please enter your license",
    name: "license",
    choices: [
      "MIT",
      "Apache 2.0",
      "BSD 3-Clause",
      "BSD 2-Clause",
      "GNU General Public",
      "Mozilla Public 2.0",
      "Common Development and Distribution",
      "Eclipse Public version 2.0",
    ],
    default: "MIT",
  },
  {
    type: "input",
    message: "Please enter who has contributed",
    name: "contributions",
  },
  {
    type: "input",
    message: "Please enter tests",
    name: "tests",
  },
  {
    type: "input",
    message: "Please enter your email",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your username",
    name: "username",
  },
];
const getBadgeURL = (license) => {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/MIT-License-green";
    case "Apache 2.0":
      return "https://img.shields.io/badge/Apache2.0-License-green";
    case "BSD 3-Clause":
      return "https://img.shields.io/badge/BSD3-Clause-License";
    case "BSD 2-Clause":
      return "https://img.shields.io/badge/BSD2-Clause-License";
    case "GNU General Public":
      return "https://img.shields.io/badge/GNU%20General%20PublicLicense-green";
    case "Mozilla Public 2.0":
      return "https://img.shields.io/badge/Mozilla%Public%20Public%20Clause-License-green";
  }
};
// prompt questions
const init = async () => {
  // prompt questions to get answers

  const answers = await inquirer.prompt(questions);

  console.log(answers);

  const readME = `# ${answers.title} ![${answers.license} badge](${getBadgeURL(
    answers.license
  )})

## Contents Table

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Description

${answers.description} 

## Installation

Please follow the instructions below:
\`\`\`
${answers.installation} 
\`\`\`

## Usage

Please follow the instructions below:
\`\`\`
${answers.usage} 
\`\`\`

## License

 ${answers.license} License

## Contributions

${answers.contributions}
## Tests

Please follow the instructions below:
\`\`\`
${answers.tests}
\`\`\`

## Questions

- Please contact me on my email: ${answers.email}

- Visit my GitHub profile [here](https://github.com/${answers.username})
`;

  fs.writeFileSync("GENERATED_README.md", readME);
};

init();
