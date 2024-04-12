module.exports = app => {
    const fighters = require("../controllers/fighter.controller.js");

    var router = require("express").Router();

    // Create
    router.post("/", fighters.create);

    // Retrieve all
    router.get("/", fighters.findAll);

    // Retrieve a single with id
    router.get("/:id", fighters.findOne);

    // Update a single with id
    router.put("/:id", fighters.update);

    // Delete a single with id
    router.delete("/:id", fighters.delete);

    // Delete all
    router.delete("/", fighters.deleteAll);

    app.use("/api/fighters", router);
};