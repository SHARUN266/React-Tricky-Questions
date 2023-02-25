import React, { useState } from 'react'
import FromElement from './FromElement';
function createInput(type='password'){
    return {
        type:type
    }
}
function Dynamicinput() {
    const [elements,setElements]=useState([]);
    const [type,setType]=useState("")
    const handleAdd=()=>{
        setElements([...elements,createInput(type)])
    }

    
  return (
    <div>
        {
            elements.map((item,index)=>(
                <div key={index}  style={{margin:"1rem"}}>
                  <h4>{index+1}</h4>
                    <FromElement  type={item.type}/>
                </div>
            ))
        }
        <select onChange={(e)=>setType(e.target.value)}>
            <option value="text">Text</option>
            <option value="password">Password</option>
        </select>
        <button  onClick={handleAdd}>+ ADD</button>
    </div>
  )
}

export default Dynamicinput