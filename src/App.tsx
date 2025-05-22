import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./cms/pages/Home"
import AuthPage from "./cms/pages/Auth"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<AuthPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
