var simple = require('../lib/script');
var expect = require('expect.js');

describe("simple", function(){
  it("should return true", function(){
    expect(simple.math(1)).to.equal(true);
  });
  it("should return false", function(){
    expect(simple.math(0)).to.equal(false);
  });
  it("should return null", function(){
    expect(simple.math(2)).to.equal(null);
  })
});
