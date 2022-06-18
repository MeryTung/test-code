//import '@babel/polyfill'
import chai  from 'chai'
import { mutations } from '../store/mutations.js'

let expect = chai.expect
const { increment } = mutations
describe('mutations',()=>{
    it('INCREMENT',()=>{
        const state = {count:0}
        increment(state)
        expect(state.count).to.equal(1)
    })
})
