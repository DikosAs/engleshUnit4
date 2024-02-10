import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./components/main/about/About.jsx";
import Events  from "./components/main/events/Events.jsx";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path={ "/home" } element={ "" } />
        <Route path={ "/about" } element={<About />} />
        <Route path={ "/events" } element={<Events />} />
        <Route path={ "*" } element={<Navigate to="/home" replace/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
