const Leilao = require('../models/Leilao');

module.exports = {
  async index(req, res) {
    try {
      const leilao = await Leilao.findAll();

      if (leilao === null) {
        return res.status(404).json({
          leilao: 'Record not found'
        });
       }

      return res.status(200).json({ leilao }); 
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async get(req, res) {
    const { id } = req.params;

    try {
      const leilao = await Leilao.findByPk(id);
       
      if (leilao === null) {
        return res.status(404).json({
          leilao: 'Record not found'
        });
       }

      return res.status(200).json({ leilao }); 
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async store(req, res) {
    const { 
      codigo,
      descricao,
      vendedor,
      inicioPrevisto,
    } = req.body;

    try {
      const leilao = await Leilao.create({
        codigo,
        descricao,
        vendedor,
        inicioPrevisto,
      })
  
      return res.status(200).json({ leilao });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async update(req, res) {

    const { id } = req.params;
    const { 
      codigo,
      descricao,
      vendedor,
      inicioPrevisto,
    } = req.body;

    try {
      const leilao = await Leilao.findByPk(id);

      if (leilao === null) {
        return res.status(404).json({
          leilao: 'Record not found'
        });
       }

      leilao.codigo = !codigo ? leilao.codigo : codigo;
      leilao.descricao = !descricao ? leilao.descricao : descricao;
      leilao.vendedor = !vendedor ? leilao.vendedor : vendedor;
      leilao.inicioPrevisto = !inicioPrevisto ? leilao.inicioPrevisto : inicioPrevisto;

      leilao.save();

      return res.status(200).json({ leilao }); 
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async destroy(req, res) {
    const { id } = req.params;

    try {
      await Leilao.findByPk(id).then((result) => {
        result.destroy()
        .then((u) => {
          return res.status(200).json({ leilao: result });
        });
      });
    } catch (error) {
      return res.status(400).json({ error });
    }   
  },
};
