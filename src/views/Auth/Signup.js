import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(false);

  const navigate = useNavigate()

  const handleSignUp = async (event) => {
    event.preventDefault()
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
      navigate('/')
    } catch(error) {
      setError(true)
    }
  }

  return (
    <div>
    <section className="vh-100 background">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: '1rem'}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://wallpaper.dog/large/5576396.jpg" alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={handleSignUp}>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <span className="h1 fw-bold mb-0">Thieves-98 Pokedex</span>
                  </div>
                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Sign up to explore pokemon</h5>
                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder='Email Address' onChange={(event) => setEmail(event.target.value)} />
                    <label className="form-label" htmlFor="form2Example17"></label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
                    <label className="form-label" htmlFor="form2Example27"></label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder='Confirm Password' onChange={(event) => setConfirmPassword(event.target.value)}/>
                    <label className="form-label" htmlFor="form2Example27"></label>
                  </div>
                  {error && (<span className='wrong-cred'>
                    Email is already in use!
                  </span>)}
                  <div className="pt-1 mb-4">
                    {password !== confirmPassword ?
                      <button disabled className="btn btn-dark btn-lg btn-block" type="submit">Register</button> : <button className="btn btn-dark btn-lg btn-block" type="submit">Register</button>
                    }
                  </div>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already have an account? <Link to="/login" style={{color: '#393f81'}}>Login here</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
