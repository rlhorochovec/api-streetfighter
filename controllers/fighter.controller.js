const db = require("../models");
const Fighter = db.fighters;
const Op = db.Sequelize.Op;

// Create and Save
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Body cannot be empty!"
        });
        return;
    }

    // Create
    const fighter = {
        name: req.body.name,
        country: req.body.country,
        thumbnailUrl: req.body.thumbnailUrl
    };

    // Save
    Fighter.create(fighter)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while saving the record."
            });
        });
};

// Retrieve all from the database
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    Fighter.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while retrieving records."
            });
        });
};

// Find a single
exports.findOne = (req, res) => {
    const id = req.params.id;

    Fighter.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving record with id = ${id}`
            });
        });
};

// Update by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Fighter.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Registration updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update record with id = ${id}. Maybe the record was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating record with id = ${id}`
            });
        });
};

// Delete a single with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Fighter.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Registration successfully removed."
                });
            } else {
                res.send({
                    message: `Cannot remove record with id = ${id}. Perhaps the record was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error removing record with id = ${id}`
            });
        });
};

// Delete all from the database.
exports.deleteAll = (req, res) => {
    Fighter.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} records were successfully removed.` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while removing all records."
            });
        });
};