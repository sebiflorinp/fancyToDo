import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
      <Link to="/"><button>Main Page</button></Link>
      <Link to="/addTask"><button>Add Task</button></Link>
      <Link to="/calendar"><button>Calendar</button></Link>
      <Link to="/deleteTask"><button>Delete Task</button></Link>
    </div>
  )
}

export default NavBar