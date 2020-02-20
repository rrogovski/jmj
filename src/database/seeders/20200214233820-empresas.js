'use strict';
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync();

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('empresa', [{
        razaoSocial:'A Empresa 01',
        cnpj: '11111111111111',
        logradouro: 'Rua do Bolsinho',
        municipio: 'Condado',
        numero: '3',
        complemento:'Bolsão',
        bairro:'Vila dos Hobbits',
        cep: '78550000',
        telefone: '66999999999',
        email: 'empresa01@email.com',
        site: 'empresa01.com',
        usuario:'empresa01',
        senha: bcrypt.hashSync('empresa01', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        razaoSocial:'A Empresa 02',
        cnpj: '22222222222222',
        logradouro: 'Rua onde o vento faz a curva',
        municipio: 'Terra Média',
        numero: '6174',
        complemento:'Reino de Gondor',
        bairro:'Minas Tirith',
        cep: '78550000',
        telefone: '66999999999',
        email: 'empresa02@email.com',
        site: 'empresa02.com',
        usuario:'empresa02',
        senha: bcrypt.hashSync('empresa02', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        razaoSocial:'A Empresa 03',
        cnpj: '33333333333333',
        logradouro: 'Rua onde o vento faz a curva',
        municipio: 'Terra Média',
        numero: '6174',
        complemento:'Valfenda',
        bairro:'Rivendell',
        cep: '78550000',
        telefone: '66999999999',
        email: 'empresa03@email.com',
        site: 'empresa03.com',
        usuario:'empresa03',
        senha: bcrypt.hashSync('empresa03', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        razaoSocial:'A Empresa 04',
        cnpj: '44444444444444',
        logradouro: 'Rua onde o vento faz a curva',
        municipio: 'Terra Média',
        numero: '6174',
        complemento:'Senhores dos Cavalos',
        bairro:'Rohan',
        cep: '78550000',
        telefone: '66999999999',
        email: 'empresa04@email.com',
        site: 'empresa04.com',
        usuario:'empresa04',
        senha: bcrypt.hashSync('empresa04', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        razaoSocial:'A Empresa 05',
        cnpj: '55555555555555',
        logradouro: 'Rua onde o vento faz a curva',
        municipio: 'Terra Média',
        numero: '6174',
        complemento:'Montanha da Perdição',
        bairro:'Mordor',
        cep: '78550000',
        telefone: '66999999999',
        email: 'empresa05@email.com',
        site: 'empresa05.com',
        usuario:'empresa05',
        senha: bcrypt.hashSync('empresa05', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        razaoSocial:'A Empresa 06',
        cnpj: '66666666666666',
        logradouro: 'Rua onde o vento faz a curva',
        municipio: 'Terra Média',
        numero: '6174',
        complemento:'Montanha da Perdição',
        bairro:'Floresta das Trevas',
        cep: '78550000',
        telefone: '66999999999',
        email: 'empresa06@email.com',
        site: 'empresa06.com',
        usuario:'empresa06',
        senha: bcrypt.hashSync('empresa06', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        razaoSocial:'A Empresa 07',
        cnpj: '77777777777777',
        logradouro: 'Rua onde o vento faz a curva',
        municipio: 'Terra Média',
        numero: '6174',
        complemento:'Onde mora Beorn',
        bairro:'Vales do Anduin',
        cep: '78550000',
        telefone: '66999999999',
        email: 'empresa07@email.com',
        site: 'empresa07.com',
        usuario:'empresa07',
        senha: bcrypt.hashSync('empresa07', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        razaoSocial:'A Empresa 08',
        cnpj: '88888888888888',
        logradouro: 'Rua onde o vento faz a curva',
        municipio: 'Terra Média',
        numero: '6174',
        complemento:'',
        bairro:'Gondor',
        cep: '78550000',
        telefone: '66999999999',
        email: 'empresa08@email.com',
        site: 'empresa08.com',
        usuario:'empresa08',
        senha: bcrypt.hashSync('empresa08', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        razaoSocial:'A Empresa 09',
        cnpj: '99999999999999',
        logradouro: 'Rua onde o vento faz a curva',
        municipio: 'Terra Média',
        numero: '6174',
        complemento:'',
        bairro:'Angmar',
        cep: '78550000',
        telefone: '66999999999',
        email: 'empresa09@email.com',
        site: 'empresa09.com',
        usuario:'empresa09',
        senha: bcrypt.hashSync('empresa09', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        razaoSocial:'A Empresa 10',
        cnpj: '00000000000000',
        logradouro: 'Rua onde o vento faz a curva',
        municipio: 'Terra Média',
        numero: '6174',
        complemento:'Ponei Saltitante',
        bairro:'Bri',
        cep: '78550000',
        telefone: '66999999999',
        email: 'empresa10@email.com',
        site: 'empresa10.com',
        usuario:'empresa10',
        senha: bcrypt.hashSync('empresa10', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      },      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('empresa', null, {});
  }
};
