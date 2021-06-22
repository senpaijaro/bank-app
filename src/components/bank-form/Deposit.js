import React, { useState } from 'react'
import { MessageError } from '../components-util/Message'

const Deposit = ({ user, getUpdateUserBalance }) => {

  const [amount, setAmount ] = useState()

  const onChange = (e) => {
    const { value } = e.target
    setAmount(value)
  }

  const onSubmit = () => {
    if(amount === "" || amount <= 0) {
      return MessageError('Invalid amount')
    } 
    user.balance = user.balance + parseFloat(amount)
    getUpdateUserBalance(user)
    setAmount("")
  }

  return (
    <>
      <div className="action-deposit">
        <form>
          <h1>DEPOSIT</h1>
          <div className="form-action">
            <label>Deposit Exact Amount</label>
            <input type="number" name="amount" value={amount || ''} onChange={onChange}/>
            <button type="button" onClick={onSubmit}>PROCEEDs</button>
          </div>
        </form>
      </div> 
    </>
  )
} 

export default Deposit
