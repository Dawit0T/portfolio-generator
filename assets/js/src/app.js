// const generatePage = () => 'Name: Jane, Github: janehub';

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

const fs = require('fs');

const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

const generatePage = require('./assestsjs/src/page-template.js');

fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});

console.log(err);