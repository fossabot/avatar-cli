const getAvatar = require('../providers/dicebear');

describe('dicebear', () => {
  describe('getAvatar()', () => {
    it('returns valid avatar', async () => {
      const data = await getAvatar('test');

      expect(data.startsWith('<svg')).toBe(true);
    });
  });
});
