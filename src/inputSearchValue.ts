import inquirer from 'inquirer';

async function inputSearchValue() {
  const answers = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'searchValue',
        message: 'Enter search value',
      }
    ]);

  console.log(JSON.stringify(answers, null, '  '));

  return answers.searchValue;
}

export default inputSearchValue;
