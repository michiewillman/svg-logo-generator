const inquirer = require("inquirer");
const fs = require("fs");
const questions = require('./lib/questions');
const { getShape, generateSVG } = require('./Utils/generateSvg');

function validateText(answers) {
  if (answers.text.length > 3 || answers.text.length < 0) {
    console.log("Text must be between 1 and 3 characters");
    return;
  } else {
    return answers;
  }
}

// Starts application on page load/ready
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    return validateText(answers);
  })
  .then((answers) => {
    return getShape(answers);
  })
  .then((response) => {
    console.log(response);
    return generateSVG(response)
  })
  .then((content) => {
    fs.writeFile("my_logo.svg", content, (error) => {
      error ? console.log(error) : console.log("Your SVG logo has been successfully generated.")
    })
  })
  .catch((error) => {
    console.log(error)
  });
}

init();