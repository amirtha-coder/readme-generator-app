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

// prompt questions
const init = async () => {
  // prompt questions to get answers
  const readMEGenerate = [];
  const {
    title,
    description,
    installation,
    usage,
    license,
    contributions,
    tests,
    email,
    username,
  } = await inquirer.prompt(questions);

  readMEGenerate.push({
    title,
    description,
    installation,
    usage,
    license,
    contributions,
    tests,
    email,
    username,
  });
  console.log(readMEGenerate);

  const readME = `#${readMEGenerate[0].title}![MIT](https://img.shields.io/badge/${readMEGenerate[0].license}-License-green)

## Contents Table

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Description

${readMEGenerate[0].description} 

## Installation

Please follow the instructions below:
${readMEGenerate[0].installation} 


## Usage

Please follow the instructions below:

${readMEGenerate[0].usage} 

## License

 ${readMEGenerate[0].license} License

## Contributions

${readMEGenerate[0].contributions}
## Tests

Please follow the instructions below:
${readMEGenerate[0].tests}


## Questions

- Please contact me on my email: ${readMEGenerate[0].email}

- Visit my GitHub profile [here](https://github.com/${readMEGenerate[0].username})
`;

  fs.writeFileSync("GENERATED_README.md", readME);
};

init();
