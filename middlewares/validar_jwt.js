const  Usuario  = require('../components/user/model'); ;
const jwt = require("jsonwebtoken");
const { Request, response } =require("express") ;

 const validarJWT = async(req , res = response, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(400).json({
      msg: "No hay token en la peticion",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.JWT_SECRET_KEY);

    //identificador de usuario autenticado
    
    const usuario= await Usuario.findById(uid)
    req.usuarioLogueado = usuario;


    next();
  } catch (error) {
    res.status(401).json({
      msg: "Token no valido",
    });
  }
};

module.exports ={validarJWT}