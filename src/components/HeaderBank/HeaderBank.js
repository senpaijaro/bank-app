import './headerBank.css'
import { useHistory, Redirect } from 'react-router-dom'
import { useState } from 'react'
import { MessageError } from '../components-util/Message'
const HeaderBank = ({userLogout}) => {
  const history = useHistory()
  const [redirect, setRedirect] = useState(true)

  const myBankBtn = () => {
    return MessageError('This is not avaible for now')
    history.push('/my-bank')
  }

  const myProfileBtn = () => {
    return MessageError('This is not avaible for now')
    history.push('/my-profile')
  }

  const usersTableBtn = () => {
    return MessageError('This is not avaible for now')
    history.push('/users-table')
  }

  const logoutBtn = () => {
    history.push('/login')
    setRedirect(true)
  }

  return (
    <div>
      <div className="bank-logo">
        <h1>BANK</h1>
        <div className="bank-btn">
          <button onClick={myBankBtn}>My Bank</button>
          <button onClick={myProfileBtn}>My Profile</button>
          <button onClick={usersTableBtn}>Users Table</button>
          <button onClick={logoutBtn}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderBank
