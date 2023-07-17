const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/hard-simple.json')
var expect = chai.expect;

//hard-simple get
async function hardsimpleGet(){
    let get = await axios.get('https://demo8910120.mockable.io/')
    let texto = ''
    for(obj of get.data.users){
        for(carro of get.data.products){
            let x = carro
        if(get.data.users.indexOf(obj) == get.data.products.indexOf(carro)){
        texto = "Oi, eu sou " + obj.name + " tenho " + obj.year+ " anos e tenho um " + carro.car;
        }
        continue
        
        }
        console.log(texto)
    }

    expect(get.data.registration.base[0].sul.street).to.eq('Lago Woolf')
    expect(get.data.registration.base[0].north.street).to.eq('Northland')
    expect(get.data.registration.ceo).to.eq('Michael Corbin')

}

hardsimpleGet();