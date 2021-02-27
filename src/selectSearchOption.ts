import inquirer from 'inquirer';

import selectSearchTarget from './selectSearchTarget'

async function selectSearchOption() {
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
            value: 'quite',
            name: 'Quite'
          }
        ],
      }
    ]);

  console.log(JSON.stringify(answers, null, '  '));

  if (!answers || !answers.choice) {
    return [];
  }

  if (answers.choice === 'search') {
    const [searchTarget, searchTerm, searchValue] = await selectSearchTarget();
    return ['search', searchTarget, searchTerm, searchValue];
  }

  return [];
}

export default selectSearchOption;
