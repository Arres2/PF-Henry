import { Router } from 'express';
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const packageRouter = Router();


packageRouter.get('/TouristPackage', async (req, res) => {
    try {
      res.status(200).json("El Modulo /TouristPackage se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })
  


export {packageRouter};
