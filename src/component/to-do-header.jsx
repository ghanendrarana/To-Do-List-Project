import React from "react";
import "./to-do-header.css"
import Emoji from '../assets/emoji1.jpg'
import { TodoContext } from "../context/todo-context";

function ToDoHeader() {
    const [newTask, setNewTask] = React.useState("");
    const { taskToEdit, addTask, editTask, setTaskToEdit } = React.useContext(TodoContext);

    React.useEffect(() => {
        if (taskToEdit && taskToEdit.id) {
            setNewTask(taskToEdit.content)
        } else {
            setNewTask("")
        }
    }, [taskToEdit])

    const handleAddEditTask = () => {
        try {
            if (taskToEdit && taskToEdit.id) {
                editTask({
                    id: taskToEdit.id,
                    content: newTask,
                    completed: taskToEdit.completed
                })
            } else {
                addTask(newTask)
            }
        } catch (error) {
            console.log("Error", error)
        } finally {
            setNewTask("")
            setTaskToEdit(null)
        }
    };

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
            
            <button onClick={handleAddEditTask}>{taskToEdit ? "Edit" : "Add"}</button>

            <img src={Emoji} alt="Logo" />
        </div>
    )
}

export default ToDoHeader;