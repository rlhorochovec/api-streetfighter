const db = require("../models");
const Fighter = db.fighters;
const Op = db.Sequelize.Op;

// Create and Save
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "O conteúdo não pode estar vazio!"
        });
        return;
    }

    // Create
    const fighter = {
        name: req.body.name,
        country: req.body.country,
    };

    // Save
    Fighter.create(fighter)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocorreu um erro ao salvar o lutador."
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
                    err.message || "Ocorreu um erro ao recuperar os lutadores."
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
                message: `Erro ao recuperar o lutador com o id = ${id}`
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
                    message: "Lutador atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não é possível atualizar o lutador com id = ${id}. Talvez o lutador não tenha sido encontrado ou req.body esteja vazio!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Erro ao atualizar o lutador com o id = ${id}`
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
                    message: "Lutador removido com sucesso."
                });
            } else {
                res.send({
                    message: `Não é possível remover o lutador com id = ${id}. Talvez o lutador não tenha sido encontrado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Erro ao remover o lutador com o id = ${id}`
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
            res.send({ message: `${nums} lutadores foram removidos com sucesso.` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocorreu um erro ao remover todos os lutadores."
            });
        });
};