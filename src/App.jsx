import { useState } from 'react'

import './App.css'

function App(){
const [color,setColor] = useState("olive")


  return(
    <div className='h-screen w-full' style={{backgroundColor:color}}>


   
      <button className='m-5 p-5 outline-amber-50 hover:cursor-pointer hover:bg-green-500 ' onClick={()=>setColor("red")} style={{backgroundColor:"white"}}>Red</button>
      <button className='m-5 p-5 outline-amber-50' onClick={()=>setColor("Blue")} style={{backgroundColor:"white"}}>Blue</button>
      <button className='m-5 p-5 outline-amber-50' onClick={()=>setColor("Green")} style={{backgroundColor:"white"}}>Green</button>
      <button className='m-5 p-5 outline-amber-50' onClick={()=>setColor("Yellow")} style={{backgroundColor:"white"}}>Yellow</button>
      <button className='m-5 p-5 outline-amber-50' onClick={()=>setColor("purple")} style={{backgroundColor:"white"}}>Purple</button>
    
      
    </div>
  )
}

export default App
