/**
 * Sobe o servidor e configura o express e suas rotas
 */
const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const empresaController = require('./api/empresaController');
const leilaoController = require('./api/leilaoController');
const loteController = require('./api/loteController');
const unidadeController = require('./api/unidadeController');

require('./database');

const app = express();

app.set('view engine', 'html');
// app.set("view options", {layout: false});
// app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use(express.static(path.resolve(__dirname, '..', 'assets')));
app.use('/assets', express.static('/assets'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3333);

console.log(`> Your app is running on port 3333`);

app.get('/', function(req, res) {
    res.status(200).render('index.html');
});

// This route deals enables HTML5Mode by forwarding missing files to the index.html
// app.all('/*', function(req, res) {
//     res.sendFile('index.html');
// });

// app.use('/assets', function(req, res, next) {
//     res.send(404);
// });

app.get('/empresa', empresaController.index);
app.get('/empresa/:id', empresaController.get);
app.post('/empresa',empresaController.store);
app.put('/empresa/:id', empresaController.update);
app.delete('/empresa/:id', empresaController.destroy);

app.get('/leilao', leilaoController.index);
app.get('/leilao/:id', leilaoController.get);
app.post('/leilao', leilaoController.store);
app.put('/leilao/:id', leilaoController.update);
app.delete('/leilao/:id', leilaoController.destroy);

app.get('/lote', loteController.index);
app.get('/lote/:id', loteController.get);
app.post('/lote', loteController.store);
app.put('/lote/:id', loteController.update);
app.delete('/lote/:id', loteController.destroy);

app.get('/unidade', unidadeController.index);
app.get('/unidade/:id', unidadeController.get);
app.post('/unidade', unidadeController.store);
app.put('/unidade/:id', unidadeController.update);
app.delete('/unidade/:id', unidadeController.destroy);
