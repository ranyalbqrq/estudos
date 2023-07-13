const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/hard-hard.json')
var expect = chai.expect;

//desafio": "Imprimir de acordo com o valor quais carros cada usuário pode comprar ex:
// Eu sou Wood tenho 400000 e posso comprar um Dynamics Pink. Fazer isso para Todos. Validar os endereços da Loja e o ceo. 
// E imprimir o valor final do registration, ex: O street do norte é: Northland"

async function hardhardGet(){
    try {
        let get = await axios.get('https://demo8910120.mockable.io/');
        let street = ""
        for (let user of get.data[0].users) {
          let affordableCars = [];
          for (let product of get.data[0].products) {
            if (product.value <= user.money) {
              affordableCars.push(product);
            }
          }
    
          let texto = "Eu sou " + user.name + " tenho " + user.money + " e posso comprar" + " ";
    
          if (affordableCars.length > 0) {
            affordableCars.forEach(car => {
              texto +=  car.car + " " + car.color + " ";
            });
          } else {
            texto += " Nenhum carro disponível";
          }
    
          console.log(texto);
          
        }
          street = "O sreet do norte é: " + get.data[0].registration.base[0].north.street;
          console.log(street)
          expect(get.data[0].registration.base[0].sul.street).to.eq('Lago Woolf')
          expect(get.data[0].registration.base[0].north.street).to.eq('Northland')
          expect(get.data[0].registration.ceo).to.eq('Michael Corbin')
    
      } catch (error) {
        console.error(error);
}
      
    }


hardhardGet();

