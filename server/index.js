const express = require('express')
//const mongoose = require('mongoose')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send(index.html)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/login', (req, res) => {
  const params = req.body
  if (params.user == 'admin' && params.password == 'admin'){
    res.json({data:true})
  } else {
    res.json({data:false})
  }
})