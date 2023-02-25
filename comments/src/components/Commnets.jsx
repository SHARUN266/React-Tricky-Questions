import React from 'react'

function Commnets(props) {
const {id,author,body,timestamp,replies}=props.data

  return (
    <div key={id}>
        <h4>Author:{author}</h4>
        <h3>Body:{body}</h3>
        <p>Date:{timestamp}</p>
        {
          replies&&  replies?.map((e)=>(
                <Commnets key={e?.id} data={e}  />
            ))
        }
       
    </div>
  )
}

export default Commnets