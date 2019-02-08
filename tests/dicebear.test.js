const getAvatar = require('../providers/dicebear');
const md5 = require('../utils/md5');

describe('dicebear', () => {
  describe('getAvatar()', () => {
    it('returns valid avatar', async () => {
      const data = await getAvatar('test');

      expect(md5(data)).toEqual('18b38c31bf02f5f4e2daef6b2faca131');
    });
  });
});
