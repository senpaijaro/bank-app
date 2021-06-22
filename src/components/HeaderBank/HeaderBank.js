import './headerBank.css'
import { useHistory } from 'react-router-dom'

const HeaderBank = ({userLogout}) => {
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
    history.push("/login");
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