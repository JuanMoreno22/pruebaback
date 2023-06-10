const { Schema, model }= require("mongoose") ;


const logSchema= new Schema(
    {
        tipo: {
            type: String,
            required: true,
          },
          descripcion: {
            type: String,
            required: true,
          },
          estado: {
            type: String,
            required: true,
          },
          usuario: {
            type: Schema.Types.ObjectId,
             ref: "usuario",
             required: true
          }
    },
    {
        timestamps: {
            createdAt: "createdAt",
          },
    }
)

logSchema.methods.toJSON = function () {
    const { __v, ...log } =
      this.toObject();
    return log;
  };


const Log = model("Log", logSchema);
module.exports= Log