const request = require('request-promise-native');

const getAvatar = seed => {
  return request(`https://avatars.dicebear.com/v2/gridy/${seed}.svg`);
};

module.exports = getAvatar;
