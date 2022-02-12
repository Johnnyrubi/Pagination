const express = require('express');
const rescue = require('express-rescue')

const controllerPagination = require('./controller');
const erro = require("./utils/erro")

const app = express();
const PORT = 3000;


app.use(express.json());

app.get('/pagination/', rescue(controllerPagination))

app.use(erro)

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
