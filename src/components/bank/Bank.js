import './myBank.css'
import HeaderBank from './../HeaderBank/HeaderBank'
import BankCards from './../bank-cards/BankCards'
import Deposit from './../bank-form/Deposit'
import Withdrawal from './../bank-form/Withdrawal'
import SendMoney from './../bank-form/SendMoney'
import BankBalance from './../bank-balance/BankBalance'
import { Switch, Route,  BrowserRouter as Router } from 'react-router-dom'

import { useState } from 'react'

const MyBank = ({ user, updateSendUserMoney, userLogout }) => {

  const [newUserBalance, setNewUserBalance] = useState(user) // resave new user and balance

  const getUpdateUserBalance = (user) => {
    setNewUserBalance({ })
    setNewUserBalance({ ...user })
  }
  
  return (
   
        <div className="my-bank">
          <HeaderBank user={user} userLogout={userLogout}/>
          <Router>
          <BankCards user={user}/>
          
            <div className="action">
              <BankBalance user={newUserBalance}/>
                <Switch>
                  <Route path="/deposit">
                      <Deposit user={user} getUpdateUserBalance={getUpdateUserBalance} /> 
                  </Route>

                  <Route path="/withdrawal">
                    <Withdrawal user={user} getUpdateUserBalance={getUpdateUserBalance}/>
                  </Route>

                  <Route path="/send-money">
                    <SendMoney user={user} updateSendUserMoney={updateSendUserMoney} getUpdateUserBalance={getUpdateUserBalance}/>
                  </Route>
                </Switch>
            </div>

          <div className="footer">
            <label>Did you know?</label>
            <p>That InBank purges your deposited money and does nothing else? Amazing right?</p>
          </div>
          </Router>
        </div>

  )
}
 
export default MyBank


{/* 
        <div key={index}>

          <div className="action">

            <BalanceProfile user={user}/>

            { switchRoute === 'deposit' ? <Deposit displayUsername={displayUsername} setAmount={setAmount}/> : '' }
            { switchRoute === 'withdrawal' ? <Withdrawal setWithdrawAmount={setWithdrawAmount} />  : '' }
            { switchRoute === 'send-money' ? <SendMoney setSendMoneyAmount={setSendMoneyAmount} sendMoney={sendMoney} setSendMoney={setSendMoney} users={users} user={user}/>  : '' }
            { switchRoute === 'history' ? <History/>  : '' }
            
          </div>
          
        </div>

      : '')
      } */}