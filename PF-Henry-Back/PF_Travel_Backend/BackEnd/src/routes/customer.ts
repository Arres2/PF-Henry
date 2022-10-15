import { Router} from "express";
import { PrismaClient } from "@prisma/client";
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");


var authMiddleWare = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-8edm2fvn.us.auth0.com/.well-known/jwks.json'
}),
audience: 'http://localhost:5000/user',
issuer: 'https://dev-8edm2fvn.us.auth0.com/',
algorithms: ['RS256']
});



const prisma:PrismaClient = new PrismaClient()


const customerRouter:Router = Router();


  customerRouter.get('/', authMiddleWare,async (req, res) => {
    try {
      console.log(req.body)
      res.status(200).json('Estas en el modulo Users')
    } catch (e) {
      res.status(400).json(e)    
    }  
  })
  customerRouter.post('/',async (req, res) => {
    try {
      console.log(req.body)
      res.status(200).json('Estas en el modulo Users')
    } catch (e) {
      res.status(400).json(e)    
    }  
  })


export {customerRouter}