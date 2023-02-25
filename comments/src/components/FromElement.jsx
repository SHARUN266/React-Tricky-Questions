import React from 'react'
function Input(){
  return <input type="text"/>

}


function Password(){
   return <input type="password"/>
}
function FromElement(props) {
    switch(props.type){
        case "text":{
            return <input type="text"/>
        }
        case "password":{
            return <input type="password"/>
        }
        default:{
            return <input type="text"/>
        }
       
    }

 
}

export default FromElement