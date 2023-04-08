import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home"
import Presupost from "./Presupost";
import Error from "./Error"


const App = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/presupost" element={<Presupost/>}/>
      <Route path="/presuposts" element={<Navigate to="/presupost"/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
};

export default App;
