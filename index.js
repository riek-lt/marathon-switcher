var fs = require('fs');
const readline = require("readline-sync");
const fetch = require("node-fetch");

//Text files
const folderName = "textfiles";
const txtRunner = './' + folderName + '/runner.txt';
const txtGame = './' + folderName + '/game.txt';
const txtCategory = './' + folderName + '/category.txt';
const txtEstimate = './' + folderName + '/estimate.txt';
const txtConsole = './' + folderName + '/console.txt';

var userinput = "";
var slug = "";
const getJSON = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) // check if response worked (no 404 errors etc...)
      throw new Error(response.statusText);
    const data = await response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
  } catch (error) {
    return error;
  }
}

slug = readline.question('Please post the oengus slug for the marathon: ');
apiCall(slug);
initFiles();

function apiCall(slug) { //Reads the CSV, writes data to lines. Also adds the length of the marathon to tableLength;
  console.log("Fetching schedule data from " + slug);
  getJSON("https://oengus.io/api/marathon/" + slug + "/schedule").then(data => {
    // console.log(data);
    // lines = data;
  }).catch(error => {
    console.error(error);
  });
}

function initFiles() {
  if (!fs.existsSync('./' + folderName)){
    fs.mkdirSync('./' + folderName);
    console.log('Created Folder!')
}
  try {
    if (fs.existsSync(txtCategory)) {
      console.log("No files are created, files already exist.")
    } else {
      fs.writeFile(txtCategory, '', function(err) {
        if (err) throw err;
        console.log('Files are created successfully.');
      });
    }
  } catch (err) {
    console.error(err)
  }
}
