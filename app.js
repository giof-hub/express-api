const cors = require('cors');
const express = require('express')
const app = express()
const port = 3000

const routes = require('./app/routes/routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));

app.use(cors({
  origin: '*'
}));

app.use(routes.user);

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
});