import React, { useEffect } from "react";
import { toast } from "sonner";
import { v4 as uuid } from 'uuid';

// create to do context
export const TodoContext = React.createContext(null);

// create to do context provider
export const TodoContextProvider = (props) => {
    const [tasks, setTasks] = React.useState([]);
    const [taskToEdit, setTaskToEdit] = React.useState(null);

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");
        const parseTasks = JSON.parse(tasks);
        if (Array.isArray(parseTasks) && tasks.length > 0) {
            setTasks(parseTasks);
        } else {
            setTasks([]);
        }
    }, []);

    // add task
    const addTask = (newTask) => {
        if (newTask.length === 0) {
            toast.error("Task cannot be empty. Please type your task!")
        } else {
            const newTaskObject = {
                id: uuid(),
                content: newTask,
                completed: false
            };

            // add new task to the front of the array
            setTasks([newTaskObject, ...tasks])

            localStorage.setItem("tasks", JSON.stringify([newTaskObject, ...tasks]));

            // render toast
            toast.success("Task added successfully!")
        }
    }

    // edit task 
    const editTask = (editedTask) => {
        const newTasks = tasks.map((task) => {
            if (task.id === editedTask.id) {
                return editedTask;
            }
            return task;
        });

        setTasks(newTasks);
        setTaskToEdit(null);

        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }


    //delete task
    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);

        localStorage.setItem("tasks", JSON.stringify(newTasks));

        // render toast
        toast.success("Task deleted successfully!")
    };

    return (
        <TodoContext.Provider value={{ tasks, setTasks, taskToEdit, setTaskToEdit, addTask, editTask, deleteTask, }}>
            {props.children}
        </TodoContext.Provider>
    );
};