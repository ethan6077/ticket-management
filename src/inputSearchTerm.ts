import inquirer from 'inquirer';
import inputSearchValue from './inputSearchValue'

async function inputSearchTerm() {
  const answers = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'searchTerm',
        message: 'Enter search term',
      }
    ]);

  console.log(JSON.stringify(answers, null, '  '));

  const searchValue = await inputSearchValue();

  return [answers.searchTerm, searchValue];
}

export default inputSearchTerm;
