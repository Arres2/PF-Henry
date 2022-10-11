import { Router} from "express";
import passport from "passport";

const googleRouter:Router = Router();

googleRouter.get('/login', passport.authenticate("google"), (req,res)=>{

  console.log(req.headers)
}
        // The account at Google has not logged in to this app before.  Create a
        // new user record and associate it with the Google account.

        // The account at Google has previously logged in to the app.  Get the
        // user record associated with the Google account and log the user in.
  )

googleRouter.get('/callback', passport.authenticate("google",{failureRedirect:"/login/failure" ,successRedirect:"/login/success"}))

googleRouter.get('/login/success', (req,res)=>{
  res.status(200).json({
    message: "Success",
    user: req.user? req.user :"No user"
  })
})
googleRouter.get('/login/failure', (req,res)=>{
  res.status(400).json({
    message: "Failed",
    user: req.user? req.user :"No user"
  })
})


export {googleRouter}