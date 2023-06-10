const  Log  = require("../model"); 


const crearLog =async (tipo,descripcion,estado,usuario)=>{
    const body ={
        tipo,
        descripcion,
        estado,
        usuario
    } ;
    const log = new Log(body);
    await log.save()
}

module.exports={crearLog}