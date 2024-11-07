const express = require('express')
const app = express()

const port = 4444

app.get('/', (req, res) =>
  {
    res.sendFile('./src/index.html')
  })



  


app.listen(port, async () => 
  {
      console.log(` server esta rodando na porta ${port}`)
  })