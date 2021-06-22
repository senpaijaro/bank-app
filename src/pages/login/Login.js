import './login.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const Login = ({loginInput, users, setLoginUser, loginUser}) => {

  const history = useHistory()

  const backBtn = (e) => {
    e.preventDefault()
    history.push('/')
  }

  const registerBtn = (e) => {
    e.preventDefault()
    history.push('/register')
  }

  const [alertMessage, setAlertMessage] = useState(
    {
      usernameValidation:"",
      passwordValidation:"",
    }
  )
  
  const loginBtn = (e) => {
    e.preventDefault()

    const userLogin = users.find(user => user.username === loginUser.username && user.password === loginUser.password)
    if(userLogin) {
      history.push('/my-bank')
    } else {
      setAlertMessage({...alertMessage, usernameValidation: "User doesn't match"});
      setTimeout(function(){ 
      setAlertMessage({...alertMessage, usernameValidation: ''})
      ; }, 1000);
    }
    // setLoginUser({...loginUser, username:'', password:''})
  }

  return (
    <div>
      <div className="container">
        <div className="login">
          <div className="title"><span>Login Form</span></div>
          <form>
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" name="username" required onChange={loginInput}/>
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password" autoComplete="off" required onChange={loginInput}/>
            </div>
            <label>{alertMessage.usernameValidation}</label>
            <div className="row button login">
              <input type="submit" value="Login" className="login-input" onClick={loginBtn}/>
            </div>
            <div className="row button back">
              <input type="submit" value="Back To Home" className="login-back" onClick={backBtn}/>
            </div>
            <div className="signup-link">Not registered yet? <button onClick={registerBtn}>Signup now</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
