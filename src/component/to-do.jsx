import "./to-do.css"
import ToDoHeader from "./to-do-header";
import ToDoBody from "./to-do-body";
import ToDoFooter from "./to-do-footer";
import React from "react";

function ToDo() {
    return (
        <div className="to-do-container">
            <ToDoHeader />
            <ToDoBody />
            <ToDoFooter />
        </div>
    )
}

export default ToDo;