const mongoose = require("mongoose") ;

 class dbConecction {
  

  constructor() {
    this.mongo_key = process.env.MONGO || "";
  }

  async conexion() {
    try {
      await mongoose.connect(this.mongo_key);
      console.log("Base de datos conectada");
    } catch (error) {
      console.log(error);
      throw new Error("Error en la base de datos");
    }
  }
}

module.exports=   dbConecction

