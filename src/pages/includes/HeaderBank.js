import './headerBank.css'
import { useHistory } from 'react-router-dom'

const HeaderBank = ({loginUser, setLoginUser}) => {
  const history = useHistory()

  const myBankBtn = () => {
    history.push('/my-bank')
  }

  const myProfileBtn = () => {
    history.push('/my-profile')
  }

  const usersTableBtn = () => {
    history.push('/users-table')
  }

  const logoutBtn = () => {
    alert('Successfully Logout')
    history.push('/')
    setLoginUser({...loginUser, username:'', password:''})
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
