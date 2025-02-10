import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"
import App from './App.jsx'
import { TodoContextProvider } from './context/todo-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </StrictMode>,
)
