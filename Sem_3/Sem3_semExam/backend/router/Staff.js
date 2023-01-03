import express from 'express';
import Staff from '../controller/Staff.js'
const router=express.Router()


router.post('/staff/register',Staff.register)
router.post('/staff/login',Staff.Login)




export default router;