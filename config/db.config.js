module.exports = {
    HOST: "ec2-54-236-169-55.compute-1.amazonaws.com",
    USER: "nvyszotoiwfcfq",
    PASSWORD: "a757bf6a5554b5986cc0ce62ac8451459676c551f653b252b5982de97b93dcd3",
    DB: "d58u097nedu8nm",
    // HOST: "localhost",
    // USER: "postgres",
    // PASSWORD: "admin",
    // DB: "apistreetfighter",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};