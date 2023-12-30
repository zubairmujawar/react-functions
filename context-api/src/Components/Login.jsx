// refrence chai our code contextApi
import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

// in this component sending the Data
const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({userName, password})
    }
  return (
    <div>
      <input  type='text' placeholder='username'value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      <input  type='text' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
