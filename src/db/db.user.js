import { docClient, tableUser } from "../config/db.config.js";


const readAllUsers = async ()=>{
    const params ={
        TableName : tableUser
    }
    try {
        docClient.scan(params,function(err,data){
            if(err){
                console.log('error en params',err)
            }else{
                console.log('succes',data)
            }
        });

    } catch (error) {
        console.log('error',error)
    }
}

export {
    readAllUsers
}