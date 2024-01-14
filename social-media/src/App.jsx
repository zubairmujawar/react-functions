import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import CardList from "./Components/CardList";
import CreatePost from "./Components/CreatePost";
import PostListProvider from "./store/PostListStore";

function App() {
  // refrence KG codding

  const [aciveTab, setActivTab] = useState("Home");

  return (
    <PostListProvider>
    <div className="main-div">
      <Sidebar aciveTab={aciveTab} setActivTab={setActivTab}/>
      <div className="secdiv">
        <Navbar />
        {aciveTab === "Home" ? <CardList /> : <CreatePost />}
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
