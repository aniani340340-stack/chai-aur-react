import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }} ></div>
      <div className='flex fixed flex-wrap bottom-10 justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3  bg-white border-2 border-black rounded-lg p-5'>
          <button className='px-4 py-2 bg-red-500 text-white rounded-lg' onClick={() => setColor("red")}>Red</button>
          <button className='px-4 py-2 bg-blue-500 text-white rounded-lg' onClick={() => setColor("blue")}>Blue</button>
          <button className='px-4 py-2 bg-green-500 text-white rounded-lg' onClick={() => setColor("green")}>Green</button>
          <button className='px-4 py-2 bg-yellow-500 text-white rounded-lg' onClick={()=>{setColor("yellow")}}>yellow</button>
        </div>
      </div>


    </>
  )
}

export default App
