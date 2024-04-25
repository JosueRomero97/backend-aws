import { docClient, tableUser } from "../config/db.config.js";


const readAllUsers = async ()=>{
    const params ={
        TableName : tableUser
    }
    try {
        const respues = await docClient.scan(params);
        console.log('respuesta',respues);

    } catch (error) {
        console.log('error',error)
    }
}

export {
    readAllUsers
}