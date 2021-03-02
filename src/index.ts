import boxen from 'boxen'
import chalk from 'chalk';
import main from './main'

console.log(boxen('Welcome to Zendesk Search', { borderColor: 'cyan', padding: 1, margin: 2 }));

console.log('Type ' + chalk.blue('\'quit\'') + ' to exit at anytime, Press ' + chalk.blue('\'Enter\'') + ' to continue');
console.log('\n');

main();
