import inquirer from 'inquirer';
import inputSearchTerm from './inputSearchTerm'
import { SearchConfig } from './types'

async function selectSearchTarget(): Promise<SearchConfig> {
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
            value: 'quit',
            name: 'Quit'
          }
        ],
      }
    ]);

  console.log(JSON.stringify(answers, null, '  '));

  if (!answers || !answers.searchTarget) {
    process.exit();
  }

  if (answers.searchTarget === 'quit') {
    console.log('See you later!');
    process.exit();
  }

  const followingConfig = await inputSearchTerm();

  return {
    searchTarget: answers.searchTarget,
    ...followingConfig
  };
}

export default selectSearchTarget;
