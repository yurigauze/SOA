"use strict";

require("./src/main/servico/ServicoLog");

const express = require("express");
const cors = require("cors");
const path = require("path");
const Loader = require("./Loader");
const Server = require("./Server");

class App {
  
  static async init() {
    let app = new Server();

    var linksPermitidos = [
      "http://localhost:3000",
      "https://localhost:3000",
      "https://localhost:3001",
      "http://localhost:3001",
    ];

    var corsOptions = {
      origin: function (origin, callback) {
        if (linksPermitidos.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    };

    // app.use(cors(corsOptions));
    app.use(cors());

    app.use("/uploads", express.static("uploads"));

    global.appRoot = path.resolve(__dirname);

    // parse requests of content-type - application/json
    app.use(
      express.json({
        limit: "50mb",
      })
    );

    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(
      express.urlencoded({
        limit: "50mb",
        extended: true,
      })
    );

    Loader.loadAll(app);

    // simple route
    app.get("/", (req, res) => {
      res.json({
        project: "Plataforma de Gerenciamento de Arquitetura",
        version: "beta",
        author: "Cadu and Allan",
      });
    });

    // set port, listen for requests
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      global.logger.success(
        `Plataforma de Gerenciamento de Arquitetura API rodando em ${PORT}`
      );
    });
  }
}

App.init();
