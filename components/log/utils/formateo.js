const opcionesFecha = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };


const formatearLogs=(logs)=>{
    return logs.map(log =>{

        const fecha = new Date(log.createdAt);

        return {
            id: log.id,
            fecha:  fecha.toLocaleString('es-MX', opcionesFecha),
            tipo: log.tipo,
            descripcion: log.descripcion,
            estado: log.estado,
            usuario: log.usuario.nombre+" "+log.usuario.apellido,
            rol:log.usuario.rol.nombre

        }
    })
}

module.exports = formatearLogs