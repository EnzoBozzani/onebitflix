import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'postgres', 
    host: 'localhost',
    port: 5432, 
    database: 'onebitflix_development', 
    username: process.env.USERNAME, 
    password: process.env.PASSWORD,
    define: {
        //o Sequelize converte o que vier do banco de dados para o camelCase, já que o banco usa snake_case
        underscored: true
    }
})
