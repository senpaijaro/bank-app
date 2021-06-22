import React, { useState } from 'react'

const Deposit = ({setAmount}) => {
  const [balance, setBalance] = useState('')
  const inputNumber = (e) => {
    const value = e.target.value
    setBalance(value)
  }
  const [messageWarning, setMessageWarning] = useState('')
  // console.log(user, parseInt(state))

  const submitDeposit = (e) => {
    e.preventDefault()
    if(balance < 1000) {
      setMessageWarning('$1000 above minimun deposit required')
      setTimeout(function(){ 
      setMessageWarning('')
      ; }, 4000);
    } else {
      setAmount(balance)
      setBalance('')
    }
  }

  return (
    <>
      <div className="action-deposit">
        <form>
          <h1>DEPOSIT</h1>
          <div className="form-action">
            <label>Deposit Exact Amount</label>
            <input type="number" placeholder="" value={balance} onChange={inputNumber}/>
            <p>{messageWarning}</p>
            <button onClick={submitDeposit}>PROCEED</button>
          </div>
        </form>
      </div> 
    </>
  )
} 

export default Deposit
