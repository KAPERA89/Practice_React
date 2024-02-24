import React, { useState } from 'react'
import Test1 from './Test1'

const Test2 = () => {

    const [name, setname] = useState("othmane")

  return (
    <div>
       
        <Test1 nom={name}/>
    </div>
  )
}

export default Test2