// Copyright (c) 2022 amirthamuthirulandi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
``;

// import inquirer
const inquirer = require("inquirer");
const fs = require("fs");

// declare questions
const questions = [
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

// prompt questions
const init = async () => {
  // prompt questions to get answers
  const readMEGenerate = [];
  const {
    description,
    installation,
    usage,
    license,
    contributions,
    email,
    username,
  } = await inquirer.prompt(questions);

  readMEGenerate.push({
    description,
    installation,
    usage,
    license,
    contributions,
    email,
    username,
  });
  console.log(readMEGenerate);

  const readME = `# PROJECT-TITLE ![MIT](https://img.shields.io/badge/MIT-License-green)

## Contents Table

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Description



## Installation

Please follow the instructions below:
${readMEGenerate.description} 


## Usage

Please follow the instructions below:



## License

MIT License

## Contributions

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

## Tests

Please follow the instructions below:


## Questions

- Please contact me on my email: myemail@email.com

- Visit my GitHub profile [here](https://github.com/amirtha-coder)
`;

  fs.writeFileSync("GENERATED_README.md", readME);
};

init();
