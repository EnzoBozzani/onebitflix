require('dotenv').config();

import express from 'express';
import { sequelize } from './database';
import { adminJs, adminJsRouter } from './admin';
import { router } from './routes';

const app = express();

app.use(adminJs.options.rootPath, adminJsRouter);

app.use(express.static('public'));

app.use(express.json())

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    sequelize.authenticate()
        .then(() => console.log('DB connection successfull'));
    console.log(`Server started successfully. URL: [ http://localhost:3000/admin ]`);
})