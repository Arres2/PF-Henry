import { Router} from "express";
import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



const hotelRouter:Router = Router();

hotelRouter.post('/CreateHotel', async (req, res) => {
    try {
      res.status(200).json("El Modulo /CreateHotel se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  hotelRouter.post('/CreateAccommodation', async (req, res) => {
    try {
      res.status(200).json("El Modulo /CreateAccommodation se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  hotelRouter.post('/UpdateHotel', async (req, res) => {
    try {
      res.status(200).json("El Modulo /UpdateHotel se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  hotelRouter.post('/UpdateAccommodation', async (req, res) => {
    try {
      res.status(200).json("El Modulo /UpdateAccommodation se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  hotelRouter.get('/Hotel', async (req, res) => {
    try {
      const hotels = await prisma.hotel.findMany()
      res.status(200).json(hotels)
    } catch (e) {
      res.status(400).json(e) 
    }
  })

  hotelRouter.get('/Services', async (req, res) => {
    try {
      const services = await prisma.services.findMany()
      res.status(200).json(services)
    }  catch (e) {
      res.status(400).json(e)
    }
  })

  hotelRouter.get('/Accommodations', async (req, res) => {
    try {
      res.status(200).json("El Modulo /Accommodations se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

export {hotelRouter}