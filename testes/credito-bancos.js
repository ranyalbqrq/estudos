const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/credito_bancos.json')
var expect = chai.expect;

// desafio": "Listar/Imprimir quais bancos os clientes e empresas
//  podem pedir crédito de acordo com seu salario/valor_capital 
// e exigencia ou não de restrição no cpf/cnpj

async function creditobancosGET() {
    let get = await axios.get('https://demo8910120.mockable.io/')
    function quebrandoBancos(){
    const bancos = get.data[0].bancos
    const data_bancos = get.data[1].data_bancos
    const clientes = get.data[2].clientes;
    const empresas = get.data[3].empresas;

    for (const cliente of clientes) {
      const bancosElegiveis = [];
      for (const banco of bancos) {
        for (const credito of banco.credito.lista_de_creditos) {
          if (
            cliente.salario >= credito.salario_requerido &&
            (!credito['consulta_cpf/cnpj'].required || !cliente['restrições_cpf'])
          ) {
            bancosElegiveis.push(data_bancos.find(b => b.cnpj === banco.cnpj));
          }
        }
      }

      console.log("Cliente: " + cliente.name);
      console.log("Bancos Elegíveis:");
      console.log(bancosElegiveis);
      console.log("---------------------------");
    }
  
    for (const empresa of empresas) {
      const bancosElegiveis = [];
      for (const banco of bancos) {
        for (const credito of banco.credito.lista_de_creditos) {
          if (
            empresa.valor_capital >= credito.capital_empresa &&
            (!credito['consulta_cpf/cnpj'].required || !empresa.restricoes)
          ) {
            bancosElegiveis.push(data_bancos.find(b => b.cnpj === banco.cnpj));
          }
        }
      }
      console.log("Empresa: " + empresa.name);
      console.log("Bancos Elegíveis:");
      console.log(bancosElegiveis);
      console.log("---------------------------");
    }
  }
  quebrandoBancos();
  

}
  

creditobancosGET();
