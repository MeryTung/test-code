const { expect } = require('chai');
describe('超时测试套件',()=>{
    it('超过5000毫秒后',(done)=>{
        var x = true;
        var f = function(){
            x = false;
            expect(x).to.not.be.ok;
            done()
        }
       setTimeout(f,4000)
    })
})