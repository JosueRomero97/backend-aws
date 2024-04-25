
import { readAllUsers } from "../db/db.user.js"

export const getAllUsers = async (req,res)=>{
    const rpt = await readAllUsers()
    console.log('rpt',rpt)
    res.json('lista de usuario')
}