const Lote = require('../models/Lote');

module.exports = {
  async index(req, res) {
    try {
      const lotes = await Lote.findAll();

      if (lotes === null) {
        return res.status(404).json({
          lotes: 'Record not found'
        });
       }

      return res.status(200).json({ lotes }); 
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async get(req, res) {
    const { id } = req.params;

    try {
      const lote = await Lote.findByPk(id);
       
      if (lote === null) {
        return res.status(404).json({
          lote: 'Record not found'
        });
       }

      return res.status(200).json({ lote }); 
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async store(req, res) {
    const { 
      numeroLote,
      descricao,
      quantidade,
      valorInicial,
      unidade,
      leilao,
    } = req.body;

    try {
      const lote = await Lote.create({
        numeroLote,
        descricao,
        quantidade,
        valorInicial,
        unidade,
        leilao,
      })
  
      return res.status(200).json({ lote });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async update(req, res) {

    const { id } = req.params;
    const { 
      numeroLote,
      descricao,
      quantidade,
      valorInicial,
      unidade,
      leilao,
    } = req.body;

    try {
      const lote = await Lote.findByPk(id);

      if (lote === null) {
        return res.status(404).json({
          lote: 'Record not found'
        });
       }

      lote.numeroLote = !numeroLote ? lote.numeroLote : numeroLote;
      lote.descricao = !descricao ? lote.descricao : descricao;
      lote.quantidade = !quantidade ? lote.quantidade : quantidade;
      lote.valorInicial = !valorInicial ? lote.valorInicial : valorInicial;
      lote.unidade = !unidade ? lote.unidade : unidade;
      lote.leilao = !leilao ? lote.leilao : leilao;

      lote.save();

      return res.status(200).json({ lote }); 
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async destroy(req, res) {
    const { id } = req.params;

    try {
      await Lote.findByPk(id).then((result) => {
        result.destroy()
        .then((u) => {
          return res.status(200).json({ lote: result });
        });
      });
    } catch (error) {
      return res.status(400).json({ error });
    }   
  },
};
