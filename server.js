/**
 * Sobe o servidor e configura o express e suas rotas
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const empresaController = require('./api/empresaController');

const app = express();

app.set('view engine', 'html');
// app.set("view options", {layout: false});
app.use(express.static(path.join(__dirname, '/assets')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3333);

console.log(`> Your app is running on port 3333`);

app.get('/', function(req, res) {
    res.status(200).render('index.html');
});

app.get('/empresa', empresaController.index);
app.get('/empresa/:id', empresaController.get);
app.post('/empresa',empresaController.store);
app.put('/empresa/:id', empresaController.update);
app.delete('/empresa/:id', empresaController.destroy);
