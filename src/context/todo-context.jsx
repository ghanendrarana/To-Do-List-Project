import React from "react";

// create to do context
export const TodoContext = React.createContext(null);

// create to do context provider
export const TodoContextProvider = (props) => {
    const [tasks, setTasks] = React.useState([]);

    return (
        <TodoContext.Provider value={{ tasks, setTasks }}>
            {props.children}
        </TodoContext.Provider>
    );
};