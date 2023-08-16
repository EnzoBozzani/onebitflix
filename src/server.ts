import express from 'express';
import { sequelize } from './database';
import { adminJs, adminJsRouter } from './admin';

const app = express();

//mesma coisa wue a rota normal do express, passa primeiro o caminho e depois o router
app.use(adminJs.options.rootPath, adminJsRouter);

//handler do express para servir os arquivos estáticos. No caso, estão na pasta public
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    sequelize.authenticate()
        .then(() => console.log('DB connection successfull'));
    console.log(`Server started successfully at port ${PORT}`);
})