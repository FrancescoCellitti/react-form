import { useState } from 'react'

function App() {
  const initial = [
    'ciambellone',
    'torta'
  ]
  const [newTask, setNewTask] = useState('')
  const [tasks, newTasks] = useState(initial)
  function handleSubmit(e) {
    e.preventDefault()
    newTasks([newTask, ...tasks])
  }
  return (
    <>
      <div className="container">

        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <input className="'form-control mt-2'" placeholder="'insert here'" type="text" onChange={event => setNewTask(event.target.value)} />
            <button type='button' className='btn btn-primary mx-2'>save</button>
          </div>
        </form>
        <div  className="container">
          <div className="row mt-5">
            {tasks.map((task, index) => {
              return (
                <div key={index} className="col-3">
                  <div className="card">
                    <div className="card-title">
                      {task}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

       {/*  {tasks.map((task, index) => {
          return (
            <div className="col-3">
              <div className="card">
                <div className="card-title">
                  {tasks}
                </div>
              </div>
            </div>
          )
        })}  */}

      </div>

    </>
  )
}

export default App
