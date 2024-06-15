import { Router } from 'express'

import { signup } from './useService'

const router = Router()
router.use('/signup', (req, res) => {
    const answer = signup(req.body)
    res.send(answer)
  })
  
  
  router.use('login', (req, res) => {
    res.send('LOGUIN')
  })


export default router

