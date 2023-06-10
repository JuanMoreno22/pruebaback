const express = require('express')
const cors = require('cors');

const usuarioRouter= require("../../components/user/router"); ;
const authRouter= require("../../components/auth/router"); 
const rolRouter= require("../../components/rol/router"); 
const logRouter= require("../../components/log/router"); 




 const dbConecction= require ("../database/config.js")

class Server {
    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.apiPaths = {
            usuario: "/api/usuario",
            auth: "/api/auth",
            rol:"/api/rol",
            log:"/api/log",
          };
        this.conectarDB(); //configurar uri de mongo
        // middlewares
        this.middlewares();

        //rutas de mi aplicación
        this.routes();


    }

    middlewares() {

        //CORS
        this.app.use(cors());
        //Lectura y Parseo del body
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
        //formdata
        this.app.use(express.urlencoded({ extended: true }))
    }

    routes() {

    this.app.use(this.apiPaths.usuario, usuarioRouter);
    this.app.use(this.apiPaths.auth, authRouter);
    this.app.use(this.apiPaths.rol, rolRouter);
    this.app.use(this.apiPaths.log, logRouter);



    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

    async conectarDB() {
        const db = new dbConecction()
        await db.conexion();
      }
}


module.exports = Server;