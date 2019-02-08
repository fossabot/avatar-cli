const md5 = require('../utils/md5');

describe('md5', () => {
  it('returns valid hash', () => {
    expect(md5('test')).toEqual('098f6bcd4621d373cade4e832627b4f6');
  });
});
