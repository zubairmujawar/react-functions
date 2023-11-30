import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [date, setdate] = useState(new Date())

  useEffect(()=>{
    let dateId = setInterval(() => {
      setdate(new Date())
    }, 1000);
    return ()=> clearInterval(dateId)
  },[])

  return (
    <>
     <h1>
      clock
     </h1>
     <p>Time : {date.toLocaleTimeString()}</p>
     <p>Date : {date.toLocaleDateString()}</p>
    </>
  )
}

export default App
