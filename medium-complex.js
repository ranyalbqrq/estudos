const axios =  require('axios').default;
const chai = require('chai');
const json = require('./fixtures/medium-complex.json')
var expect = chai.expect;

//medium
async function mendiumGet(){
    let get = await axios.get('https://demo8910120.mockable.io/')
        for(obj of get.data){
        console.log(obj)
        expect(obj.users[0].name).to.eq('Michael')
        expect(obj.users[0].last_name).to.eq('Jackson')
        expect(obj.users[0].age).to.eq(33)
        expect(obj.users[0].date_nasc).to.eq('10/07/1988')
        expect(obj.users[1].name).to.eq('Margareth')
        expect(obj.users[1].last_name).to.eq('Thatcher')
        expect(obj.users[1].age).to.eq(50)
        expect(obj.users[1].date_nasc).to.eq('10/12/1968')
        expect(obj.address.city).to.eq('São Paulo')
        expect(obj.address.street).to.eq('Avenida das Oliveiras')
        console.log(obj.users.length);

        for(response of obj.address.geo){
            console.log(response)
            expect(response.state.long).to.eq(15132534)

            for(planet of response.state.planet){
                expect(planet).to.eq('Earth')
            }
        }

            for(others of obj.address.others){
                expect(others).to.eq('AP401')
            }
     }
}
mendiumGet();