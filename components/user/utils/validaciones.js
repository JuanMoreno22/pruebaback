const  Usuario  = require("../model") ;

 const esCorreoExistente = async (correo = "") => {
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error(
      `Esta dirección de correo electrónico ya está en uso. Por favor, pruebe con otra.`
    );
  }
};

 const validarCorreoExistente = async (correo = "") => {
  const existeEmail = await Usuario.findOne({ correo });
  if (!existeEmail) {
    throw new Error(
      `Esta dirección de correo electrónico no existe. Por favor, registrese.`
    );
  }
};

 const esIdentificacionExistente = async (identificacion = "") => {
  const existeEmail = await Usuario.findOne({ identificacion });
  if (existeEmail) {
    throw new Error(
      `Esta identificación ya está en uso. Por favor, pruebe con otra.`
    );
  }
};

 const existeUsuarioPorId = async (id = "") => {
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`El usuario con id ${id} no existe.`);
  }
};
module.exports = {
    esCorreoExistente,validarCorreoExistente,esIdentificacionExistente,existeUsuarioPorId
}
