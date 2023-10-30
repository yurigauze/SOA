"use strict";

const { default: GeradorDeLink } = require("./GeradorDeLink.jsx");


module.exports = class ServicoFotos {


    static async buscarCampeao() {
        try {
            const link = GeradorDeLink();
            return link
        } catch (error) {
            throw new Error("Falha ao buscar fotos: " + error);
        }
    } // buscarFotos
} // class