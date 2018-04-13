const expect  = require('chai').expect
const converter = require('..').default

describe('#converter', function () {

    it('Convertir 5 lbs a kg', function(){
        
        const result = converter(5,"lbs")
        expect(result).to.equal(2.27)
        

    })
    it('Convertir 5 kg a lbs', function(){
        
        const result = converter(5,"kg")
        expect(result).to.equal(11.025)
       
    })
})