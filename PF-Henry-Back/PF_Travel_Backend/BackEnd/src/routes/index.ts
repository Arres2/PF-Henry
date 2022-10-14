import { Router } from 'express'
import {customerRouter} from './customer'
import {hotelRouter} from './hotel'
import {ticketRouter} from './ticket'
import {excursionRouter} from './excursion'
import { packageRouter } from './package'
import {adminRouter} from "./admin"
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

const indexRouter = Router()

const authMiddleWare = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: process.env.AUTH_JWKS_URI,
    }),
    audience: process.env.AUTH0_AUDIENCE,
    issuer: process.env.AUTH0_ISSUER,
    algorithms: ["RS256"],
  });

indexRouter.use('/admin', authMiddleWare, adminRouter)
indexRouter.use('/user',authMiddleWare ,customerRouter)
indexRouter.use('/hotel', authMiddleWare,hotelRouter)
indexRouter.use('/excursion',authMiddleWare ,excursionRouter)
indexRouter.use('/ticket' ,ticketRouter)
indexRouter.use('/package', packageRouter)
indexRouter.get("/login", (req, res)=>{
  console.log(req)
  res.send("LOGEADO")
})

export {indexRouter}