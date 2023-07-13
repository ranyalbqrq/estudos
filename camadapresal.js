const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/camada-pre-sal.json')
var expect = chai.expect;

// "desafio": "Encontrar, extrair e imprimir o value final"

async function camadapresalGET(){
    let get = await axios.get('https://demo8910120.mockable.io/')
    console.log(get.data.user_info.address[0].primary_address.house[0].room.bad[0].sanders.airPlane[1].Brooks[0].books[0].result_final.value)
}

camadapresalGET();