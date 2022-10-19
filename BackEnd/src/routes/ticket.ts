import { Router} from "express";
import { Prisma, PrismaClient } from '@prisma/client'
import getTickets from "../services/tickets";

const prisma = new PrismaClient()



const ticketRouter:Router = Router();

ticketRouter.get('/Ticket', async (req, res) => {
  try {
    res.status(200).json(getTickets(req.query))
  } catch (e) {
    res.status(400).json(e)
  }
})

ticketRouter.post('/SaveTicket', async (req, res) => {
    try {
      res.status(200).json("El Modulo /CreateTicket se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  ticketRouter.post('/UpdateTicket', async (req, res) => {
    try {
      res.status(200).json("El Modulo /UpdateTicket se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  ticketRouter.get('/DeleteTicket', async (req, res) => {
    try {
      res.status(200).json(getTickets(req.query))
    } catch (e) {
      res.status(400).json(e)
    }
  })




export {ticketRouter}