import './myBank.css'
import HeaderBank from '../includes/HeaderBank'
import BankCards from '../bank-cards/BankCards'
import BalanceProfile from '../../balance-profile/BalanceProfile'
import Deposit from '../../dwsh/Deposit'
import { useState } from 'react'
import Withdrawal from '../../dwsh/Withdrawal'
import SendMoney from '../../dwsh/SendMoney'
import History from '../../dwsh/History'


const MyBank = ({users, setAmount, setWithdrawAmount, setSendMoneyAmount, sendMoney, setSendMoney, loginUser, setLoginUser, displayUsername}) => {
  const [switchRoute, setSwitchRoute] = useState("deposit")

  const getRoute = (val) => {
    if(val === "deposit") {
      setSwitchRoute(val)
    }
    if(val === "withdrawal") {
      setSwitchRoute(val)
    }
    if(val === "send-money") {
      setSwitchRoute(val)
    }
    if(val === "history") {
      setSwitchRoute(val)
    }
  }
  
  return (
    <div className="my-bank">
      <HeaderBank loginUser={loginUser} setLoginUser={setLoginUser}/>
      {
        users.map((user, index) => user.username === loginUser.username ? 
        <div key={index}>
          <BankCards getRoute={getRoute} users={users} user={user}/>

          <div className="action">

            <BalanceProfile user={user}/>

            { switchRoute === 'deposit' ? <Deposit displayUsername={displayUsername} setAmount={setAmount}/> : '' }
            { switchRoute === 'withdrawal' ? <Withdrawal setWithdrawAmount={setWithdrawAmount} />  : '' }
            { switchRoute === 'send-money' ? <SendMoney setSendMoneyAmount={setSendMoneyAmount} sendMoney={sendMoney} setSendMoney={setSendMoney} users={users} user={user}/>  : '' }
            { switchRoute === 'history' ? <History/>  : '' }
            
          </div>
          
        </div>

      : '')
      }

      <div className="footer">
        <label>Did you know?</label>
        <p>That InBank purges your deposited money and does nothing else? Amazing right?</p>
      </div>

    </div>
  )
}
 
export default MyBank
