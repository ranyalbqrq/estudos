const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/hard-complex.json')
var expect = chai.expect;

//"desafio": "Imprimir de acordo com o valor quais carros cada usuário pode comprar ex: Eu sou Wood tenho 400000 e posso comprar um Dynamics Pink.
//Fazer isso para Todos. Validar os endereços da Loja e o ceo."


async function hardcomplexGet() {
    try {
      let get = await axios.get('https://demo8910120.mockable.io/');
      
      for (let user of get.data.users) {
        let affordableCars = [];
//A função affordableCars é responsável por encontrar os carros que um determinado usuário pode comprar com base no valor de dinheiro disponível para esse usuário.
        for (let product of get.data.products) {
          if (product.value <= user.money) {
            affordableCars.push(product);
          }
        }
  
        let texto = `Eu sou ${user.name}, tenho ${user.money} e posso comprar:`;
  
        if (affordableCars.length > 0) {
          affordableCars.forEach(car => {
            texto += ` ${car.car} (${car.color})`;
          });
        } else {
          texto += " Nenhum carro disponível";
        }
  
        console.log(texto);
      }
    } catch (error) {
      console.error(error);
    }
  }
hardcomplexGet();

// {
//     users: [
//       { name: 'Wood', year: 33, color: 'red', money: 400000 },
//       { name: 'Scott', year: 28, color: 'blue', money: 500000 },
//       { name: 'Griffin', year: 31, color: 'pink', money: 600000 },
//       { name: 'Stephens', year: 30, color: 'black', money: 700000 },
//       { name: 'Hawkins', year: 47, color: 'white', money: 800000 }
//     ],
//     products: [
//       { car: 'Dynamo', color: 'red', value: 800000 },
//       { car: 'Elysium', color: 'blue', value: 300000 },
//       { car: 'Dynamics', color: 'pink', value: 400000 },
//       { car: 'Fang', color: 'black', value: 700000 },
//       { car: 'Prospect', color: 'white', value: 600000 }
//     ],