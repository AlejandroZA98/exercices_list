export type Day={
    id:number,
    day:string
}

export type partbody={
    id:number,
    part:string
}

export type Exercise={
    id:string,
    day:string,
    ejercicio:string,
    partbody:partbody,
    peso:number,
    reps:number
    series:number
}

export type DraftExercice=Omit<Exercise,'id'>