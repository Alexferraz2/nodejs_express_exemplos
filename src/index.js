/* Assim estava antes de configurar o webpack

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World, agora vai dar certo')
})

app.listen(3000, () => console.log('OnLine: http://localhost:3000'))

*/

//O código após a configuração do webpack

import *as express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('O código após a configuração do webpack')
})

app.post('/', (req, res) => {
  res.send('Post /')
} )

app.put('/', (req, res) => {
  res.send('PUT /')
})

app.delete('/', (req, res) => {
  res.send('DELETE /')
})

app.listen(3000, () => console.log('OnLine: http://localhost:3000'))