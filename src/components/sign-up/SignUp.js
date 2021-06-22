import { useHistory } from 'react-router-dom'
import './register.css'
import React, { useState } from 'react'
import { MessageSuccess, MessageError } from '../components-util/Message'

const SignUp = ({ users, getNewUsers }) => {

  const history = useHistory()

  const [userForm, setUserForm] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const onChange = (e) => {
    const { name, value } = e.target
    if(userForm.hasOwnProperty(name)) {
      userForm[name] = value
    }
    setUserForm({ ...userForm, ...{ balance: 0,  date: new Date(2020, 2, 28), id: Date.now() } })
  }

  const onSubmit = () => {
    let message = ''
    for(const key in userForm) {
      if(userForm.hasOwnProperty(key)) {
        if(userForm[key] === "") {
          message += `${key.charAt(0).toUpperCase() + key.slice(1)} is required <br>`; //
        }
      }
    }

    // verify password if match
    if(userForm.confirmPassword !== userForm.password) {
      message += `Password not Match` 
    }

    MessageError(message) // Message Error from component-utils 

    // validate if message is empty it means no error
    if(message === "") {
      getNewUsers(userForm)
      MessageSuccess('Successfully Register') // Message Success from component-utils 
      history.push('/')
    }
  }

  return (
    <div>
      <div className="container">
        <div className="register">
          <div className="title"><span> Sign up</span></div>
          <form>
            <div className="row">
              <input 
                type="text" 
                placeholder="Firstname" 
                id="firstname" 
                name="firstname"
                onChange={onChange}
              />
            </div>
            <div className="row">
              <input type="text" placeholder="Lastname" name="lastname" onChange={onChange}/>
            </div>
            <div className="row">
              <input type="text" placeholder="Username" name="username" onChange={onChange}/>
            </div>
            <div className="row">
              <input type="password" placeholder="Password" name="password" autoComplete="off" onChange={onChange}/>
            </div>
            <div className="row">
              <input 
                type="password" 
                placeholder="Conifrm Password" 
                name="confirmPassword" 
                autoComplete="off" 
                onChange={onChange}
              />
            </div>
            <div className="row button">
              <input type="button" value="Submit Form" className="submit" onClick={onSubmit} />
            </div>

            <div className="row button back">
              <input type="button"  onClick={() => history.push('/')} value="Back To Home" className="back"/>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
