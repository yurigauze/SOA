"use strict";

const  GeradorDeLink  = require('./GeradorDeLink');

module.exports = class ServicoFotos {

    static async buscarFotosCampeao() {
            try {
                const link = GeradorDeLink(1);
                return link
            } catch (error) {
                throw new Error("Falha ao buscar fotos: " + error);
            }
        }

            static async buscarFotosGatos() {
        try {
            const link = GeradorDeLink(2);
            return link
        } catch (error) {
            throw new Error("Falha ao buscar fotos: " + error);
        }
    }// buscarFotos// buscarFotos
} // class