let calcu = require('./calcu');
// let should = require('should');
let { expect } = require('chai')
const { should } = require('chai');


describe('add func test',()=> {
    it('2 add 2  should equal 4', ()=> {
        expect(calcu.add(2,2)).to.equal(4)
    })
})