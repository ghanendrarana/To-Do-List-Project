import React from "react";
import "./to-do-header.css"
import Emoji from '../assets/emoji1.jpg'
import { TodoContext } from "../context/todo-context";
import { v4 as uuid } from 'uuid';

function ToDoHeader() {
    const { tasks, setTasks } = React.useContext(TodoContext);
    const [newTask, setNewTask] = React.useState("");

    return (
        <div className='header-container'>
            <input
                type="text"
                placeholder='Enter the task'
                value={newTask}
                onChange={(event) => {
                    const newValue = event.target.value
                    setNewTask(newValue)
                }}
            />
            
            <button onClick={() => {
                if (newTask.length === 0){
                    alert("Task cannot be empty. Please type your task!")
                } else {
                    const newTaskObject = {
                        id: uuid(),
                        content: newTask,
                        completed: false
                    };

                    // add new task to the front of the array
                    setTasks([newTaskObject, ...tasks])

                    // clear the input field
                    setNewTask("");
                }
            }}>Add</button>

            <img src={Emoji} alt="Logo" />
        </div>
    )
}

export default ToDoHeader;