function examenesRepetidas(examenes){

    let repetirExamen = 0

    for(let calificacion = 0; calificacion < examenes.length; calificacion++){
        if(examenes[calificacion] < calificacionMinima){
            repetirExamen ++
        }else{}
    }
    return repetirExamen
}

const calificacionesExamenes = [8,5,9,7,4]
const calificacionMinima = 6

console.log('Tienes que repetir: '+ examenesRepetidas(calificacionesExamenes) + ' examenes')
