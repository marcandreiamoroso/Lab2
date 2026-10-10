import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import About from "./pages/About"
import Navbar from "./components/navbar"

function App() {
  
  return (
    <BrowserRouter> 
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
