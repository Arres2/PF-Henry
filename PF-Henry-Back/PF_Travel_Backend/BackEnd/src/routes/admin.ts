import { Router} from "express";
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");
const jwtScope = require("express-jwt-scope");
const { statusUpdater } = require("./controllers.js");

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
  

const adminRouter:Router = Router();

adminRouter.post('/dashboard', (req, res) => {
    console.log('validacion con admin')
    res.send(req.user)
})

adminRouter.post('/create', (req, res) => {
    console.log('validacion admin')
    res.send('validacion con JWT')

})

export {adminRouter}