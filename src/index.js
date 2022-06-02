// Copyright (c) 2022 amirthamuthirulandi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
``;

// import inquirer
const inquirer = require("inquirer");

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
  const answers = await inquirer.prompt(questions);
  console.log(answers);
};
init();
