const assert = require('assert')

describe('Addition', function() {
  describe('Integers', function() {	
    it('2 + 3 = 5', function() {
      assert.equal(2 + 3, 5)
    })
		it('7 + (-1) = 6', function() {
      assert.equal(7 + (-1), 6)
    })
  })
})