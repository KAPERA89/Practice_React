import React, { useState } from 'react'
import useToogle from './useToogle'

const Test10 = () => {
   
    const {state: isVisible, toogle} = useToogle(false)



    return (
        <div>
            <button onClick={() => toogle()}>{isVisible ? "Hide" : "Show"}</button>
            {isVisible && <h1>Hodden Text</h1>}
        </div>
  )
}

export default Test10