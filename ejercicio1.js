function sumaCalificaciones (calificaciones){
    let sumaCalificaciones = 0

    for(let calificacion = 0; calificacion < calificaciones.length; calificacion++){
        sumaCalificaciones += calificaciones[calificacion]
    }
    return sumaCalificaciones
}

const calificacionesLista = [8,8,8]
const promedio = sumaCalificaciones (calificacionesLista) / calificacionesLista.length
const promedioMinimo = 8

if(promedio >= promedioMinimo){
    console.log('Tienes Beca')
}
else{
    console.log('No Tienes Beca')
}