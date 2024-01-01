import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import CardList from "./Components/CardList";
import CreatePost from "./Components/CreatePost";

function App() {
  // refrence KG codding

  const [aciveTab, setActivTab] = useState("Create Post");

  return (
    <div className="main-div">
      <Sidebar aciveTab={aciveTab} setActivTab={setActivTab}/>
      <div className="secdiv">
        <Navbar />
        {aciveTab === "Home" ? <CardList /> : <CreatePost />}
      </div>
    </div>
  );
}

export default App;
