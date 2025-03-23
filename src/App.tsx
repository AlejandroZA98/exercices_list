
import './App.css'
import ExerciceList from './components/ExerciceList'
import ExercicesForm from './components/ExercicesForm'
import 'react-toastify/dist/ReactToastify.css';// libreria toast
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
     <div className='bg-red-500 flex justify-center  mx-auto p-3'>
        <h1 className='font-bold  text-5xl'>MyPersonal
        <span className='text-white'>Trainer</span>
        </h1>
        
     </div>
      <div className='md:flex mt-12'>
          <ExercicesForm />
          <ExerciceList />
      </div>
      <ToastContainer/>

    </>
  )
}

export default App
