const { validarCorreoExistente } = require ("../user/utils/validaciones"); ;
const { validar_campos } = require ("./../../middlewares/validar_campos") ;
const { check } = require ("express-validator") ;

const { Router } = require ("express") ;
const { login } = require ("./controller") ;
const { validarJWT } = require ("../../middlewares/validar_jwt") ;


const router = Router();

router.post(
    "/",
    [
      check("correo", "La dirección de correo electrónico es obligatoria.").not().isEmpty(),
      check("correo", "Esta dirección de correo electrónico es invalida.").isEmail(),
      check("correo").custom(validarCorreoExistente),
      // verificacion de estado
  
      check("clave", "La contraseña es obligatoria.").not().isEmpty(),
  
      validar_campos,
    ],
    login
  );



  module.exports = router;