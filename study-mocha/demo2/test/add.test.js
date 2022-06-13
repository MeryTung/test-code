const add  = require('../add').add
const expect = require('chai').expect

describe('加法函数的测试',()=> {
    it('a+b等于4',()=> {
        expect(add(2,2)).to.be.equal(4)
    })
})
