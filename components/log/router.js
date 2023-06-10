const { Router }= require ("express");
const { check } = require ("express-validator");
const { consultarTodosLogs, consultarLogsUsuario } = require ("./controller");
const { validar_campos } = require ("../../middlewares/validar_campos");
const { validarJWT } = require("../../middlewares/validar_jwt");
const { esAdmin } = require("../../middlewares/validar_roles");
const { existeUsuarioPorId } = require("../user/utils/validaciones");

const router = Router();


router.get(
    "/",
    [
      validarJWT,
      esAdmin
    ],
    consultarTodosLogs
  );

  router.get(
    "/:id",
    [
      validarJWT,
      esAdmin,
      check('id','El id proyecto es obligatorio').not().isEmpty(),
    check('id','El id proyecto no es valido').isLength({min:24,max:24}),
    check('id','El id proyecto no es valido ').isMongoId(),
    // existeUsuarioPorId
    ],
    consultarLogsUsuario
  );


module.exports = router;