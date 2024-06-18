import { Router } from 'express'

import { signup } from './useService'

const router = Router()
router.use('/signup', (req, res) => {
    try {const answer = signup(req.body)
    res.send(answer)
    } catch (error) {
      if(error.message === "email_inexistente")
        return res.status(400).send(error.message)
      res.status(500).send(error.message)
    }
  })
  
  
  router.use('login', (req, res) => {
    res.send('LOGUIN')
  })


export default router

