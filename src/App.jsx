import { Routes, Route } from "react-router-dom"
import AddTask from './pages/addTask'
import Calendar from './pages/calendar'
import DeleteTask from "./pages/deleteTask"
import MainPage from "./pages/mainPage"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/addTask" element={<AddTask/>} />
        <Route path="/deleteTask" element={<DeleteTask/>} />
        <Route path="/calendar" element={<Calendar/>} />
    </Routes>
    </div>
  )
}

export default App