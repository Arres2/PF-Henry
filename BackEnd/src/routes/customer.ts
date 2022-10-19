import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");


var authMiddleWare = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: process.env.AUTH_JWKS_URI
}),
audience: process.env.AUTH_AUDIENCE,
issuer: process.env.AUTH_ISSUER,
algorithms: ['RS256']
});



const prisma:PrismaClient = new PrismaClient()


const customerRouter:Router = Router();


customerRouter.route("/")
  .get( authMiddleWare,async (req:Request, res:Response) => {
    try {
      const email: string = req.query.email as string;
      const name: string = req.query.name as string;
      const picture: string = req.query.picture as string;
      const isVerified: boolean = Boolean(req.query.isVerified);
     const user = await prisma.customer.findUnique({
      where: {
        email:  email,
      },
    })
 
    if(user===null){
      const newUser = await prisma.customer.create({
        data:{
          email: email,
          name: name,
          picture: picture,
          isVerified: isVerified
          
        }
      })
      res.status(200).json({...newUser})
    }
    else{

      res.status(200).json({...user})
    }
    //instruccion 1 es redirigir a pagina y devolver a home
    //instruccion 0 es redirigir a formulario de registro y obtener mas data
    } catch (e) {
      res.status(400).json(e)    
    }  
  })
  .post(async (req, res) => {
    try {
      console.log(req.body)
      res.status(200).json('Estas en el modulo Users')
    } catch (e) {
      res.status(400).json(e)    
    }  
  })
  // .patch(async (req:Request,res:Response)=>{
  //     const id: string = req.body.id as string;
  //     const name: string = req.body.name as string;
  //     const picture: string = req.body.picture as string;
  //     const isVerified: boolean = Boolean(req.body.isVerified);
  //    const user = await prisma.customer.findUnique({
  //     where: {
  //       id:  id,
  //     },
  // })


export { customerRouter };
