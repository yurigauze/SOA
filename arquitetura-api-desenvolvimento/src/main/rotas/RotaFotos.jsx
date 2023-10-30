"use strict";

const ControleFotos = require("../controle/ControleFotos");

module.exports = class RotaFotos {
  constructor(app) {
      app
      .route("/fotos/campeao")
      .get(ControleFotos.buscarFotosCampeao);
  } // constructor()
}; // class