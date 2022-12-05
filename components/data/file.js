import React from 'react'
import Card from './card';

function File({data}) {
    console.log("data....",data);
  return (
    <div>
        {
            data.map(res=>{
              return  <Card data = {res}/>
            })
        }
    </div>
  )
}

export default File