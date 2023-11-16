import { Routes, Route } from "react-router-dom"
import AddTask from './pages/addTask'
import Calendar from './pages/calendar'
import DeleteTaskPage from "./pages/deleteTask"
import MainPage from "./pages/mainPage"
import NavBar from "./components/navBar"

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/addTask" element={<AddTask/>} />
        <Route path="/deleteTask" element={<DeleteTaskPage/>} />
        <Route path="/calendar" element={<Calendar/>} />
    </Routes>
    </div>
  )
}

export default App