import { sign, verify } from 'jsonwebtoken'

const AUTH_SECRET = 'secret'


export const generateAccessToken = (data) => sign(data, AUTH_SECRET)

export const verifyAccessToken = (req, res, next) => {
    try {
        const { authorization} = req.cookies
        if(!authorization) throw new Error('auhotorization_not_found')

        const user = verify(authorization, AUTH_SECRET)
        req.user = user
        next()
    } catch (error) {
        res.status(401).send()
    }
}