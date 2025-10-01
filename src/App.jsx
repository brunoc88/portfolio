import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
  )
}

export default App