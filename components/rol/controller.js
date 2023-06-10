const { Request, response } = require("express") ;
const  Rol  = require("./model") ;



const crearRol = async (req, res = response) => {
    const body = req.body;
    const rol = new Rol(body);
    await rol
      .save()
      .then(() => {
        res.json({
          resp: "Rol creado con exito.",
        });
      })
      .catch((error) => res.status(500).json({ resp: "Error del servidor.",  error }));
  };


  module.exports = {crearRol}