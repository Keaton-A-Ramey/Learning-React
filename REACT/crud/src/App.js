import './App.css';
import { useState } from "react";
import {Task} from "./Task.js";

function App() {

  //const [todoList, setTodoList] = useState([]); WE NEED OBJECTS
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // Doing this with objects...
    // setTodoList([...todoList, newTask]);

    const task = {
      // We're adding these, having IDs and using ternary to handle first addition.
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1, 
      taskName: newTask,
      completed: false
    };

    setTodoList([...todoList,task])
  };

  const deleteTask = (taskID) => {
    /*
    // This works but its a little too long...
    const newArr = todoList.filter((task) => {
      return task !== taskName;
    })
    */
    // This is cleaner, but it DOES delete all instances of the taskName from the list. 
    // We're making objects with IDs
    //setTodoList(todoList.filter((task) => task !== taskName));
    setTodoList(todoList.filter((task) => task.id !== taskID));
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        return task.id === id ? {...task, completed : !task.completed} : task; 
      })
    );
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="taskList">
        {todoList.map((task) =>{
          return (
          <Task 
            taskName = {task.taskName} 
            id={task.id} 
            completed = {task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask} 
          />
          );
        })}
      </div>
    </div>
  );
}



export default App;
