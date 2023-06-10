const { Schema, model }= require("mongoose") ;


const userSchema= new Schema(
    {
        nombre: {
            type: String,
            required: true,
          },
          apellido: {
            type: String,
            required: true,
          },
          correo: {
            type: String,
            required: true,
            unique: true,
          },
          clave: {
            type: String,
            required: true,
          },
          rol: {
            type: Schema.Types.ObjectId,
             ref: "rol",
             required: true
          },
          estado: {
            type: Boolean,
            required: true,
            default: true,
          },
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
          },
    }

)

userSchema.methods.toJSON = function () {
    const { __v, createdAt, updatedAt,estado,clave, ...user } =
      this.toObject();
    return user;
  };


const Usuario = model("usuario", userSchema);

module.exports= Usuario