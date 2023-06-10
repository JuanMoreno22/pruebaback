const bcrypt = require("bcryptjs") ;
const  Usuario  = require("./../user/model") ;
const { Request, response } = require("express") ;
const  generarJWT  = require ("./utils/jwt");
const { crearLog } = require("../log/utils/crearlog");



 const login = async (req, res = response) => {
    const { correo, clave } = req.body;

    try {
      //verificar si el email existe
      const usuario = await Usuario.findOne({ correo });

      //usuario activo estado
      if (!usuario.estado) {
        return res.status(400).json({
          msg: "Este usuario esta inactivo. Comuniquese con un administrador",
        });
      }
      //verificar contraseña
      const clave_valida = bcrypt.compareSync(clave, usuario.clave);
      if (!clave_valida) {
        return res.status(400).json({
          msg: "Usuario y/o contraseña no son correctos",
        });
      }

      //generar JWT
       await Usuario.findByIdAndUpdate(usuario._id)
      const token = await generarJWT(usuario.id);
      await crearLog("auth","Inicio sesión","Ok",usuario.id)

      res.json({
        usuario,
        token,
      });
    } catch (error) {
      await crearLog("auth","Error Inicio sesión","Error",usuario.id)
      return res.status(500).json({
        msg: "algo salio mal",
        error
      });
    }
  };


  module.exports = {login}