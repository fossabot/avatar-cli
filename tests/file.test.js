const path = require('path');
const fs = require('fs');
const file = require('../utils/file');

describe('file helper', () => {
  describe('joinCwd()', () => {
    it('returns valid path', () => {
      expect(file.joinCwd('test.txt'))
        .toEqual(
          path.join(process.cwd(), 'test.txt')
        );
    });
  });
  describe('saveFileInCurretDirectory()', () => {
    it('creates file and write correct content', async () => {
      const path = file.joinCwd('test.dev.txt');

      await file.saveFileInCurretDirectory('test.dev.txt', 'test');

      fs.readFile(path, (err, data) => {
        if (err) {
          throw new Error(err);
        }

        expect(data.toString()).toEqual('test');
        fs.unlinkSync(path);
      });
    });
  });
});
