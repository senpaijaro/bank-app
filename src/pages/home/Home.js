import React from 'react'
import './Home.css'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()

  const loginBtn = () => {
    history.push('/login')
  } 

  const registerBtn = () => {
    history.push('/register')
  }

  return (
    <>
      <div className="home">
        <div className="center buttons">
          <h1>Banking + Budget App</h1>
            <p>A banking app is a mobile app where you can access the details of your bank account and complete transactions directly from your phone, tablet, or mobile device.</p>
            {/* <div className="started-btn">
            </div> */}
            <div className="buttons">
              <button onClick={loginBtn} className="btn2">Get Started</button>
              <button onClick={registerBtn} className="btn2">Register</button>
              <button onClick={loginBtn} className="btn2">Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
