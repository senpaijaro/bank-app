import { useHistory } from 'react-router-dom'
import './register.css'
import React, { useState } from 'react'

const Register = () => {

  const history = useHistory()

  const [state, setForms] = useState({
    form: {
      firstname:'',
      lastname:'',
      username:'',
      password:'',
      confirmPassword:''
    },
    formVadidation: {
      firstname: false,
      lastname: false,
      username: false,
      password: false,
      confirmPassword: false,
    },
    
  })

  const onChange = (e) => {
    const { name, value } = e.target
    state.form[name] = value
    if(state.form[name] === "") {
      state.formVadidation[name] = true
    } else {
      state.formVadidation[name] = false
    }
    return setForms({
      form: state.form,
      formVadidation: state.formVadidation
    })
  }


  const submitInput = (e) => {
    e.preventDefault(e)
  }

  const backBtn = (e) => {
    history.push('/')
  }

  return (
    <div>
      <div className="container">
        <div className="register">
          <div className="title"><span> Sign up</span></div>
          <form>

            <div className="row">
              {state.formVadidation.firstname === true ? (<p>Firstname is required</p>) : ''}
              <input type="text" placeholder="Firstname" id="firstname" name="firstname" onChange={onChange} />
            </div>

            <div className="row">
              <input type="text" placeholder="Lastname" name="lastname" onChange={onChange} />
            </div>

            <div className="row">
              <input type="text" placeholder="Username" name="username" onChange={onChange} />
            </div>

            <div className="row">
              <input type="password" placeholder="Password" name="password" autoComplete="off" onChange={onChange} />
            </div>

            <div className="row">
              <input type="password" placeholder="Conifrm Password" name="confirmPassword" autoComplete="off" onChange={onChange} />
            </div>
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


// for submit

  // formValidation: {
    //   firstname: false,
    //   lastname: false,
    //   username: false,
    //   password: false,
    //   confirmPassword: false,
    // },
    
   // for(const key in state.form) {
    //   console.log(state.form[key])
    //   console.log(state.formValidation[key])
    //   if(state.form.hasOwnProperty(key)) {
    //     if(state.form[key] !== "") {
    //       state.formValidation[key] = false
    //     } else {
    //       state.formValidation[key] = true
    //     }
    //   }
    // }

//for onchange

      // if(state.form[name] === "") {
    //   state.formValidation[name] = true
    // } else {
    //   state.formValidation[name] = false
    // }

            // {/* {state.formValidation.username === true ? (<p>username is required</p>) : ''} */}


export default Register
