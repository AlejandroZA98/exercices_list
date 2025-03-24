import { ChangeEvent, useState } from 'react'
import { useExercisesStore } from '../store/store';



export default function FilterInput() {
    const Filtering=useExercisesStore((state)=>state.Filtering)
    let [filter,setFilter]=useState('')

    const handleFilter = (e:ChangeEvent<HTMLInputElement>)=>{
        const data_to_filter=e.target.value;
        
        setFilter(data_to_filter)

        Filtering(data_to_filter)
    }
  return (
    <div>
        <label htmlFor="" className='font-bold text-3xl'>Buscar:</label>
        <input type="text" placeholder="Filter..." className='text-2xl m-6 bg-slate-300 rounded' name='filterExercise' id='filterExercise'
        value={filter} onChange={handleFilter} />
    </div>
  )
}
