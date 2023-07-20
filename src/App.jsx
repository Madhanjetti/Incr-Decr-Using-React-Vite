

import './App.css'
import { useState } from 'react';
function App() {

const [count,setCount]=useState(0);
const [counter,setCounter]=useState(0);
  function clickedInc(){
    setCount(count+1);
    console.log("Clicked on Inc ",count)
  }
  function clickedDec(){
    setCount(count-1);
    console.log("Clicked on Dec",count)
  }
  function clickedCounterInc(){
    setCounter(counter+1);
    console.log("Clicked on Inc ",count)
  }
  function clickedCounterDec(){
    setCounter(counter-1);
    console.log("Clicked on Dec",count)
  }
  return (
    <>
      <div>
        Value of Count :{count} which is a {(count%2==0) ? 'Even' :'odd'} value
      </div>
      <button onClick={clickedInc}>Inc</button>
      <button onClick={clickedDec}>Dec</button>
      <div>
        Value of Counter :{counter}
      </div>
      <button onClick={clickedCounterInc}>Inc</button>
      <button onClick={clickedCounterDec}>Dec</button>
    </>
  )
}

export default App
