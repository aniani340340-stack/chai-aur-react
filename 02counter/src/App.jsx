import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=15;
  let [counter,statecounter]=useState(5);
  let [error,seterror]=useState("");
  const addvalue= ()=>{
    if(counter==10){
      seterror(error="Value cannot be more than 10");
      return;
    }
    console.log("clicked",counter);
    statecounter(counter+1);

  }
  const removevalue= ()=>{
    if(counter==0){
      seterror(error="Value cannot be negative");
      return;
      }
    console.log("clicked",counter);

    statecounter(counter-1);
   

  }
  return (
    <>
    <h1>Chai aur react</h1>
    <button onClick={removevalue}>Remove value : {counter}</button>
    <button onClick={addvalue}>Add value {counter} </button>
    <p style={{color:'red'}}>{error}</p>
    </>
  )
}

export default App
