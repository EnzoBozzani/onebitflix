require('dotenv').config();

module.exports = {
    development: {
        dialect: 'postgres', 
        host: 'localhost', 
        port: '5432', 
        database: 'onebitflix_development', 
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    }
}