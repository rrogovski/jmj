const Empresa = require('../models/Empresa');
const db = require('../../config/database');
const timestamp = require('../utils/currentTimestamp');

module.exports = {
  async index(req, res) {
    try {
      const empresas = await Empresa.findAll();

      if (empresas === null) {
        return res.status(404).json({
          empresas: 'Record not found'
        });
       }

      return res.status(200).json({ empresas }); 
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async get(req, res) {
    const { id } = req.params;

    try {
      const empresa = await Empresa.findByPk(id);
       
      if (empresa === null) {
        return res.status(404).json({
          empresa: 'Record not found'
        });
       }

      return res.status(200).json({ empresa }); 
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async store(req, res) {
    const { 
      razaoSocial,
      cnpj,
      logradouro,
      municipio,
      numero,
      complemento,
      bairro,
      cep,
      telefone,
      email,
      site,
      usuario,
      senha,
    } = req.body;

    try {
      const empresa = await Empresa.create({
        razaoSocial,
        cnpj,
        logradouro,
        municipio,
        numero,
        complemento,
        bairro,
        cep,
        telefone,
        email,
        site,
        usuario,
        senha,
      })
  
      return res.status(200).json({ empresa });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async update(req, res) {

    const { id } = req.params;
    const { 
      razaoSocial,
      cnpj,
      logradouro,
      municipio,
      numero,
      complemento,
      bairro,
      cep,
      telefone,
      email,
      site,
      usuario,
      senha
    } = req.body;

    try {
      const empresa = await Empresa.findByPk(id);

      if (empresa === null) {
        return res.status(404).json({
          empresa: 'Record not found'
        });
       }

      empresa.razaoSocial = !razaoSocial ? empresa.razaoSocial : razaoSocial;
      empresa.cnpj = !cnpj ? empresa.cnpj : cnpj;
      empresa.logradouro = !logradouro ? empresa.logradouro : logradouro;
      empresa.municipio = !municipio ? empresa.municipio : municipio;
      empresa.numero = !numero ? empresa.numero : numero;
      empresa.complemento = !complemento ? empresa.complemento : complemento;
      empresa.bairro = !bairro ? empresa.bairro : bairro;
      empresa.cep = !cep ? empresa.cep : cep;
      empresa.telefone = !telefone ? empresa.telefone : telefone;
      empresa.email = !email ? empresa.email : email;
      empresa.site = !site ? empresa.site : site;
      empresa.usuario = !usuario ? empresa.usuario : usuario;
      empresa.senha = !senha ? empresa.senha : senha;

      empresa.save();

      return res.status(200).json({ empresa }); 
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async destroy(req, res) {
    const { id } = req.params;

    try {
      await Empresa.findByPk(id).then((result) => {
        result.destroy()
        .then((u) => {
          return res.status(200).json({ empresa: result });
        });
      });
    } catch (error) {
      return res.status(400).json({ error });
    }   
  },
};
