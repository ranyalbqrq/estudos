const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/hard-medium.json')
var expect = chai.expect;

async function hardmediumGet(){
    let get = await axios.get('https://demo8910120.mockable.io/')
    let street = ''
    for(obj of get.data[0].users){
        for(carro of get.data[0].products){
            let x = carro
        if(get.data[0].users.indexOf(obj) == get.data[0].products.indexOf(carro)){
        texto = "Oi, eu sou " + obj.name + " tenho " + obj.year+ " anos e tenho um " + carro.car;
        }
        continue
        
        }
        console.log(texto)
    }
        street = "O sreet do norte é: " + get.data[0].registration.base[0].north.street;
        console.log(street)
        expect(get.data[0].registration.base[0].sul.street).to.eq('Lago Woolf')
        expect(get.data[0].registration.base[0].north.street).to.eq('Northland')
        expect(get.data[0].registration.ceo).to.eq('Michael Corbin')
    
    
}

//"desafio": "Imprimir list de usuário com idade e o carro de acordo com a cor, exe: Sou Wood tenho 33 anos e tenho um Dynamo.
// Fazer isso para Todos. Validar os endereços da Loja e o ceo.  E imprimir o valor final do registration, ex: O street do norte é: Northland"

hardmediumGet()