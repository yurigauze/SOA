"use strict";

const ControleFotos = require("../controle/ControleFotos");

module.exports = class RotaFotos {
  constructor(app) {
    app
      .route("/fotos/campeao")
      .get(ControleFotos.buscarFotosCampeao);
  
    app
      .route("/fotos/gatos")
      .get(ControleFotos.buscarFotosGatos);
  }
}; // class