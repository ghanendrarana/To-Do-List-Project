import React from "react";
import "./to-do-body.css"
import { Trash2, Pencil } from 'lucide-react';
import { TodoContext } from "../context/todo-context";

function ToDoBody() {
    const { tasks } = React.useContext(TodoContext);

    return (
        <div className="body-container">
            {
                tasks.map((data, index) => {
                    return (
                        <div className="todo-item">
                            <input type="checkbox" />
                            <span>{data.content}</span>
                            <div className="buttons">
                                <button>
                                    <Pencil size={15} />
                                </button>
                                <button>
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