import inquirer from 'inquirer';
import selectSearchTarget from './selectSearchTarget'
import { SearchConfig } from './types'

async function selectSearchOption(): Promise<SearchConfig> {
  const answers = await inquirer
    .prompt([
      {
        type: 'rawlist',
        name: 'choice',
        message: 'Select search options:',
        choices: [
          {
            value: 'search',
            name: 'Search Zendesk'
          },
          {
            value: 'view',
            name: 'View a list of searchable fields'
          },
          {
            value: 'quit',
            name: 'Quit'
          }
        ],
      }
    ]);

  console.log(JSON.stringify(answers, null, '  '));

  if (!answers || !answers.choice) {
    process.exit();
  }

  if (answers.choice === 'quit') {
    console.log('See you later!');
    process.exit();
  }

  if (answers.choice === 'search') {
    const followingConfig = await selectSearchTarget();
    return {
      searchOption: 'search',
      ...followingConfig
    };
  }

  if (answers.choice === 'view') {
    return {
      searchOption: 'view',
    };
  }

  return {};
}

export default selectSearchOption;
