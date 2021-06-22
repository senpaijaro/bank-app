import './login.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { MessageError, MessageSuccess } from '../components-util/Message'

const SignIn = ({ users, getUserLogin }) => {
  const history = useHistory()
  
  const navigateRoute = (route) => {
    history.push(route)
  }

  const [userForm, setUserForm] = useState({
    username: '',
    password: ''
  })

  const onChange = (e) => {
    const { name, value } = e.target
    if(userForm.hasOwnProperty(name)) {
      userForm[name] = value
    }
    setUserForm({ ...userForm})
  }

  const onSubmit = () => {
    const index = users.findIndex((user) => user.username === userForm.username && user.password === userForm.password)
    if(index === -1) {
      return MessageError('Username and Password is invalid')
    } else {
      MessageSuccess('SuccessFully Login')
      getUserLogin(index) // props functions from Apps.js
      history.push('/my-bank')
    }
  }

  return (
    <div>
      <div className="container">
        <div className="login">
          <div className="title"><span>Login Form</span></div>
          <form>
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" name="username" autoComplete="off" onChange={onChange}/>
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password" autoComplete="off" onChange={onChange}/>
            </div>
            <div className="row button login">
              <input type="button" value="Login" className="login-input" onClick={onSubmit} />
            </div>
            <div className="row button back">
              <input type="button" value="Back To Home" onClick={() => history.push('/')} className="login-back"/>
            </div>
            <div className="signup-link" onClick={() => navigateRoute('/register')}>Not registered yet? <button>Signup now</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
