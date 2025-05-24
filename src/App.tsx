import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./cms/pages/Home"
import AuthPage from "./cms/pages/Auth"
import Restaurant from "./cms/pages/Restaurants"
import Partners from "./cms/pages/Partners"
import Layout from "./cms/components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route element={<Layout/>}>
          <Route path="/restaurants" element={<Restaurant/>}/>
          <Route path="/partners" element={<Partners/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
