const path = require('path');
const fs = require('fs');

const joinCwd = fileName => {
  return path.join(process.cwd(), fileName);
};

const saveFileInCurretDirectory = async (fileName, data) => {
  fs.writeFile(joinCwd(fileName), data, err => {
    if (err) {
      return Promise.reject(err);
    }

    return Promise.resolve();
  });
};

module.exports.joinCwd = joinCwd;
module.exports.saveFileInCurretDirectory = saveFileInCurretDirectory;
