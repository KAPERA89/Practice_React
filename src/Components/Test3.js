import React, { useReducer } from 'react'

const Test3 = () => {

    const [event, setEvent] = useReducer((prev, next) => {
        return {...prev, ...next}
    }, {title : "", description : "", attendees : []})

    console.log(event.title)

  return (
    <div>
        <p>Enter here : </p>
        <input 
            style={{border : "1px solid black "}}
            type='text'
            value={event.title}
            onChange={e => setEvent({title : e.target.value}) }
        />
        <h1>{event.title}</h1>
    </div>
  )
}

export default Test3