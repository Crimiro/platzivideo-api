const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('Utils- buildMessage', function() {
  describe('When receives and entity and action', function() {
    it('Should return the respective message', function() {
      const result = buildMessage('movie', 'create');
      const expect = 'movie created';
      assert.strictEqual(result, expect);
    })
  })
})