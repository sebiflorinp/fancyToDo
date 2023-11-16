import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
      <Link to="/"><Button>Main Page</Button></Link>
      <Link to="/addTask"><Button>Add Task</Button></Link>
      <Link to="/calendar"><Button>Calendar</Button></Link>
      <Link to="/deleteTask"><Button>Delete Task</Button></Link>
    </div>
  )
}

export default NavBar