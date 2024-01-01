import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import CardList from './Components/CardList'
import CreatePost from './Components/CreatePost';
function App() {

  const [aciveTab, setActivTab] = useState('Home')
  return (
    <div className='main-div'>
      <Sidebar aciveTab={aciveTab} setActivTab={setActivTab}/>
      <div className='secdiv'>
      <Navbar/>
      <h1 className='mx-auto p-2'>Social Media</h1>
      <CardList/>
      <CreatePost/>
      </div>
    </div>
  )
}

export default App;