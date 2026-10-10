
import { NavLink } from "react-router-dom"

function Navbar() {
  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-colors duration-200 ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
    }`

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          ReactApp
        </h1>

        {/* Navigation links */}
        <div className="flex items-center gap-2">
          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/students" end className={linkStyle}>
            Students
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink to="/courses" className={linkStyle}>
            Courses
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
