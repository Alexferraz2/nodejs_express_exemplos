import { Router } from 'express'

import { signup, login } from './useService'

const AUTH_COOKIE_NAME = 'authorization'
const router = Router()
router.post('/signup', (req, res) => {
    try {
      const token = signup(req.body)
    res.cookie(AUTH_COOKIE_NAME, token).status(201).send()
    } catch (error) {
      if(error.message === "email_inexistente")
        return res.status(400).send(error.message)
      res.status(500).send(error.message)
    }
  })
  
  
  router.post('login', (req, res) => {
    try {
      const token = login(req.body)
      res.cookie(AUTH_COOKIE_NAME, token).status(200).send()
    } catch (error) {
        if(error.message === 'email_nao_encontrado' || error.message === 'senha_incorreta')
          return res.status(400).send(error.message)
        res.status(500).send()
    }
  })


export default router

