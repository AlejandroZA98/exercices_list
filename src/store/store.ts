import { create } from 'zustand';
import { DraftExercice,Exercise } from '../types';
import { v4 as uuidv4 } from 'uuid';
import {devtools,persist} from 'zustand/middleware'

type ExercisesState={
    exercises:Exercise[],// arreglo de ejercicios
    addExercice:(data:DraftExercice)=>void// funciones
    deleteExercice:(id:string)=>void// funciones
    updateId:(id:string)=>void// funciones
    updateExercise:(data:DraftExercice)=>void// funciones
    update_id:string
    dataFiltering:string
    Filtering:(data:string)=>void// funciones)
}

const createExercises = (exercise:DraftExercice) => {
    return {...exercise,id:uuidv4()}
    
}

export const useExercisesStore = create<ExercisesState>()(
    devtools(persist((set)=>({
        exercises:[],
        update_id:'',
        dataFiltering:'',
        
        addExercice:(data)=>{
            const newExercice=createExercises(data)// crea un nuevo ejercicio
            //console.log("Desde Store: " , newExercice)

            set((state)=>({// lo asigna al state
                exercises:[...state.exercises,newExercice]
                
            }))
        },
        deleteExercice:(id)=>{
            //console.log("Eliminando", id)
            set((state)=>({
                exercises:state.exercises.filter(e=>e.id!==id),
                update_id: ''

            }))
        },
        updateId:(id)=>{
            //console.log("Update:", id)
            set(()=>({
                update_id: id
            }))
        },
        updateExercise:(data)=>{
           // console.log("Actualizando EJ:...",data)
            set((state)=>({
                // por cada dato busca el ejercicio con el id del state, si existe conserva el id y actualiza data, sino devuelve el exercise
                exercises:state.exercises.map(exercise=> exercise.id===state.update_id?{id:state.update_id,...data}:exercise),
                update_id: ''
            }))
        },
        Filtering:(data)=>{
            console.log("Filtrando: ", data)
            set(()=>({
                dataFiltering: data
            }))
        }



    }),
    {name: 'exercices-storage'})))// variable en localstorage