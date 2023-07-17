const axios =  require('axios').default;
const chai = require('chai');
const json = require('./fixtures/simple-medium.json')
var expect = chai.expect;

//simple-medium
async function simpleMediumGet(){
    let get = await axios.get('https://demo8910120.mockable.io/')
    for(let item of get.data){
        const user = item.user;
        const name = user.name;
        const lastname = user['last-name'];
        const year = user.year;
        const address = user.address;
        const city = address.city;
        const street = address.street;
    console.log(json)
    expect(name).to.equal('Thompson')
    expect(lastname).to.equal('Simmons')
    expect(year).to.equal(33);
    expect(city).of.equal('Matthews')
    expect(street).of.equal('Gordon Russell 123')
    }
}
simpleMediumGet();