const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/complex-medium.json')
var expect = chai.expect;

//complex-medium
async function complexmediumGet(){
    let get = await axios.get('https://demo8910120.mockable.io/')
        for(obj of get.data[0].users){
            let user = obj
            let texto = "Oi, eu sou " + obj.name + " e tenho " + obj.year+ " anos.";
        console.log(texto)}
    

        for(carro of get.data[0].products){
            let x = carro
            let y = "Carro " + carro.car + " disponível para compra."
            console.log(y)
        }

        expect(get.data[0].registration.base[0].sul.street).to.eq('Lago Woolf')
        expect(get.data[0].registration.base[0].north.street).to.eq('Northland')
        expect(get.data[0].registration.ceo).to.eq('Michael Corbin')

}

complexmediumGet();