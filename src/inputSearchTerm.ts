import inquirer from 'inquirer';
import inputSearchValue from './inputSearchValue'
import { SearchConfig } from './types'

async function inputSearchTerm(): Promise<SearchConfig> {
  const answers = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'searchTerm',
        message: 'Enter search term',
      }
    ]);

  if (!answers || !answers.searchTerm) {
    process.exit();
  }

  if (answers.searchTerm === 'quit') {
    console.log('See you later!');
    process.exit();
  }

  const followingConfig = await inputSearchValue();

  return {
    searchTerm: answers.searchTerm,
    ...followingConfig
  };
}

export default inputSearchTerm;
