import "./app.css"
import { Toaster } from "sonner"
import ToDo from "./component/to-do"


function App() {

  return (
    <div className="App">
      <Toaster richColors />
      <ToDo />
    </div>
  )
}

export default App
