import React, { useState } from 'react'
import { MessageError } from '../components-util/Message'

const Withdrawal = ({ user, getUpdateUserBalance }) => {

  const [amount, setAmount ] = useState()

  const onChange = (e) => {
    const { value } = e.target
    setAmount(value)
  }

  const onSubmit = () => {
    if(amount === "" || amount <= 0) {
      return MessageError('Invalid amount')
    } 
    if(user.balance <= amount) {
      return MessageError('Not enough funds')
    } 
    user.balance = user.balance - parseFloat(amount)
    getUpdateUserBalance(user)
    setAmount("")
  }

  return (
    <>
      <div className="action-deposit">
        <form>
          <h1>WITHDRAWAL</h1>
          <div className="form-action">
            <label>Withdraw Exact Amount</label>
            <input type="number" name="amount" value={amount} onChange={onChange}/>
            <button type="button" onClick={onSubmit}>PROCEED</button>
          </div>
        </form>
      </div> 
    </>
  )
} 

export default Withdrawal
