import { Link, Route, Routes } from "react-router-dom"
import Home from "@pages/home"
import Course from "@pages/course"
import Students from "@pages/students"
import Payment from "@pages/payment"
import Report from "@pages/report"
import Settings from "@pages/settings"
import Layout from "@layouts/layout"

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/students" element={<Students />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/report" element={<Report />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
