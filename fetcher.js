//take commandline
//mentor says promises and callbacks are the same
let arg = process.argv.slice(2, 4); //just take the two parameters
const request = require('request');
const fs = require('fs');
const { index } = require('cheerio/lib/api/traversing');

request(`${arg[0]}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(`${arg[1]}`, body, error => {   //file pathway // the content 
    if (error) {
      console.error(error);
      return;
    }
    //file written successfully
  });
});
