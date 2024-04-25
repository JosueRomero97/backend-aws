import { Router } from "express";
import * as userCtrl  from '../controller/user.controller.js'
const router = Router();

router.get('/list',userCtrl.getAllUsers);

export default router;