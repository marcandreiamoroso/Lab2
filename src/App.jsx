import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import About from "./pages/About"
import Navbar from "./components/NavBar"
import Students from "./pages/Students"

function App() {
  
  return (
    <BrowserRouter> 
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
