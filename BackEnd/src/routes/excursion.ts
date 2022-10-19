import { Router} from "express";
import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()




const excursionRouter:Router = Router();

excursionRouter.post('/CreateExcursion', async (req, res) => {
    try {
      res.status(200).json("El Modulo /CreateExcursion se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  excursionRouter.post('/UpdateExcursion', async (req, res) => {
    try {
      res.status(200).json("El Modulo /UpdateExcursion se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  excursionRouter.get('/Excursion', async (req, res) => {
    try {
      res.status(200).json("El Modulo /Excursion se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

export {excursionRouter}