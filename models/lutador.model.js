module.exports = (sequelize, Sequelize) => {
    const Lutador = sequelize.define("lutadores", {
        nome: {
            type: Sequelize.STRING
        },
        nacionalidade: {
            type: Sequelize.STRING
        },
    });
    return Lutador;
};