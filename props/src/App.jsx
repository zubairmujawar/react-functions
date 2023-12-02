import './App.css'
import Calculator from "./Components/Calculetor"
import Clock from './Components/Clock'
import Items from './Components/Items'
import FoodItems from './Components/FoodItems'

function App() {
  const food = ["Rice", "Biryani", "polao", "Kheema pav", "Dal", "wheat", "Milk"];

  return (
    <>
    <FoodItems item={food}/>
    {/* <Calculator/> */}
    {/* <Clock/> */}
    </>
  )
}

export default App
