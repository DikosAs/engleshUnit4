import { Routes, Route, Navigate } from "react-router-dom";
import "./home.css"

export default function Home() {
  return (
    <>
      <Routes>
        <Route path={ "*" } element={<Navigate to={ "/about" }/>} />
      </Routes>
    </>
  )
}