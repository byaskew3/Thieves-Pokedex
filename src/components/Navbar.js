import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Navbar() {

  const [user, setUser] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  })

  const logout = async () => {
    await signOut(auth)
    navigate('/login')
  }

  return (
    <div>
        {/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* Container wrapper */}
  <div className="container">
    {/* Navbar brand */}
    <a className="navbar-brand me-2" href="https://pokeapi.co/">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" height={16} alt="MDB Logo" loading="lazy" style={{marginTop: '-1px'}} />
    </a>
    {/* Toggle button */}
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars" />
    </button>
    {/* Collapsible wrapper */}
    <div className="collapse navbar-collapse" id="navbarButtonsExample">
      {/* Left links */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      {/* Left links */}
      <div className="d-flex align-items-center">
        <p className='me-3 pt-3'>Hello, {user.email}</p>
        <button type="button" className="btn btn-primary me-3" onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
    {/* Collapsible wrapper */}
  </div>
  {/* Container wrapper */}
</nav>
{/* Navbar */}

    </div>
  )
}