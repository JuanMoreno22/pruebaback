const { Schema, model }= require("mongoose") ;


const rolSchema= new Schema(
    {
        nombre: {
            type: String,
            required: true,
          },
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt"
          },
    }
)

rolSchema.methods.toJSON = function () {
    const { __v, ...rol } =
      this.toObject();
    return rol;
  };

const Rol = model("rol", rolSchema);
module.exports= Rol