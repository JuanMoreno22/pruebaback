const  { Request, response } = require("express") ;
const  Usuario  = require("./model");
const encriptar = require ("./utils/encriptar_clave");
const { idRevisor, idCliente } = require("../rol/utils/consultor");

 const crearCliente = async (req, res = response) => {
    const body = req.body;
    const usuario = new Usuario(body);
    usuario.clave = encriptar(usuario.clave);
    usuario.rol=idCliente()
    await usuario
      .save()
      .then(() => {
        res.json({
          resp: "Cliente creado con exito.",
        });
      })
      .catch((error) => res.status(500).json({ resp: "Error del servidor.",  error }));
  };


  const crearRevisor = async (req, res = response) => {
    const body = req.body;
    const usuario = new Usuario(body);
    usuario.clave = encriptar(usuario.clave);
    usuario.rol= idRevisor()
    await usuario
      .save()
      .then(() => {
        res.json({
          resp: "Revisor creado con exito.",
        });
      })
      .catch((error) => res.status(500).json({ resp: "Error del servidor.",  error }));
  };

module.exports ={crearCliente,crearRevisor}

