import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const submitHandler = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <>
        <h2 className='bg-yellow-300 m-4'>Login</h2>
        <input type="text" className='m-3'
        value = {username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='Enter Username'
        />
                
        <input type="text" className='m-3'
        value = {password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Enter Password'
        />

        <button onClick={submitHandler}>Submit</button>
    </>
  )
}

export default Login