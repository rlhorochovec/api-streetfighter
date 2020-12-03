module.exports = app => {
    const lutadores = require("../controllers/lutador.controller.js");

    var router = require("express").Router();

    // Create
    router.post("/", lutadores.create);

    // Retrieve all
    router.get("/", lutadores.findAll);

    // Retrieve a single with id
    router.get("/:id", lutadores.findOne);

    // Update a single with id
    router.put("/:id", lutadores.update);

    // Delete a single with id
    router.delete("/:id", lutadores.delete);

    // Delete all
    router.delete("/", lutadores.deleteAll);

    app.use("/lutadores", router);
};