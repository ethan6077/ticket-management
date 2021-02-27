import fs from 'fs';
console.log('Hello world, Ethan');

fs.readFile('../assets/organizations.json', (error, data) => {
  console.log('data: ', data);
});
