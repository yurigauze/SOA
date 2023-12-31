'use strict'

const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);

class Loader {

    static loadAll(app) {
        Loader.loadRoutes(app);
    }

    static loadRoutes(app) {
        let baseDir = (__dirname + '/src/main/rotas');
        fs
            .readdirSync(path.join(baseDir))
            .filter(function (file) {
                return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
            })
            .forEach(function (file) {
                global.logger.info(`Carregando rotas: ${file}`)
                let route = require((path.join(baseDir, file)));
                new route(app);
            });
    }

}

module.exports = Loader;
