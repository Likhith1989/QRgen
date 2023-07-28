import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'URL',
        message: 'What is the URL of the page you want to generate QR code?'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });