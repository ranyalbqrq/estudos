const axios =  require('axios').default;
const chai = require('chai');
const json = require('./fixtures/simple-simple.json')
var expect = chai.expect;

// simple-simple.json
async function requisicaoGet(){
   let get = await axios.get('https://demo8910120.mockable.io/')
    console.log(json)
    expect(get.data.user.name).to.equal('Thompson');
    expect(get.data.user.last_name).to.equal('Simmons');
    expect(get.data.user.year).to.equal(33);
    expect(get.data.user.address.city).of.equal('Matthews')
    expect(get.data.user.address.street).of.equal('Gordon Russell 123')
}


//exemplo de expect expect(get.data.total_pages).to.equal(2)

// async function requisicaoPost(){
//     let url = 'https://reqres.in/api/users';
//         let data = {
//             name: 'rany',
//             job: 'trainee'
//         };
//         axios.post(url, data)
//         .then(function(response) {
//         console.log(response.data);
//     })
//     }



requisicaoGet();
//requisicaoPost();