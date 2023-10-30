"use strict";

const ServicoFotos = require("../servico/ServicoFotos");

module.exports = class ControleFotos {


  static async buscarFotosCampeao(req, res) {
    try {
      const fotos = await ServicoFotos.buscarCampeao();
      console.log("Campeao", fotos);
      res.json(fotos);
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
  }// findAll
  
}; // class