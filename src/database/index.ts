import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'postgres', 
    host: 'localhost',
    port: 5432, 
    database: 'onebitflix_development', 
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    define: {
        underscored: true
    }
})
