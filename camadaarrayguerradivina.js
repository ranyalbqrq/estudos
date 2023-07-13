const axios =  require('axios').default;
const chai = require('chai');
const simple = require('./fixtures/camada-array-guerra-divina.json')
var expect = chai.expect;

//desafio": "Se desafie, valide todos os campos, entrando em todas as camadas, JSON praticamente impossível no mercado, mas vai te dar um conhecimento ABSURDO

async function camadaarrayguerradivinaGet(){
    let get = await axios.get('https://demo8910120.mockable.io/')
    console.log(get.data[0].users[0].main[0].intro[1].primeira_camada[0].segunda_camada[1].terceira_camada[1].quarta_camada[2].quinta_camada[1].sexta_camada[1].intro_sexta_camada.array_sexta_camada[2].title_sem_objeto)

    expect(get.data[0].users[0].main[0].intro[0].title).to.eq('desafio'),
    expect(get.data[0].users[0].main[0].intro[0].description).to.eq('Impossível de validar'),
    expect(get.data[0].users[0].main[0].intro[1].primeira_camada[0].segunda_camada[0].title_segunda_camada).to.eq('difícil chegar aqui'),
    expect(get.data[0].users[0].main[0].intro[1].primeira_camada[0].segunda_camada[1].terceira_camada[0].title_terceira_camada).to.eq('cada vez mais difícil'),
    expect(get.data[0].users[0].main[0].intro[1].primeira_camada[0].segunda_camada[1].terceira_camada[1].quarta_camada[0].title_quarta_camada).to.eq('complicando ainda mais'),
    expect(get.data[0].users[0].main[0].intro[1].primeira_camada[0].segunda_camada[1].terceira_camada[1].quarta_camada[1].objeto_quarta_camada.title).to.eq('as vezes a camada precisa de uns objetos pra complicar'),
    expect(get.data[0].users[0].main[0].intro[1].primeira_camada[0].segunda_camada[1].terceira_camada[1].quarta_camada[1].objeto_quarta_camada.objeto_da_quarta_camada.title).to.eq('Ainda mais complicado, 2 objetos dentro de uma camada'),
    expect(get.data[0].users[0].main[0].intro[1].primeira_camada[0].segunda_camada[1].terceira_camada[1].quarta_camada[1].objeto_quarta_camada.objeto_da_quarta_camada.terceiro_objeto_da_camada).to.eq('é impossível ter um json assim kkk'),
    expect(get.data[0].users[0].main[0].intro[1].primeira_camada[0].segunda_camada[1].terceira_camada[1].quarta_camada[2].quinta_camada[0].title).to.eq('depois da quarta-camada a quinta pode complicar mais ainda'),
    expect(get.data[0].users[0].main[0].intro[1].primeira_camada[0].segunda_camada[1].terceira_camada[1].quarta_camada[2].quinta_camada[0].intro_quinta_camada[0].title).to.eq('essa intro complica mais ainda porque nasceu um array dentor de um objeto da quinta camada. Assim não dá.'),
    expect(get.data[0].users[0].main[0].intro[1].primeira_camada[0].segunda_camada[1].terceira_camada[1].quarta_camada[2].quinta_camada[1].sexta_camada[0].title).to.eq('ah, sexta camada, normal, simples, sem complicações'),
    expect(get.data[0].users[0].main[0].intro[1].primeira_camada[0].segunda_camada[1].terceira_camada[1].quarta_camada[2].quinta_camada[1].sexta_camada[1].intro_sexta_camada.array_sexta_camada[0].title).to.eq('acima tem um array dentro de um objeto, que complicado'),
    expect(get.data[0].users[0].main[0].intro[1].primeira_camada[0].segunda_camada[1].terceira_camada[1].quarta_camada[2].quinta_camada[1].sexta_camada[1].intro_sexta_camada.array_sexta_camada[1].objeto_sexta_camada.title).to.eq('segundo objeto da camada-array tem outro objeto dentro, impossível isso.'),
    expect(get.data[0].users[0].main[0].intro[1].primeira_camada[0].segunda_camada[1].terceira_camada[1].quarta_camada[2].quinta_camada[1].sexta_camada[1].intro_sexta_camada.array_sexta_camada[2].title_sem_objeto).to.eq('Acho que 6 camadas são suficiente')

}

camadaarrayguerradivinaGet();