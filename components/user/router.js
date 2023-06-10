const { validarJWT }= require("../../middlewares/validar_jwt") ;
const  {
    esCorreoExistente,
    esIdentificacionExistente,
    existeUsuarioPorId,
  } =  require ("./utils/validaciones");
  // import { esRoleValido } from "../rol/utils/validaciones";
  
  const { Router }= require ("express");
  const { check } = require ("express-validator");
    const { crearCliente,crearRevisor } = require ("./controller");
  const { validar_campos } = require ("../../middlewares/validar_campos");
const { esAdmin } = require("../../middlewares/validar_roles");

  const router = Router();

  router.post(
    "/cliente",
    [
      
      check("nombre", "El nombre es obligatorio.").not().isEmpty(),
      check("apellido", "El apellido es obligatorio.").not().isEmpty(),
      check("correo", "La dirección de correo electrónico es obligatoria.")
        .not()
        .isEmpty(),
      check(
        "correo",
        "Esta dirección de correo electrónico es invalida"
      ).isEmail(),
        check("correo").custom(esCorreoExistente),
      check("clave", "La contraseña es obligatoria.").not().isEmpty(),
      check("clave", "La contraseña debe tener mas de 8 caracteres.").isLength({
        min: 8,
      }),

      validar_campos,
    ],
    crearCliente
  );


  router.post(
    "/revisor",
    [
      validarJWT,
      esAdmin,
      check("nombre", "El nombre es obligatorio.").not().isEmpty(),
      check("apellido", "El apellido es obligatorio.").not().isEmpty(),
      check("correo", "La dirección de correo electrónico es obligatoria.")
        .not()
        .isEmpty(),
      check(
        "correo",
        "Esta dirección de correo electrónico es invalida"
      ).isEmail(),
        check("correo").custom(esCorreoExistente),
      check("clave", "La contraseña es obligatoria.").not().isEmpty(),
      check("clave", "La contraseña debe tener mas de 8 caracteres.").isLength({
        min: 8,
      }),

      validar_campos,
    ],
    crearRevisor
  );



  module.exports = router;


