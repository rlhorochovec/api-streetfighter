module.exports = (sequelize, Sequelize) => {
    const Fighter = sequelize.define("fighters", {
        name: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        thumbnailUrl: {
            type: Sequelize.STRING
        },
    });
    return Fighter;
};