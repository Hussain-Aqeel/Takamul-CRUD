import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Course from "./pages/course"
import Students from "./pages/students"
import Payment from "./pages/payment"
import Report from "./pages/report"
import Settings from "./pages/settings"

function App() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">
            Home
          </Link>
          <Link to="/course">
            Course
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/students" element={<Students />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/report" element={<Report />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  )
}

export default App
