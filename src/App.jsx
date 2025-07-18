import { useState } from 'react'

function App() {
  const initial =[
    'ciambellone',
    'torta'
  ]
  const [newTask, setNewTask] = useState('')
  const [tasks, newTasks]= useState(initial)
  function handleSubmit(e){
    e.preventDefault()
    newTasks([newTask, ...tasks])
  }
  return (
    <>
        <div className="container">

          <form onSubmit={handleSubmit}>
            <div className="d-flex">
              <input className='form-control mt-2' placeholder='insert here' type='text'  onChange={event => setNewTask(event.target.value)} />
              <button type='button' className='btn btn-primary mx-2'>save</button>
            </div>
          </form>

          <ul className='list-group mt-5'>
            {tasks.map((task, index)=>{
              return (
                <li key={index} className="list-group-item d-flex justify-content-between">{task}</li>
              )
            })}
          </ul>
        </div>
     
    </>
  )
}

export default App
