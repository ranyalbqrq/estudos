const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/acesso-empresarial.json')
var expect = chai.expect;

// desafio": "Imagine que isso remete a um acesso empresarial, onde existem várias empresas e cada uma tem seu sistema.
//  Então, de acordo com a lista de usuários e a empresa que ele trabalha no campo Enterprise, imprima o seguinte texto: 
// Meu nome é xxxx trabalho na xxxx meu código de acesso é xxxx. Para todos os usuários na lista."

async function acessoempresarialGET() {
  let get = await axios.get('https://demo8910120.mockable.io/');
  let texto = "";

  for (let user of get.data.users_funcionarios) {
    let enterprise = get.data.enterprises.find(e => e.social === user.enterprise);

    // Função recursiva para percorrer o JSON e imprimir as keys
    function findAccessKeys(obj) {
      if (typeof obj === 'object') {
        if ('key' in obj) {
          console.log(obj.key);
        } else {
          for (let key in obj) {
            findAccessKeys(obj[key]);
          }
        }
      }
    }

    let texto = "Meu nome é " + user.name + ", trabalho na " + user.enterprise + " e meu código de acesso é: ";

    // Caso a empresa do usuário tenha uma access_key
    if (enterprise && enterprise.access_key) {
      findAccessKeys(enterprise.access_key)
    } else {
      texto += " Não possui acesso"; // Caso não haja uma access_key para a empresa do usuário
    }

    console.log(texto);
  }
}

acessoempresarialGET();

