const Unidade = require('../models/Unidade');

module.exports = {
  async index(req, res) {
    try {
      const unidades = await Unidade.findAll();

      if (unidades === null) {
        return res.status(404).json({
          unidades: 'Record not found'
        });
       }

      return res.status(200).json({ unidades }); 
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async get(req, res) {
    const { id } = req.params;

    try {
      const unidade = await Unidade.findByPk(id);
       
      if (unidade === null) {
        return res.status(404).json({
          unidade: 'Record not found'
        });
       }

      return res.status(200).json({ unidade }); 
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async store(req, res) {
    const { 
      nome,
    } = req.body;

    try {
      const unidade = await Unidade.create({
        nome,
      })
  
      return res.status(200).json({ unidade });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async update(req, res) {

    const { id } = req.params;
    const { 
      nome,
    } = req.body;

    try {
      const unidade = await Unidade.findByPk(id);

      if (unidade === null) {
        return res.status(404).json({
          unidade: 'Record not found'
        });
       }

      unidade.nome = !nome ? unidade.nome : nome;

      unidade.save();

      return res.status(200).json({ unidade }); 
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async destroy(req, res) {
    const { id } = req.params;

    try {
      await Unidade.findByPk(id).then((result) => {
        result.destroy()
        .then((u) => {
          return res.status(200).json({ unidade: result });
        });
      });
    } catch (error) {
      return res.status(400).json({ error });
    }   
  },
};
