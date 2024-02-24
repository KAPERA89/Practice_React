import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Test7 = () => {

    const [catFact, setCatFact] = useState("")

    const getFact = () => {
        axios.get("https://catfact.ninja/fact")
            .then(res => setCatFact(res.data.fact))
    }


    useEffect(() => {
        getFact();
    },[])

  return (
    <div>
        <button onClick={getFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
    </div>
  )
}

export default Test7