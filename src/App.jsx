import { useState, useEffect } from 'react'

function App() {
  const initial = [
    'ciambellone',
    'torta'
  ]
  const [searchTxt, setSearchTxt] = useState('')
  const [newTask, setNewTask] = useState('')
  const [tasks, newTasks] = useState(initial)
  const [filteredTasks, setFilteredTasks] = useState(tasks)




  function handleSubmit(e) {
    e.preventDefault()
    newTasks([newTask, ...tasks])
  }
  useEffect(() => {
    const filtered = tasks.filter(task => task.includes(searchTxt))
    setFilteredTasks(filtered)
  }, [searchTxt, tasks])

  return (
    <>
      <div className="container">
        <div className="container d-flex justify-content-between align-items-center">
          <h1>My Blog</h1>
          <div className="col-4">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={event => setSearchTxt(event.target.value)} />
            </form>
          </div>

        </div>


        <form onSubmit={handleSubmit}>
          <div className="d-flex mt-5">
            <input className="'form-control'" placeholder="insert here" type="text" onChange={event => setNewTask(event.target.value)} />
            <button type='submit' className='btn btn-primary mx-2'>save</button>
            <button type='button' className='btn btn-danger mx-2'>remove</button>

          </div>
        </form>
        <div className="container">
          <div className="row mt-5">
            {filteredTasks.map((task, index) => {
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
