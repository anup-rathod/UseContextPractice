import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>

  return(
    <>
   <div className='mt-5'>Welcome {user.username}</div>
   <h2>Your Password is {user.password}</h2>
    </>
  )
    
}

export default Profile