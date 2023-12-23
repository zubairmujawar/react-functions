import "./styles/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Hearder } from "./Components/Hearder";
import {Toaster} from "react-hot-toast"
import Cart from "./Components/Cart";
function App() {
  return (
    <BrowserRouter>
      <Hearder />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
