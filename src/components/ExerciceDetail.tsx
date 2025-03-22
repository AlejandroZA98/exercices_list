import {
    LeadingActions,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    SwipeableList
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css';


import { DraftExercice, Exercise } from '../types'
import { days } from "../data/days";
import { PartBody } from "../data/partbody";
import { Day, partbody } from "../types";


type ExerciseProps = {
    exercise: DraftExercice
    key: number
}


export default function ExerciceDetail({exercise,key}:ExerciseProps) {
   
    function  getDay(dayExercice:Day['day']){ 
        console.log('Day Exercice', dayExercice)
        const DayName=days.filter(day => day.id===+dayExercice)
        return DayName[0].day
    }
    function  getPartBody(partBody:partbody['id']){ 
        console.log('Day Exercice', partBody)
        const PartBodyName=PartBody.filter(day => day.id===+partBody)
        return PartBodyName[0].part
    }

    const leadinActions=()=>(
        <LeadingActions>
            <SwipeAction onClick={()=>console.log('Actualizar')} >Actualizar</SwipeAction>
        </LeadingActions>
    )
    const trailingActions=()=>(
        <TrailingActions>
            <SwipeAction onClick={()=>console.log('Eliminar')}
             destructive={true}>Eliminar</SwipeAction>
        </TrailingActions>
    )
  return (
        <>
        
        <SwipeableList >
            <SwipeableListItem  maxSwipe={0}  leadingActions={leadinActions()} trailingActions={trailingActions()}>
                <div key={key} className=' border-gray-400  my-2 bg-blue-100 w-full items-center'>
                            <h3 className='font-bold bg-red-500 text-3xl'>{getDay(exercise.day)}</h3>
                            <br />
                            <p className='font-bold text-2xl'>Ejercicio para: 
                                <span className="text-green-600"> {getPartBody(+exercise.partbody)}</span></p>
                            <p className="font-bold text-2xl">Ejercicio: <span className="text-green-600">{exercise.ejercicio}</span></p>
                            <p className='font-bold text-2xl'>Peso: <span className="text-green-600">{exercise.peso} kg</span></p>
                            <p className='font-bold text-2xl'>
                                Repeticiones: <span className="text-green-600">{exercise.reps}</span>
                                {' '} Series: <span className="text-green-600">{exercise.reps}</span>
                            </p>
                </div>
                </SwipeableListItem>
        </SwipeableList>
        </>
)
}
