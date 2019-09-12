function calculandoPorcentajeFaltas(faltas){

    let numFaltas = 0

    for(let contador = 0; contador <= faltas.length; contador++){
        if(faltas[contador] === 0){
            numFaltas ++
        }else{}
    }
    return numFaltas
}

const asistencia = [0,1,0,1,1,1,1,1,0,0]
let porcentajeAsistencia = 0

porcentajeAsistencia = (calculandoPorcentajeFaltas(asistencia)*100)/asistencia.length
console.log(porcentajeAsistencia + '% De Faltas' )
