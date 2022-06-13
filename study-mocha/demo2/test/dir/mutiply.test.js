const mutiply = require('../../mutiply').mutiply
const expect = require('chai').expect

describe('两个数相乘的结果',()=>{
    it('1 * 1 等于 1',()=>{
        expect(mutiply(1,1)).to.be.equal(1)
    })
})