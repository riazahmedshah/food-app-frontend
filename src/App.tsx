import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./cms/pages/SignUp"
import Home from "./cms/pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
