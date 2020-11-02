const chalk = require('chalk');
const rand = () => Math.floor(Math.random() * 255);

const wilders = ['Jacopo', 'Fabien', 'Alfred','Lennart', 'Jeanloup', 'Nikolai', 'Yury', 'Dima', 'Jane', 'Ioan', 'Victoriya', 'Teiko', 'Roxana','Valentin', 'Naomi', 'Dean', 'Carlos', 'Aya', 'Viet'];

for (let i = 0; i < wilders.length; i++) {
    console.log(chalk.rgb(rand(), rand(), rand())(`${wilders[i]}`)); 
};

// console.log(chalk.blue('Jane'));
// console.log(chalk.red('Aya'));
// console.log(chalk.white('Roxana'));
// console.log(chalk.green('Teiko'));