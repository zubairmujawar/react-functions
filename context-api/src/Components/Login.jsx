// refrence chai our code contextApi
import React,{useState, useContext} from 'react'
import UserContext from '../context-old/UserContext'

// in this component sending the Data
const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({userName, password})
        setUserName('')
        setpassword('')
    }
  return (
    <div className='flex justify-center decoration-slice className=" bg-white dark:bg-gray-600 dark:text-white py-2 "'>
      <input  type='text' placeholder='username'value={userName} onChange={(e)=>setUserName(e.target.value)} className='p-2  m-3 font-light rounded-xl text-black'/>

      <input  type='password' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} className=' p-2  m-3 font-light rounded-xl text-black'/>

      <button onClick={handleSubmit} className='class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 ocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2focus-visible:outline-indigo-500"'>Submit</button>
    </div>
  )
}

export default Login
