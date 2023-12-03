import './App.css'
import Calculator from "./Components/Calculetor"
import Clock from './Components/Clock'
import Items from './Components/Items'
import FoodItems from './Components/FoodItems'
import Card from './Components/Card'
import AllPhotos from './Components/AllPhotos'

function App() {
  const food = ["Rice", "Biryani", "polao", "Kheema pav", "Dal", "wheat", "Milk"];

  return (
    <>
    {/*as name of array is food, but we use as other name i.e =>item, use in other file eg. FoodItems.jsx */}
    {/* <FoodItems item={food}/>  */}
    {/* <Calculator/> */}
    {/* <Clock/> */}
    {/* <Card/> */}
    <AllPhotos/>
    </>
  )
}

export default App
