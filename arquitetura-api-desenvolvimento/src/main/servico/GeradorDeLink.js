const Gatos = require("../Arquivos/Gatos");
const Cachorros = require("../Arquivos/cachorros");
const Campeao = require("../Arquivos/Campeao");

module.exports = function GeradorDeLink(indicador) {


    function gerarNumeroAleatorio() {
        return Math.floor(Math.random() * 1770);
    }

        if (indicador === 1) {
        const numeroAleatorio = gerarNumeroAleatorio();
            const link = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + Campeao[numeroAleatorio];
        return link;
    }
    if (indicador === 2) {
        const numeroAleatorio = gerarNumeroAleatorio();
        const link = Gatos[1];
        return link;
    }
}