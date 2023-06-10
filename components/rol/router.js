const { Router }= require ("express");
const { check } = require ("express-validator");
const { crearRol } = require ("./controller");
const { validar_campos } = require ("../../middlewares/validar_campos");

const router = Router();


router.post(
    "/",
    [
      check("nombre", "El nombre es obligatorio.").not().isEmpty(),
      validar_campos,
    ],
    crearRol
  );


module.exports = router;