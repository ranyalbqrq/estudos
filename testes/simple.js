const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/simple.json')
var expect = chai.expect;

//simple.json
const json = require('./fixtures/simple.json')
async function simpleGet(){
    let get = await axios.get('https://demo8910120.mockable.io/')
    console.log(simple)
    let Order= [1, 3, 4, 2];
    Order.sort();
    console.log(Order);
    expect(get.data.user.name).to.equal('Thompson');
    //expect(get.data.user.last_name).to.equal('Simmons');
    expect(get.data.user.year).to.equal(33);
    expect(get.data.user.address.city).of.equal('Matthews')
    expect(get.data.user.address.street).of.equal('Gordon Russell 123')
    expect(get.data.user.Order[0])
    expect(get.data.user.Order[1])
    expect(get.data.user.Order[2])
    expect(get.data.user.Order[3])
    expect(get.data.user.desafio).to.equal('Validar todos os campos, inclusive, esse texto. E imprimir o Order na ordem correta.')
}

simpleGet();