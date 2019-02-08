#!/usr/bin/env node

const args = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const figlet = require('figlet');
const {Spinner} = require('cli-spinner');

const file = require('./utils/file');

const dicebear = require('./providers/dicebear').askAndGet;

const providers = {dicebear};

if (
  !Object.keys(providers).includes(args._[0]) ||
  !args._[0] ||
  !args._[1]
) {
  console.log(chalk.red('Correct usage: avatar-cli <dicebear> <filename>'));
  process.exit();
}

console.log(chalk.blue(figlet.textSync('Avatar CLI')));

(async () => {
  const data = await providers[args._[0]]();
  const spinner = new Spinner('%s saving avatar...');
  spinner.setSpinnerDelay(100);
  spinner.setSpinnerString('|/-\\');
  spinner.start();
  await file.saveFileInCurretDirectory(args._[1], data);
  spinner.stop(true);
})();

