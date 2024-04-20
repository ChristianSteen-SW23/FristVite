/* eslint-disable react/prop-types */
import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { Todo } from "./todoClass.js"

let startTodoList;
if(localStorage.getItem("todoList") !== null){
  startTodoList = JSON.parse(localStorage.getItem("todoList"));
} else{
  startTodoList=[new Todo({}),new Todo({ name: "Task 1", task: "Complete task 1", lastEdit: "Today" }),new Todo({ name: "Task 1", task: "Complete task 1", lastEdit: "Today" }),new Todo({ name: "Task 1", task: "Complete task 1", lastEdit: "Today" }),new Todo({ name: "Task 1", task: "Complete task 1", lastEdit: "Today" }),new Todo({ name: "Task 1", task: "Complete task 1", lastEdit: "Today" })]
}

function App() {
  const [count, setCount] = useState(0)
  const [displayName, setDisplayName] = useState("")
  const [todoName, setTodoName] = useState("")
  const [todoTask, setTodoTask] = useState("")
  const [todos, setTodos] = useState(startTodoList)
  const [todoLastEdit, setTodoLastEdit] = useState("")
  const [todoIndex, setTodoIndex] = useState(2)

  const userName = useRef("Christian")
  
  function addTodo(){
    let todosCopy = [...todos];
    todosCopy.push(new Todo({}))
    setTodos(todosCopy)
  }

  return (
    <>
      <TodoPopUp 
        userName={userName}
        todos={todos}
        setTodos={setTodos}
        todoName={todoName} 
        setTodoName={setTodoName} 
        todoTask={todoTask} 
        setTodoTask={setTodoTask} 
        todoLastEdit={todoLastEdit} 
        setTodoLastEdit={setTodoLastEdit}
        todoIndex={todoIndex}
        setTodoIndex={setTodoIndex}
        modalID={"modal"}
      />
      
      <div className='container text-center'>
        <div className='row justify-content-center'>
          <div className='col-8 p-3 d-grid'>
            <div className="bg-primary text-white p-3 btn" onClick={()=>{addTodo();}}>
              <h2 className="mb-0"><b>Todo List:</b></h2>
            </div>
          </div>
        </div>
      </div>
      <div className='col-12 container'>
        <DisplayTodoList 
          todos={todos} 
          todoName={todoName}
          setTodoName={setTodoName}
          todoTask={todoTask}
          setTodoTask={setTodoTask}
          todoLastEdit={todoLastEdit}
          setTodoLastEdit={setTodoLastEdit}
          todoIndex={todoIndex}
          setTodoIndex={setTodoIndex}
        />
      </div>
    
    </>
  )
}

function DisplayTodoList(props){
  function showTodo(todoIndex){
    props.setTodoIndex(todoIndex)
    props.setTodoName(props.todos[todoIndex].name);
    props.setTodoTask(props.todos[todoIndex].task);
    props.setTodoLastEdit(props.todos[todoIndex].lastEdit);
  }
  return(
    <ul className="list-group list-group-flush">
      {props.todos.map((todo,index) => 
        <li key={index} className="list-group-item list-group-item-action list-group-item-primary" data-bs-toggle="modal" data-bs-target={"#modal"} onClick={()=>{showTodo(index);}}>{"Todo: "+[todo.name]}</li>
       )
      }

    </ul>
  )
}

function TodoPopUp(props){
  function saveTodos(){
    let todosCopy = [...props.todos];
    todosCopy[props.todoIndex].name = props.todoName;
    todosCopy[props.todoIndex].task = props.todoTask;
    todosCopy[props.todoIndex].lastEdit = props.userName.current;
    props.setTodos(todosCopy)
  }
  function deleteTodo(){
    let todosCopy = [...props.todos];
    todosCopy.splice(props.todoIndex,1);
    props.setTodos(todosCopy)
  }
  return(
    <>
      <div className='modal fade' id={props.modalID} aria-hidden="true" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <label className="text-primary h3" htmlFor="name">Todo:</label>
              <input className="text-primary h3"type="text" placeholder="Set Name" id="name" value={props.todoName} onChange={(e) => {props.setTodoName(e.target.value)}}></input>
            </div>
            <div className='modal-body'>
              <textarea className="text-primary h5 form-control"type="textarea" placeholder="Set Task" id="task" rows="9" value={props.todoTask} onChange={(e) => {props.setTodoTask(e.target.value)}}></textarea>
              <p>Last edit: {props.todoLastEdit}</p>
            </div>
            <div className='modal-footer'>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>{deleteTodo();}}>Delete Todo</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>{saveTodos();}}>Save Todo</button>
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