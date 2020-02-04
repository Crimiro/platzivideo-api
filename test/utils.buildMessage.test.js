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

describe.only('When receives an entity and an action ans is a list', function() {
  describe('Should return the respective message with the entity in plural', function() {
    it('Should return the respective message', function() {
      const result = buildMessage('movie', 'list');
      const expect = 'movies listed';
      assert.strictEqual(result, expect);
    })
  })
})