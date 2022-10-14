import { Router } from 'express';
import { Prisma, PrismaClient } from '@prisma/client'
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

const prisma = new PrismaClient()

const packageRouter = Router();

const authMiddleWare = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.AUTH_JWKS_URI,
  }),
  audience: process.env.AUTH_AUDIENCE,
  issuer: process.env.AUTH_ISSUER,
  algorithms: ["RS256"],
});

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-8edm2fvn.us.auth0.com/.well-known/jwks.json'
}),
audience: 'https://localhost:5000/admin',
issuer: 'https://dev-8edm2fvn.us.auth0.com/',
algorithms: ['RS256']
});




packageRouter.get('/', async (req, res) => {
    try {
      res.status(200).json("El Modulo /TouristPackage se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

packageRouter.post('/create', authMiddleWare , async (req, res) => {
  try {
    res.status(200).json("El Modulo /TouristPackage se encuentra en desarrollo")
  } catch (e) {
    res.status(400).json(e)
  }
})

packageRouter.put('/:packageId', authMiddleWare , async (req, res) => {
  try {
    res.status(200).json("El Modulo /TouristPackage se encuentra en desarrollo")
  } catch (e) {
    res.status(400).json(e)
  }
})


  


export {packageRouter};
