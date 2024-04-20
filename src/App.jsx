/* eslint-disable react/prop-types */
import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [displayName, setDisplayName] = useState("")
  const [todoName, setTodoName] = useState("")
  const [todoTask, setTodoTask] = useState("")
  const [todos, setTodos] = useState("")
  const [todoLastEdit, setTodoLastEdit] = useState("Christian")

  const userName = useRef("Christian")
  
  return (
    <>
      <div className='container text-center'>
        <div className='row justify-content-center'>
          <div className='col-8 p-3 d-grid'>
            <div className="bg-primary text-white p-3 btn" onClick={()=>{console.log("lav noget sejt")}}>
              <h2 className="mb-0"><b>Todo List:</b></h2>
            </div>
          </div>
        </div>
      </div>
      <div className='col-12 container'>
      <button type="btn" className='btn btn-primary' data-bs-toggle="modal" data-bs-target={"#hej"}>
        hej
      </button>
        <TodoPopUp name={todoName} setName={setTodoName} task={todoTask} setTask={setTodoTask} userName={userName} lastEdit={todoLastEdit} modalID={"hej"}/>
      </div>
    
    </>
  )
}

function TodoPopUp(props){
  return(
    <>
      
      <div className='modal fade' id={props.modalID} aria-hidden="true" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <label className="text-primary h3" htmlFor="name">Todo:</label>
              <input className="text-primary h3"type="text" placeholder="Set Name" id="name" value={props.name} onChange={(e) => {props.setName(e.target.value)}}></input>
            </div>
            <div className='modal-body'>
              <textarea className="text-primary h5 form-control"type="textarea" placeholder="Set Task" id="task" rows="9" value={props.task} onChange={(e) => {props.setTask(e.target.value)}}></textarea>
              <p>Last edit: {props.lastEdit}</p>
            </div>
            <div className='modal-footer'>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete Todo</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Save Todo</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close Todo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


/*
<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-primary'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/