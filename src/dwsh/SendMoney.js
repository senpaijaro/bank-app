import React, { useState } from 'react'

const SendMoney = ({user, users, sendMoney, setSendMoney, setSendMoneyAmount}) => {
  const inputNumber = (e) => {
    const {value, name} = e.target
    setSendMoney({...sendMoney, [name]:value})
  }

  const [messageWarning, setMessageWarning] = useState({
    forAccountNumber: '',
    forAmountSend: '',
    forSendSuccess:'',
    forAccountNumberNotExist:'',
    forBalanceExist:'',
  })

  const submitDeposit = (e) => {
    e.preventDefault()
    if(sendMoney.accountNumber === "") {
      setMessageWarning({...messageWarning, forAccountNumber :'Account number is required'})
      setTimeout(function(){ 
      setMessageWarning({...messageWarning, forAccountNumber :''})
      ; }, 2000);
      return
    }
    if(sendMoney.amount === "") {
      setMessageWarning({...messageWarning, forAmountSend :'Send Amount is required'})
      setTimeout(function(){ 
      setMessageWarning({...messageWarning, forAmountSend :''})
      ; }, 2000);
      return
    }
    const sendAmount = users.find(number => number.id === parseFloat(sendMoney.accountNumber))
    if(!sendAmount) {
      setMessageWarning({...messageWarning, forAccountNumberNotExist :'This Account Number is not registered'})
      setTimeout(function(){ 
      setMessageWarning({...messageWarning, forAccountNumberNotExist :''})
      ; }, 2000);
      return
    } else {
      sendAmount.balance =  parseFloat(sendAmount.balance) + parseFloat(sendMoney.amount)
      setSendMoneyAmount(sendMoney.amount)
      setMessageWarning({...messageWarning, forSendSuccess :'Successfully send money to your friend.'})
      setTimeout(function(){ 
      setMessageWarning({...messageWarning, forSendSuccess :''})
      ; }, 2000);
      setSendMoney({...sendMoney, accountNumber:"", amount:""})
      // if(user.balance <= 0) {
      //   setSendMoneyAmount(user.balance)
      //   setMessageWarning({...messageWarning, forBalanceExist :`Your balance is only ${user.balance}`})
      //   setTimeout(function(){ 
      //   setMessageWarning({...messageWarning, forBalanceExist :''})
      //   ; }, 2000);
      //   return
      // }
      return
    }
  }

  return (
    <>
      <div className="action-sendmoney">
        <form>
          <h1>SEND MONEY</h1>
          <div className="form-action">
            <label>Account Number (10 digit)</label>
            <p>{messageWarning.forAccountNumber}</p>
            <p>{messageWarning.forAccountNumberNotExist}</p>
            <input type="number" placeholder="" name="accountNumber" value={sendMoney.accountNumber} onChange={inputNumber}/>
            <label>Amount to send </label>
            <p>{messageWarning.forAmountSend}</p>
            <input type="number" placeholder="" name="amount" value={sendMoney.amount} onChange={inputNumber}/>
            <p>{messageWarning.forBalanceExist}</p>
            <span>{messageWarning.forSendSuccess}</span>
            <button onClick={submitDeposit}>PROCEED</button>
          </div>
        </form>
      </div> 
    </>
  )
}

export default SendMoney
