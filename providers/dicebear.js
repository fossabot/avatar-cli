const request = require('request-promise-native');
const inquirer = require('inquirer');
const {Spinner} = require('cli-spinner');

const getAvatar = (seed, sprites) => {
  return request(`https://avatars.dicebear.com/v2/${sprites}/${seed}.svg`);
};

const askAndGet = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'seed',
      message: 'Type seed: ',
      default: 'seed'
    },
    {
      type: 'list',
      message: 'Sprites: ',
      name: 'sprites',
      choices: [
        'Male',
        'Female',
        'Identicon',
        'Gridy',
        'Avataaars',
        'Jdenticon'
      ]
    }
  ]);
  const spinner = new Spinner('%s fetching avatar...');
  spinner.setSpinnerDelay(100);
  spinner.setSpinnerString('|/-\\');
  spinner.start();
  const data = await getAvatar(answers.seed, answers.sprites.toLowerCase());
  spinner.stop(true);
  return data;
};

module.exports = {askAndGet, getAvatar};
