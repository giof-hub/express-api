const express = require('express')
const app = express()
const port = 3000

const routes = require('./app/routes/routes');

app.use(routes.user);

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
