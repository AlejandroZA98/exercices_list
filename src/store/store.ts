import { create } from 'zustand';
import { DraftExercice } from '../types';
import { v4 as uuidv4 } from 'uuid';
import {devtools,persist} from 'zustand/middleware'

type ExercisesState={
    exercises:DraftExercice[],// arreglo de ejercicios
    addExercice:(data:DraftExercice)=>void// funciones
}

const createExercises = (exercise:DraftExercice) => {
    return {...exercise,id:uuidv4()}
    
}

export const useExercisesStore = create<ExercisesState>()(
    devtools(persist((set)=>({
        exercises:[],
        addExercice:(data)=>{
            console.log("Desde Store: " , data)
            const newExercice=createExercises(data)// crea un nuevo ejercicio
            set((state)=>({// lo asigna al state
                exercises:[...state.exercises,newExercice]
            }))
        }
    }),
    {name: 'exercices-storage'})))// variable en localstorage