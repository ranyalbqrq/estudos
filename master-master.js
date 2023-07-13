const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/master-master.json')
var expect = chai.expect;

//desafio": "Imprimir de acordo com o valor quais carros cada usuário pode comprar ex: Eu sou Wood tenho 400000
//  e posso comprar um Dynamics Pink MAS, se ele for VIP Informe quais carro ele também tem direito. Fazer isso para Todos.
//   Validar os endereços da Loja e o campo achou nível pré-sal. E imprimir *Chegou no nível pré-sal de validação JSON.*,
//    *Chegou no nível pré-sal-interno de validação JSON.*"

async function mastermasterGet(){
    try {
        let get = await axios.get('https://demo8910120.mockable.io/');
        let texto = ""
        let street = ""
        for (let user of get.data[0].users) {
          let affordableCars = [];
          for (let product of get.data[0].products) {
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

            if(!user.name.includes("not-VIP")){
            const vipCars = get.data[0].VIPs[0].selection_vip.map(vip => vip.car);
            texto += " além disso, posso ter " + vipCars + " ";
            }
    
          console.log(texto);
        
        }
          street = "O sreet do norte é: " + get.data[0].registration.base[0].north.street;
          console.log(street)
          frase = get.data[0].data[0].font[0].fundo[0].mais_fundo[0].pre_sal.chegando.achou;
          console.log(frase)
          frase1 = get.data[0].data[0].font[0].fundo[0].mais_fundo[0].pre_sal_interno.chegando.achou
          console.log(frase1)
          expect(get.data[0].registration.base[0].sul.street).to.eq('Lago Woolf')
          expect(get.data[0].registration.base[0].north.street).to.eq('Northland')
          expect(get.data[0].registration.ceo[0].president).to.eq('Michael Corbin')
    
       } catch (error) {
        console.error(error);
      }
      
     }
    

mastermasterGet();