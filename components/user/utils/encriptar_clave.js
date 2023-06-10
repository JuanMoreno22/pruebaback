const  bcrypt = require("bcryptjs") ;
const encriptar = (clave = "") => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(clave, salt);
};

module.exports =encriptar
