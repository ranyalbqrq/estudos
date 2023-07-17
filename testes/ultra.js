const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/ultra.json')
var expect = chai.expect;

// "desafio": "Imprima um JSON preenchendo os campos acima usando código *Usar código Java para criar o JSON apenas
//  para impressão não é necessário criar um novo arquivo* (com 5 usuários, produtos e carros dinâmicos) users(name, last_name, id), car(name, marca),
//   products(name, marca, valor) Os nomes podem ser fakes.

    const users = [
        { name: "Rany", last_name: "Albuquerque" , id: 1},
        { name: "jamzito", last_name: "Batisa", id: 2},
        { name: "Thiago", last_name: "Jordani", id: 6},
        { name: "Mayna", last_name: "Thais", id: 3},
        { name: "Mari", last_name: "Fernandes", id: 9}
    ];

    const car =[
        {name: "corsa", marca: "chevrolet"},
        {name: "celta", marca: "chevrolet"},
        {name: "onix", marca: "chevrolet"},
        {name: "prisma", marca: "chevrolet"},
        {name: "cobalt", marca: "chevrolet"}
    
    ];

    const produtos =[
        {name: "celular", marca: "xiaomi", preco: 1080},
        {name: "celular", marca: "iphone", preco: 5000},
        {name: "caneta", marca: "bic", preco: 1},
        {name: "notebook", marca: "lenovo", preco: 2000},
        {name: "monitor", marca: "extream", preco: 800}
    
    ];

    const contJson = {
        users: users,
        car: car,
        produtos: produtos
    }

    console.log(contJson)
