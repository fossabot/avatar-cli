#!/usr/bin/env node

const args = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const figlet = require('figlet');

const file = require('./utils/file');

const dicebear = require('./providers/dicebear');

const providers = {dicebear};

if (
  !Object.keys(providers).includes(args._[0]) ||
  !args._[0] ||
  !args._[1] ||
  !args._[2]
) {
  console.log(chalk.red('Correct usage: avatar-cli <dicebear> <seed> <file name to save>'));
  process.exit();
}

console.log(figlet.textSync('Avatar CLI'));

(async () => {
  const data = await providers[args._[0]](args._[1]);
  await file.saveFileInCurretDirectory(args._[2], data);
})();

