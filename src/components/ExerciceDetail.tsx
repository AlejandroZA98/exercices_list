import {
    LeadingActions,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    SwipeableList
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css';
import { Exercise } from '../types'
import { days } from "../data/days";
import { PartBody } from "../data/partbody";
import { Day, partbody } from "../types";
import { useExercisesStore } from "../store/store";
import { toast } from 'react-toastify'


type ExerciseProps = {
    exercise: Exercise
}


export default function ExerciceDetail({exercise}:ExerciseProps) {
    const delete_exercice = useExercisesStore((state) => state.deleteExercice);
    const update_exercice = useExercisesStore((state) => state.updateId);

   
    function  getDay(dayExercice:Day['day']){ 
        const DayName=days.filter(day => day.id===+dayExercice)
        return DayName[0].day
    }
    function  getPartBody(partBody:partbody['id']){ 
        const PartBodyName=PartBody.filter(day => day.id===+partBody)
        return PartBodyName[0].part
    }
    const handleClick=(id:Exercise['id'])=>{
        delete_exercice(id)       
        toast('Ejercicio eliminado correctamente',{type:'error'})
      }

    const leadinActions=(id:Exercise['id'])=>(
        <LeadingActions>
            <SwipeAction onClick={()=>update_exercice(id)} >Actualizar Ejercicio</SwipeAction>
        </LeadingActions>
    )
    const trailingActions=(id:Exercise['id'])=>(
        <TrailingActions>
            <SwipeAction onClick={()=>handleClick(id)}
             destructive={true}>Terminar Ejercicio</SwipeAction>
        </TrailingActions>
    )
  return (
        <>
        
        <SwipeableList >
            <SwipeableListItem  maxSwipe={3}  leadingActions={leadinActions(exercise.id)} trailingActions={trailingActions(exercise.id)}>
                <div  className=' border-gray-400  my-2 bg-blue-100 w-full items-center'>
                            <h3 className='font-bold bg-red-500 text-3xl'>{getDay(exercise.day)}</h3>
                            <br />
                            <p className='font-bold text-2xl'>Ejercicio para: 
                                <span className="text-green-600"> {getPartBody(+exercise.partbody)}</span></p>
                            <p className="font-bold text-2xl">Ejercicio: <span className="text-green-600">{exercise.ejercicio}</span></p>
                            <p className='font-bold text-2xl'>Peso: <span className="text-green-600">{exercise.peso} kg</span></p>
                            <p className='font-bold text-2xl'>
                                Repeticiones: <span className="text-green-600">{exercise.reps}</span>
                                {' '} Series: <span className="text-green-600">{exercise.series}</span>
                            </p>
                </div>
                </SwipeableListItem>
        </SwipeableList>
        </>
)
}
