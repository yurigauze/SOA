"use strict";

const ServicoFotos = require("../servico/ServicoFotos");

module.exports = class ControleFotos {

  static async buscarFotosCampeao(req, res) {
    try {
      const fotos = await ServicoFotos.buscarFotosCampeao();
      console.log("Campeao", fotos);
      res.json(fotos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }//
  
  static async buscarFotosGatos(req, res) {
    try {
      const fotos = await ServicoFotos.buscarFotosGatos();
      console.log("gatos", fotos);
      res.json(fotos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}; // class