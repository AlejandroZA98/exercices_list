
import { useExercisesStore } from "../store/store";
import ExerciceDetail from "./ExerciceDetail";

export default function ExerciceList() {
    const ExercicesList = useExercisesStore((state) => state.exercises);

        console.log('Ejercicios', ExercicesList.length)
    
  return (
    <div className='md:w-1/2 lg:w-3/5 mx-5 '>
        <h2 className='font-black text-3xl text-center '>Lista de ejercicios</h2>
        {   
            ExercicesList.length===0 ? <p className='text-center'>No hay ejercicios registrados</p>:
            ExercicesList.map((exercise, index) => (
                <ExerciceDetail
                exercise={exercise}
                key={index}></ExerciceDetail>
                
            ))
        }
      
    </div>
  )
}
