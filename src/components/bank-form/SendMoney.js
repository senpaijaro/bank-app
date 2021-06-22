import React, { useState } from 'react'
import { MessageError } from '../components-util/Message'

const SendMoney = ({ user, getUpdateUserBalance, updateSendUserMoney }) => {

  const [amount, setAmount ] = useState()
  const [accountNumber, setAccountNumber ] = useState('1624371797876')

  const onSubmit = () => {
    if(amount === "" || amount <= 0) {
      return MessageError('Invalid amount')
    } 

    if(user.balance <= amount) {
      return MessageError('Not enough funds')
    } 
    user.balance = user.balance - parseFloat(amount)
    getUpdateUserBalance(user)
    updateSendUserMoney(accountNumber, amount)
    setAmount("")
    setAccountNumber("")
  }

  return (
    <>
      <div className="action-deposit">
        <form>
          <h1>Send Money</h1>
          <div className="form-action">
            <label>Send Exact Amount</label>
            <input type="number" placeholder="Account No" name="amount" value={accountNumber || ''} onChange={event => setAccountNumber(event.target.value)}/>
            <input type="number" name="amount" value={amount || ''}  onChange={event => setAmount(event.target.value)}/>
            <button type="button" onClick={onSubmit}>PROCEED</button>
          </div>
        </form>
      </div> 
    </>
  )
} 

export default SendMoney
