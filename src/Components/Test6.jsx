import React, { useState } from 'react'
import './Test6.css'

const Test6 = () => {

    const [tasks, setTasks] = useState([])
    const [value, setValue] = useState("")
 
    const getData = (event) => {
        setValue(event.target.value);
    }

    const addTask = () => {
        const task = {
            id : tasks.length ===0 ? 1 : tasks.length+1,
            name: value,
            complete:false
        }
        setTasks([...tasks, task]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter( t => t.id!= id))
    }

    const updateTask = (id) => {
        setTasks(tasks.map(t => t.id ==id ? {...t, complete:true} : t))
    }

  return (
    <div className='container'>  
        <div className='addTask'>
            <div className='didid'>
                <input type="text" onChange={getData} style={{width:'170px',height:'20px'}}/>
                <button onClick={addTask} style={{height:'27px', width:'80px'}}>Add Task</button>
            </div>
        </div>
        <div className='list'>
            {tasks.map((t) =>( 
                    <div className={t.complete ? 'item2' : 'item'}>
                        <h1 style={{marginRight:'10px'}}>{t.name}</h1> 
                        <button style={{marginRight:'10px'}}  onClick={() => updateTask(t.id)}>complete</button>
                        <button onClick={() => deleteTask(t.id)}>X</button>
                    </div>
                )
              )
            }
        </div>
    </div>
  )
}


export default Test6