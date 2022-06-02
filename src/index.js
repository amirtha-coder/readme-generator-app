// Copyright (c) 2022 amirthamuthirulandi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

console.log("hello from Node JS");

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
  {},
  {
    type: "input",
    message: "Please enter who has contributed",
    name: "contributions",
  },
  {},
  {},
];

// prompt questions
const init = (async) => {};
init();
