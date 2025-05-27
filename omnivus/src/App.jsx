
import Home from "./pages/home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Services from "./pages/Services"
function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Service" element={<Services/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
