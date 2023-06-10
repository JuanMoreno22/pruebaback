const { Request, response } = require ("express");
const { validationResult } = require ("express-validator");

 const validar_campos = (req= Request, res = response, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = errors
      .array({ onlyFirstError: true })
      .map(({ msg }) => ({ msg }));

    return res.status(400).json(error);
  }
  next();
};

module.exports ={validar_campos}
