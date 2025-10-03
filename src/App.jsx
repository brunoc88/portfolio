import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Contact from "./pages/Contact"
import Stack from "./pages/Stack"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import RedSocial from "./pages/RedSocial"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="stack" element={<Stack/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="projects/">
          <Route path="" element={<Projects/>}/>
          <Route path="red-social" element={<RedSocial/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App