import { Router} from "express";
import { PrismaClient } from "@prisma/client";




const prisma:PrismaClient = new PrismaClient()


const customerRouter:Router = Router();




// customerRouter.use('/CreateCustomer', cors(corsOptions)).post((req,res)=>{
//     try {
//       res.status(200).json("El Modulo /CreateCustomer se encuentra en desarrollo")
//     } catch (e) {
//       res.status(400).json(e)
//     }
//   })


  customerRouter.post('/UpdateCustomer', async (req, res) => {
    try {
      res.status(200).json("El Modulo /UpdateUser se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  customerRouter.get('/Customer', async (req, res) => {
    try {
      const costumers = await prisma.customer.findMany()
      res.status(200).json(costumers)
    } catch (e) {
      res.status(400).json(e)    
    }  
  })

  customerRouter.get('/', async (req, res) => {
    try {
      res.status(200).json('Estas en el modulo Users')
    } catch (e) {
      res.status(400).json(e)    
    }  
  })


export {customerRouter}