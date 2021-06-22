import { useState } from 'react'

const Withdrawal = ({setWithdrawAmount}) => {
  const [balance, setBalance] = useState('')
  const inputNumber = (e) => {
    const value = e.target.value
    setBalance(value)
  }
  const [messageWarning, setMessageWarning] = useState('')
  // console.log(user, parseInt(state))

  const submitDeposit = (e) => {
    e.preventDefault()
    if(balance < 100) {
      setMessageWarning('$100 above minimun withdraw required')
      setTimeout(function(){ 
      setMessageWarning('')
      ; }, 4000);

    } else {
      setWithdrawAmount(balance)
      setBalance('')
    }
  }
  return (
    <>
      <div className="action-withdrawal">
        <form>
          <h1>WITHDRAWAL</h1>
          <div className="form-action">
            <label>Withdraw Exact Amount</label>
            <input type="number" placeholder="" value={balance} onChange={inputNumber}/>
            <p>{messageWarning}</p>
            <button onClick={submitDeposit}>PROCEED</button>
          </div>
        </form>
      </div> 
    </>
  )
}

export default Withdrawal
