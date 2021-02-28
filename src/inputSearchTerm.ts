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

  console.log(JSON.stringify(answers, null, '  '));

  if (!answers || !answers.searchTerm) {
    return {};
  }

  if (answers.searchTerm === 'quite') {
    return {};
  }

  const followingConfig = await inputSearchValue();

  return {
    searchTerm: answers.searchTerm,
    ...followingConfig
  };
}

export default inputSearchTerm;
