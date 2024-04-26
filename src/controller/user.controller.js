
import { readAllUsers,createUpdateUser,getUserById,deleteUser } from "../db/db.user.js"

export const listaUsuarios = async (req,res)=>{
    try {
        const users = await readAllUsers()
        if (users.success) {
            console.log('Datos obtenidos:', users.data);
            return res.status(200).json({success:users.success,data:users.data});
        } else {
            // Si no se obtienen datos, devuelve un error 404
            return res.status(404).json({ message: 'No se encontraron usuarios.' });
        }
    } catch (error) {
        return res.status(500).json( {messsage: 'error'});
    }  
}


export const crearUsuario = async (req,res)=>{
    try {
        console.log('body',req.body)
        console.log('dni',req.body.dni)
        //validar si existe usuario
        const validar = await getUserById(req.body.dni);
        console.log('validando',validar.success)
        if(validar.success){
            return res.status(200).json({success:false,data:'Usuario ya existe'})
        }
        const {success,data} = await createUpdateUser(req.body)
        return res.json({success,data})
    } catch (error) {
        return res.status(500).json({messsage:'error'})
    }
}


export const obtenerUsuario = async (req,res)=>{
    try {
        const {dni} = req.params
        const {success,data}=await getUserById(dni);
        
        return res.status(200).json({success,data})
    } catch (error) {
        console.log(error)
        return res.status(500).json({messsage:'error'})
    }
}

export const eliminarUsuario = async (req,res)=>{
    try {
        const {dni}=req.params;
        const {success} = await deleteUser(dni);
        return res.status(200).json({success})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'error'})
    }
}