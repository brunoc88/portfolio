import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Contact from "./pages/Contact"
import Stack from "./pages/Stack"
import Home from "./pages/Home"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="home" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="stack" element={<Stack/>}/>
      </Route>
    </Routes>
  )
}

export default App