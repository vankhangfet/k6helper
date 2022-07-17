var expect    = require("chai").expect;
const K6Sleep = require('../src/helper/k6sleep')
describe("Generate sleep function", function() {
    describe("k6sleep", function() {
          // generate sleep(1)
          it('should be sleep(1)', function(){
            let fn = new K6Sleep(1);
            let ret = fn.generator();
            expect(ret).to.equal('sleep(1)');
            
        });  
         
        it('should be sleep(2)', function(){
          let fn = new K6Sleep(2);
          let ret = fn.generator();
          expect(ret).to.equal('sleep(2)');
        
        });  
    });
  
  });