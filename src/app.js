const express = require('express');

const controllerPagination = require('./controller');

const app = express();
const PORT = 3000;


app.use(express.json());


app.get('/pagination', controllerPagination)

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
