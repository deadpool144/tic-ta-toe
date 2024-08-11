import React, { useState,useEffect } from 'react'
useEffect
import Cross from './cross';

const style={
    backgroundColor:'black'
   };
function Game() {
    // const arr=[["","",""],["","",""],["","",""]]
    const [box,setBox]=useState([["","",""],["","",""],["","",""]])
    const click=(e)=>{
        const pos=e.target.getAttribute('pos')
        const x = parseInt(pos[0], 10) // Convert to integer
        const y = parseInt(pos[1], 10)

        const arr = box.map(row => [...row]); // Deep copy of the 2D array
        arr[x][y] = 'x'; // Modify the copied array
    
        setBox(arr); // Update the state with the new array
        console.log(arr); // Log the new array to the console
      };
        
        console.log(arr)

  return (
    <div
     className='container grid grid-cols-3 grid-rows-3 gap-3 items-center justify-items-center'>
        {box.map((x,ir)=>(x.map((y,ic)=>(<div 
        pos={`${ir}${ic}`}
         className= 'h-24 w-24 text-white' style={style} onClick={click}>{y}</div>))
        ))}
    </div>
  )
}

export default Game