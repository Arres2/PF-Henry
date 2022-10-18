import { Router} from "express";

const localRouter:Router = Router();

localRouter.post('/login', (req, res) => {
    console.log('validacion con local')
    res.send(req.user)
})

localRouter.post('/callback', (req, res) => {
    console.log('validacion local')
    res.send('validacion con JWT')

})

export {localRouter}