const { Request, response } = require("express") ;
const  Log  = require("./model") ;
const formatearLogs = require("./utils/formateo");




const consultarTodosLogs = async (req, res = response) => {
    const logs= await Log.find()
    .select("tipo descripcion estado usuario createdAt ")
    .populate({
        path: "usuario",
        model: "usuario",
        select: "nombre apellido correo  -_id  ",
        populate:{
            path: "rol",
            model: "rol",
            select: "nombre -_id ",
          }
      })
    if(!logs)
      return res.status(404).json({msg:'Logs no encontrados'})
    res.json(formatearLogs(logs))
  };


  const consultarLogsUsuario = async (req, res = response) => {

    const {id}=req.params
    const logs= await Log.find({usuario: id})
    .select("tipo descripcion estado usuario createdAt ")
    .populate({
        path: "usuario",
        model: "usuario",
        select: "nombre apellido correo  -_id  ",
        populate:{
            path: "rol",
            model: "rol",
            select: "nombre -_id ",
          }
      })
    if(!logs)
      return res.status(404).json({msg:'Logs no encontrados'})
    res.json(formatearLogs(logs))
  };

module.exports = {consultarTodosLogs,consultarLogsUsuario}