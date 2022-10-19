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


indexRouter.use('/admin', adminRouter)
indexRouter.use('/user', customerRouter)
indexRouter.use('/hotel',hotelRouter)
indexRouter.use('/excursion',excursionRouter)
indexRouter.use('/ticket' ,ticketRouter)
indexRouter.use('/package', packageRouter)


export {indexRouter}