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
    audience: process.env.AUTH_AUDIENCE,
    issuer: process.env.AUTH_ISSUER,
    algorithms: ["RS256"],
  });

indexRouter.use('/', (req, res, next) => {
    //res.send("estamos en el index")
    res.send("HOLIWIS")
    next()
})
indexRouter.use('/admin', authMiddleWare, adminRouter)
indexRouter.use('/user',authMiddleWare ,customerRouter)
indexRouter.use('/hotel', authMiddleWare,hotelRouter)
indexRouter.use('/excursion',authMiddleWare ,excursionRouter)
indexRouter.use('/ticket', authMiddleWare ,ticketRouter)
indexRouter.use('/package', packageRouter)
indexRouter.get("/callback")

export {indexRouter}