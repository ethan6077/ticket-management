import inquirer from 'inquirer';
import { SearchConfig } from './types'

async function inputSearchValue(): Promise<SearchConfig> {
  const answers = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'searchValue',
        message: 'Enter search value',
      }
    ]);

  console.log(JSON.stringify(answers, null, '  '));

  if (!answers || !answers.searchValue) {
    process.exit();
  }

  if (answers.searchValue === 'quit') {
    console.log('See you later!');
    process.exit();
  }

  return {
    searchValue: answers.searchValue,
  };
}

export default inputSearchValue;
