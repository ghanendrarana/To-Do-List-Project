import React from "react";
import "./to-do-body.css"
import { Trash2, Pencil } from 'lucide-react';
import { TodoContext } from "../context/todo-context";

function ToDoBody() {
    const { tasks, setTaskToEdit, deleteTask, editTask } = React.useContext(TodoContext);

    const handleCompletedChange = (data) => {
        const newTask = {
            id: data.id,
            content: data.content,
            completed: data.completed === true ? false : true
        }

        editTask(newTask);
    }

    return (
        <div className="body-container">
            {
                tasks.map((data, index) => {
                    return (
                        <div className="todo-item">
                            <input type="checkbox" onChange={() => handleCompletedChange(data)} />
                            <span style={{ textDecoration: data.completed ? "line-through" : "" }}>{data.content}</span>
                            <div className="buttons">
                                <button onClick={() => {
                                    setTaskToEdit({
                                        id: data.id,
                                        content: data.content,
                                        completed: data.completed
                                    })
                                }}>
                                    <Pencil size={15} />
                                </button>
                                <button onClick={() => deleteTask(data.id)}>
                                    <Trash2 size={15} />
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ToDoBody;