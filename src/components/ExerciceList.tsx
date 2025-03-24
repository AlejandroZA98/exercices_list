
import { useExercisesStore } from "../store/store";
import ExerciceDetail from "./ExerciceDetail";
import FilterInput from "./FilterInput";
import { days } from "../data/days";
import { PartBody } from "../data/partbody";
import { Day, partbody } from "../types";

export default function ExerciceList() {
    const ExercicesList = useExercisesStore((state) => state.exercises);
    const Filter=useExercisesStore((state)=> state.dataFiltering);

    // const FilterExercises=ExercicesList.filter(exercise=>exercise.day==='1')
   // console.log(FilterExercises)
   function  getDay(dayExercice:Day['day']){ 
           const DayName=days.filter(day => day.id===+dayExercice)
           return DayName[0].day
       }
       function  getPartBody(partBody:partbody['id']){ 
           const PartBodyName=PartBody.filter(day => day.id===+partBody)
           return PartBodyName[0].part
       }
    const data_filtered= Filter ? ExercicesList.filter(exercise=> getDay(exercise.day).toLowerCase().includes(Filter)||
                        getPartBody(+exercise.partbody).toLowerCase().includes(Filter)||exercise.ejercicio.toLowerCase().includes(Filter)) : ExercicesList

  return (
    <div className='md:w-1/2 lg:w-3/5 mx-5 '>
        <h2 className='font-black text-3xl text-center '>Lista de ejercicios</h2>
        <FilterInput></FilterInput>
        {   
            data_filtered.length===0 ? (<p className='text-center'>No hay ejercicios registrados</p>):
        (data_filtered.map((exercise) => (
                <ExerciceDetail
                exercise={exercise}
                key={exercise.id}></ExerciceDetail>
                
            )))
        }
      
    </div>
  )
}
