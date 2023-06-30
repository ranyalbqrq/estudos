const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/master-simple.json')
var expect = chai.expect;


// "desafio": "Imprimir de acordo com o valor quais carros cada usuário pode comprar 
// ex: Eu sou Wood tenho 400000 e posso comprar um Dynamics Pink MAS, se ele for VIP Informe quais carro ele também tem direito.
// Fazer isso para Todos. Validar os endereços da Loja e o ceo. E imprimir o valor final do registration, ex: O street do norte é: Northland"

async function mastersimpleGet(){
    try {
        let get = await axios.get('https://demo8910120.mockable.io/');
        let street = ""
        for (let user of get.data.users) {
          let affordableCars = [];
          for (let product of get.data.products) {
            if (product.value <= user.money) {
              affordableCars.push(product);
            }
          }
    
          let texto = "Eu sou "  + user.name + " tenho " + user.money + " e posso comprar ";
    
          if (affordableCars.length > 0) {
            affordableCars.forEach(car => {
              texto += car.car +  " " + car.color + " "; 
            });
          } else {
            texto += " Nenhum carro disponível";
          }

          if(user.class == "VIP"){
            const vipCar = get.data.VIPs.map((vip) => vip.car)
            texto += " além disso, posso ter " + vipCar + " ";
          }
    
          console.log(texto);
        
        }
          street = "O sreet do norte é: " + get.data.registration.base[0].north.street;
          console.log(street)
          expect(get.data.registration.base[0].sul.street).to.eq('Lago Woolf')
          expect(get.data.registration.base[0].north.street).to.eq('Northland')
          expect(get.data.registration.ceo).to.eq('Michael Corbin')
    
      } catch (error) {
        console.error(error);
      }
      
    }


mastersimpleGet();