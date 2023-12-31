import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import ThemeBtn from "./Components/ThemeBtn";
import UserContextProvider from "./context-old/UserContextProvider";
import { ThemeProvider } from "./context/Theme";

function App() {

  const [themeMode, setThemeMode] = useState('light');
  const darkMode = ()=>{
    setThemeMode('dark')
  }
  const lightMode = ()=>{
    setThemeMode('light')
  }

  // actual change in theme 
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  return <UserContextProvider>
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
      <div className=" bg-white items-center flex flex-col dark:bg-gray-900 dark:text-white py-2 w-full h-[100vh] gap-5">
        <ThemeBtn/>
        <Login/>
        <Profile/>
      </div>
  </ThemeProvider>
  </UserContextProvider>
  
}

export default App;
