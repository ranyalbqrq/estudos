const axios =  require('axios').default;
const chai = require('chai');
const json = require('./fixtures/medium.json')
var expect = chai.expect;

async function mendiumGet(){
    let get = await axios.get('https://demo8910120.mockable.io/')
        console.log(get.data)
        expect(get.data.users.length).to.eq(2)
        expect(get.data.users[0].name).to.eq('Michael')
        expect(get.data.users[0].last_name).to.eq('Jackson')
        expect(get.data.users[0].age).to.eq(33)
        expect(get.data.users[0].date_nasc).to.eq('10/07/1988')
        expect(get.data.users[1].name).to.eq('Margareth')
        expect(get.data.users[1].last_name).to.eq('Thatcher')
        expect(get.data.users[1].age).to.eq(50)
        expect(get.data.users[1].date_nasc).to.eq('10/12/1968')
        expect(get.data.address.street).to.eq('Avenida das Oliveiras')
        console.log(get.data.users.length);

    for(response of get.data.address.geo){
        console.log(response)
        expect(response.state.long).to.eq(15132534)

        for(planet of response.state.planet){
            expect(planet).to.eq('Earth')
        }
    }
    for(others of get.data.address.others){
        expect(others).to.eq('AP401')
    }
}
mendiumGet();