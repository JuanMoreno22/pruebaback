const  { Request, response } = require("express") ;
const  Usuario =   require("../components/user/model") ;
const { idAdmin } = require("../components/rol/utils/consultor");

 const esAdmin = async(req, res = response, next)=>{
  const usuario=req.usuarioLogueado
  const user=  await  Usuario.findById(usuario._id)

  if(user.rol.toString()!=idAdmin()){
    return res
      .status(400)
      .json({ error: "No tiene autorización para realizar esta acción" });
  }
    next()
}

module.exports ={
    esAdmin
}