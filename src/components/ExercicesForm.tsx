import { useForm } from 'react-hook-form';

import { days } from '../data/days'
import { PartBody } from '../data/partbody'
import Errors from './Errors';
import { DraftExercice } from '../types';
import { useExercisesStore } from '../store/store';

export default function ExercicesForm() {
    // Hook de formulario, debe ser de tipo de dato a enviar en el formulario (DraftExercice)
    const { register, handleSubmit,formState:{errors},reset } = useForm<DraftExercice>();
    // Funciones para manejo de formulario
    const addExercice = useExercisesStore((state) => state.addExercice);
    // Función para registrar ejercicio
    const registerExercise=(data:DraftExercice)=>{
        console.log('Registrando ejercicio',data)
        addExercice(data)
        reset()
    }
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'>Crea tu rutina de la semana</h2>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' noValidate onSubmit={handleSubmit(registerExercise)}>

            <div className="mb-4">
                <label htmlFor="day" className="text-sm font-bold">
                    Día de la semana
                </label>
                <select
                    id="day"
                    className="bg-slate-200 p-2 w-full mt-2"
                    {...register("day", { required: "Selecciona un día de la semana" })}
                >
                    <option value="">--Seleccione el día--</option>
                    {days.map((day) => (
                    <option key={day.id} value={day.id}>
                        {day.day}
                    </option>
                    ))}
                </select>
                {errors.day && <p className="text-red-500 text-xs mt-1"><Errors>{errors.day.message?.toString()}</Errors> </p>}

            </div>
            <div className='mb-4'>
                <label htmlFor="partbody" className='text-sm font-bold'>Parte del cuerpo</label>
                <select id="partbody" className='bg-slate-200 p-2 w-full mt-2'{...register("partbody", { required: "Selecciona una parte a entrenar" })}>
                    <option value="">--Selecione parte del cuerpo a entrenar--</option>
                    {
                        PartBody.map(partbody=>(
                            <option key={partbody.id} value={partbody.id}>{partbody.part}</option>
                        ))
                    }
                </select>
                {errors.partbody && <p className="text-red-500 text-xs mt-1"><Errors>{errors.partbody.message?.toString()}</Errors> </p>}

            </div>
            <div className='mb-4'>
                <label htmlFor="ejercicio" className="text-sm  font-bold">
                        Ejercicio 
                </label>
                <input  
                    id="ejercicio"
                    className="w-full p-3  border border-gray-100"  
                    type="text" 
                    placeholder="Ejercicio" 
                    {...register("ejercicio", { required: "Crea un ejercicio a realizar" })}
                        
                />
                {errors.ejercicio && <p className="text-red-500 text-xs mt-1"><Errors>{errors.ejercicio.message?.toString()}</Errors> </p>}

            </div>
            <div className='mb-4'>
                <label htmlFor="peso" className="text-sm  font-bold">
                        Peso 
                </label>
                <input  
                    id="peso"
                    className="w-full p-3  border border-gray-100"  
                    type="number" 
                    placeholder="Peso" 
                    {...register("peso", { required: "Inserta un peso" })}  
                />
                {errors.peso && <p className="text-red-500 text-xs mt-1"><Errors>{errors.peso.message?.toString()}</Errors> </p>}

            </div>
            <div className='mb-4 flex md:1/2flex-row flex-col'>
                <div className="flex flex-col">
                    <label htmlFor="reps" className='text-sm font-bold'>Repeticiones</label>
                    <select id="reps" className='bg-slate-200 p-2 mt-2'  {...register("reps", { required: "Añade el numero de repeticiones a realizar" })}  
                    >
                        <option value="">--Seleccione número de repeticiones--</option>
                        {Array.from({ length: 12}, (_, i) => (
                            <option key={i} value={i + 1}>
                            {i + 1}
                            </option>
                        ))}                    
                    </select>
                    {errors.reps && <p className="text-red-500 text-xs mt-1"><Errors>{errors.reps.message?.toString()}</Errors> </p>}

                </div>

                <div className="flex flex-col">
                    <label htmlFor="series" className='text-sm font-bold'>Series</label>
                    <select id="series" className='bg-slate-200 p-2 mt-2' {...register("series", { required: "Añade el numero de series a realizar" })}>
                        <option value="">--Seleccione número de series--</option>
                        {Array.from({ length: 4 }, (_, i) => (
                            <option key={i} value={i + 1}>
                            {i + 1}
                            </option>
                        ))}

                    </select>
                    {errors.series && <p className="text-red-500 text-xs mt-1"><Errors>{errors.series.message?.toString()}</Errors> </p>}

                </div>
            </div>
            <div className='mb-4'>
                <input type="checkbox" id='cardio' />
                <label htmlFor="cardio" className='text-bold font-bold m-3'>Hacer Cardio</label>
            </div>
            <input type="submit" className='bg-indigo-500 w-full p-3 text-white font-bold cursor-pointer transition-colors'
            value='Guardar Rutina' />

        </form>
    </div>
  )
}
