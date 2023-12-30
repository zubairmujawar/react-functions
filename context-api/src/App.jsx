import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Todo from "./Components/Todo";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return <UserContextProvider>
  <Login/>
  <Profile/>
  </UserContextProvider>
  ;
}

export default App;
