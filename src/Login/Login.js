import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  async function login() {
    const newUser = { email: userName, password }
    console.log(newUser)
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, newUser)
    console.log(response)
    if (response.status === 200) {
      localStorage.setItem('userId', response.data.userId)
      localStorage.setItem('userRole', response.data.role)
      navigate('/')
    }

  }
  return (
    <div className='login-container'>
      <div className='form-group'>
        <label>Email:</label>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

      </div>
      <div className='form-group'>
        <label>Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>

      </div>


    </div>
  )
}
