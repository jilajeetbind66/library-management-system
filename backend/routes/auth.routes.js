import express from 'express'
import {Login,logout} from '../controllers/auth.Controller.js'; 
import userVerify from '../middleware/auth.middleware.js';
const router = express.Router();


router.post('/login',Login);

router.post('/logout',userVerify,logout);

router.get('/me/',userVerify,(req,res)=>{    
return res.status(200).json(req.user)
})





export default router;