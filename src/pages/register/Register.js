import { useHistory } from 'react-router-dom'
import './register.css'
import React, { useState } from 'react'

const Register = ({users, setUsers}) => {
 
  const history = useHistory()

  const [state, setState] = useState(
    {
    firstname:'',
    lastname:'',
    username:'',
    password:'',
    confirmPassword:''
    }
  )
 
  const [formValidation, setFormValidation] = useState(
    {
      firstname:"",
      lastname:"",
      username:"",
      password:"",
      confirmPassword:"",
      successMessage:"",
      passwordNotMatch:"",
      usernameValidationExist:"",
    }
  )

  const onChange = (e) => {
    const { name, value } = e.target
    setState({...state, [name] : value})
  }

  const submitInput = (e) => {
    e.preventDefault(e)

    if(state.firstname === "") {
      setFormValidation({...formValidation, firstname: 'Firstname Required'})
      setTimeout(function(){ 
      setFormValidation({...formValidation, firstname: ''})
    ; }, 2000)
    return

    }
    
    if(state.lastname === "") {
      setFormValidation({...formValidation, lastname: 'Lastname Required'})
      setTimeout(function(){ 
      setFormValidation({...formValidation, lastname: ''})
    ; }, 2000)
    return

    }

    if(state.username === "") {
      setFormValidation({...formValidation, username: 'Username Required'})
      setTimeout(function(){ 
      setFormValidation({...formValidation, username: ''})
    ; }, 2000)
    return

    }

    if(state.password === "") {
      setFormValidation({...formValidation, password: 'Password Required'})
      setTimeout(function(){ 
      setFormValidation({...formValidation, password: ''})
    ; }, 2000)
    return

    }

    if(state.confirmPassword === "") {
      setFormValidation({...formValidation, confirmPassword: 'Confirm Password Required'})
      setTimeout(function(){ 
      setFormValidation({...formValidation, confirmPassword: ''})
    ; }, 2000)
    return

    }

    if(state.password !== state.confirmPassword) {
      setFormValidation({...formValidation, passwordNotMatch: 'Password Does Not Match'})
      setTimeout(function(){ 
      setFormValidation({...formValidation, passwordNotMatch: ''})
    ; }, 2000)
    return

    }

    // || user.username !== state.username
    // const usernameValidation = users.find(user => user.username === state.username )
    // if(usernameValidation.username) {
    //   users.find(user => user.username === state.username)
    //     setFormValidation({...formValidation, usernameValidationExist: 'Username is already exist in our data base!'})
    //     setTimeout(function(){ 
    //     setFormValidation({...formValidation, usernameValidationExist: ''})
    //     ; }, 2000);
    //    return
   
    // }  
    
    else {
      
      delete state.confirmPassword
      setUsers([...users, {
          id:Date.now(),
          firstname:state.firstname,
          lastname:state.lastname,
          username:state.username,
          password:state.password,
          date:new Date(),
          balance:0
      }])

      state.confirmPassword = ""
      setState({...state,
        firstname:"",
        lastname:"",
        username:"",
        password:""})
        setFormValidation({...formValidation, successMessage: 'Successfully registered your account'})
      //   setTimeout(function(){ 
      //   setFormValidation({...formValidation, successMessage: ''})
      // ; }, 5000)
    }
  
  }

  const backBtn = (e) => {
    e.preventDefault()
    history.push('/')
  }

  return (
    <div>
      <div className="container">
        <div className="register">
          <div className="title"><span> Sign up</span></div>
          <form onSubmit={submitInput}>
            <p>{formValidation.firstname}</p>
            <div className="row">
              <input 
                type="text" 
                placeholder="Firstname" 
                id="firstname" 
                name="firstname" 
                onChange={onChange} 
                value={state.firstname} 
              />
            </div>
            <p>{formValidation.lastname}</p>

            <div className="row">
              <input type="text" placeholder="Lastname" name="lastname" onChange={onChange} value={state.lastname} />
            </div>
            <p>{formValidation.username}</p>
            <p>{formValidation.usernameValidationExist}</p>
            <div className="row">
              <input type="text" placeholder="Username" name="username" onChange={onChange} value={state.username} />
            </div>
            <p>{formValidation.password}</p>

            <div className="row">
              <input type="password" placeholder="Password" name="password" autoComplete="off" onChange={onChange} value={state.password} />
            </div>
            <p>{formValidation.confirmPassword}</p>
            <p>{formValidation.passwordNotMatch}</p>
            <div className="row">
              <input 
                type="password" 
                placeholder="Conifrm Password" 
                name="confirmPassword" 
                autoComplete="off" 
                onChange={onChange} 
                value={state.confirmPassword} 
              />
            </div>
            <label>{formValidation.successMessage}</label>
            <div className="row button">
              <input type="button" value="Submit Form" className="submit" onClick={submitInput}/>
            </div>

            <div className="row button back">
              <input type="button" value="Back To Home" onClick={backBtn} className="back"/>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
