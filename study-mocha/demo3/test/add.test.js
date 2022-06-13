import '@babel/polyfill'
import add from '../add.js'
import chai from 'chai'

let expect = chai.expect

describe('两个数相加', function () {
    it('1 + 1 等于2',()=>{
        expect(add(1,1)).to.equal(2)
    })
})