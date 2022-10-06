import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default function PrivateRoutes() {
    const [token, setToken] = useState({})

    useEffect(() => { onAuthStateChanged(auth, (user) => {
        if (user) {
            setToken(true)
            console.log(user)
        } else {
            setToken(false)
        }
    })})
  return (
    token ? <Outlet/> : <Navigate to='/login'/>
  )
}
