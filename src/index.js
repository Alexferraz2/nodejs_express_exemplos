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
app.use(express.json())
import userController from './modules/User/userController'
import postController from './modules/Post/postController'

app.use('/user', userController)
app.use('/post', postController)

/*app.get('/', (req, res) => {
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

app.listen(3000, () => console.log('OnLine: http://localhost:3000'))*/



app.get('/post/:id?', (req, res) => {
  res.send('GET Post')
})


app.listen(3000, () => console.log('OnLine: http://localhost:3000'))