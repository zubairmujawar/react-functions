import "./styles/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Hearder } from "./Components/Hearder";
function App() {
  return (
    <BrowserRouter>
      <Hearder />
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
