const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/credito_bancos.json')
var expect = chai.expect;

// desafio": "Listar/Imprimir quais bancos os clientes e empresas
//  podem pedir crédito de acordo com seu salario/valor_capital 
// e exigencia ou não de restrição no cpf/cnpj

async function creditobancosGET() {
    let get = await axios.get('https://demo8910120.mockable.io/')
    for(let obj of get.data){
       console.log(obj.bancos) 
        // for(let banco of obj.bancos){
        //     for( let credito of banco.credito.lista_de_creditos){
                // for(let dataBancos of obj.data_bancos){
                
                // }
        //     }
        // }
    }
}

creditobancosGET();