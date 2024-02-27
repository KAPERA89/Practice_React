import React, {useState} from 'react'

const useToogle = (initialVal = false) => {

    const [state, setState] = useState(initialVal);

    const toogle = () => {
        setState(!state)
    }

    return {state, toogle}
}

export default useToogle