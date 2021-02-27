import inquirer from 'inquirer';
import inputSearchTerm from './inputSearchTerm'

async function selectSearchTarget() {
  const answers = await inquirer
    .prompt([
      {
        type: 'rawlist',
        name: 'searchTarget',
        message: 'Select search target:',
        choices: [
          {
            value: 'users',
            name: 'Users'
          },
          {
            value: 'organizations',
            name: 'Organizations'
          },
          {
            value: 'tickets',
            name: 'Tickets'
          },
          {
            value: 'quite',
            name: 'Quite'
          }
        ],
      }
    ]);

  console.log(JSON.stringify(answers, null, '  '));

  const [searchTerm, searchValue] = await inputSearchTerm();

  return [answers.searchTarget, searchTerm, searchValue];
}

export default selectSearchTarget;
