const db = require('../database');
const timestamp = require('../utils/currentTimestamp');

module.exports = {
  async index(req, res) {
    const empresas = 'SELECT * FROM empresa';

    const query = await db.query(empresas);
    if (query.ok) {
      return res.status(200).json({
        ok: query.ok,
        empresas: query.result.rows,
        rowCount: query.result.rowCount
      });
    } else {
      return res.status(400).json({
        ok: result.ok,
        err: result.err
      });
    }
  },

  async get(req, res) {
    const { id } = req.params;
    const empresas = `SELECT * FROM empresa WHERE empresa.id = ${id}`;

    const query = await db.query(empresas);
    if (query.ok) {
      return res.status(200).json({
        ok: query.ok,
        empresa: query.result.rows[0],
        rowCount: query.result.rowCount
      });
    } else {
      return res.status(400).json({
        ok: query.ok,
        err: query.err
      });
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
      senha
    } = req.body;

    const newEmpresaInsert = `INSERT INTO empresa (
      "razaoSocial",
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
    ) VALUES (
      '${razaoSocial}',
      '${cnpj}',
      '${logradouro}',
      '${municipio}',
      '${numero}',
      '${complemento}',
      '${bairro}',
      '${cep}',
      '${telefone}',
      '${email}',
      '${site}',
      '${usuario}',
      '${senha}'
    ) RETURNING *`;

    const query = await db.query(newEmpresaInsert);

    if (query.ok) {
      return res.status(200).json({
        ok: query.ok,
        empresa: query.result.rows[0]
      });
    } else {
      return res.status(400).json({
        ok: query.ok,
        err: query
      });
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

    let query = await db.query(`SELECT * FROM empresa WHERE empresa.id = ${id}`);

    const empresa = query.result.rows[0];

    let empresaUpdate = {
      "razaoSocial": !razaoSocial ? empresa.razaoSocial : razaoSocial,
      "cnpj": !cnpj ? empresa.cnpj : cnpj,
      "logradouro": !logradouro ? empresa.logradouro : logradouro,
      "municipio": !municipio ? empresa.municipio : municipio,
      "numero": !numero ? empresa.numero : numero,
      "complemento": !complemento ? empresa.complemento : complemento,
      "bairro": !bairro ? empresa.bairro : bairro,
      "cep": !cep ? empresa.cep : cep,
      "telefone": !telefone ? empresa.telefone : telefone,
      "email": !email ? empresa.email : email,
      "site": !site ? empresa.site : site,
      "usuario": !usuario ? empresa.usuario : usuario,
      "senha": !senha ? empresa.senha : senha,
      "updateAt": timestamp.currentTimestampWithMoment(),
    }

    query = await db.query(`UPDATE empresa SET
      "razaoSocial" = '${empresaUpdate.razaoSocial}',
      cnpj = '${empresaUpdate.cnpj}',
      logradouro = '${empresaUpdate.logradouro}',
      municipio = '${empresaUpdate.municipio}',
      numero = '${empresaUpdate.numero}',
      complemento = '${empresaUpdate.complemento}',
      bairro = '${empresaUpdate.bairro}',
      cep = '${empresaUpdate.cep}',
      telefone = '${empresaUpdate.telefone}',
      email = '${empresaUpdate.email}',
      site = '${empresaUpdate.site}',
      usuario = '${empresaUpdate.usuario}',
      senha = '${empresaUpdate.senha}',
      "updatedAt" = '${empresaUpdate.updateAt}'
      WHERE empresa.id = ${id} RETURNING *`
    );

    if (query.ok) {
      return res.status(200).json({
        ok: query.ok,
        empresa: query.result.rows[0]
      });
    } else {
      return res.status(400).json({
        ok: query.ok,
        err: query
      });
    }
  },

  async destroy(req, res) {
    const { id } = req.params;

    const query = await db.query(`DELETE FROM empresa WHERE empresa.id = ${id} RETURNING *`);

    console.log(query);

    if (query.ok) {
      return res.status(200).json({
        ok: query.ok,
        empresa: query.result.rows[0]
      });
    } else {
      return res.status(400).json({
        ok: query.ok,
        err: 'Record not found'
      });
    }    
  },
};
