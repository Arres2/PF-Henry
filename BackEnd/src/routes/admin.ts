import { Router} from "express";




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