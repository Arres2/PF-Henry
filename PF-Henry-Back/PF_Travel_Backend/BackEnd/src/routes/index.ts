import { Router } from 'express'
import {customerRouter} from './customer'
import {hotelRouter} from './hotel'
import {ticketRouter} from './ticket'
import {excursionRouter} from './excursion'
import { packageRouter } from './package'
import { authRouter } from './auth'
import {adminRouter} from "./admin"

const indexRouter = Router()


indexRouter.use('/', (req, res, next) => {
    //res.send("estamos en el index")
    res.send("HOLIWIS")
    next()
})
indexRouter.use('/admin', adminRouter)
indexRouter.use('/user', customerRouter)
indexRouter.use('/hotel', hotelRouter)
indexRouter.use('/excursion', excursionRouter)
indexRouter.use('/ticket', ticketRouter)
indexRouter.use('/package', packageRouter)
indexRouter.use("/auth",authRouter)

export {indexRouter}