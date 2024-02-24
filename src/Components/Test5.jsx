import React, { useState } from 'react'

const Test5 = () => {
   const [count, setCount] = useState(0)

return (
    <div>
        <div>
            <h1>{count}</h1>
        </div>
        
            <button style={{backgroundColor:'green',margin:'20px', color:'white', padding:'5px'}} onClick={() => setCount(count+1)}>Increase</button>
            <button style={{backgroundColor:'red',margin:'20px',color:'white' , padding:'5px'}} onClick={() => setCount(count-1)}>Decrease</button>
            <button style={{backgroundColor:'blue',margin:'20px',color:'white' , padding:'5px'}} onClick={() => setCount(0)}>Set to zero</button>
       
    </div>
)
}

export default Test5