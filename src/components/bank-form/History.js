import React from 'react'

const History = () => {
  return (
    <>
      <div className="action-deposit">
        <h1>HISTORY</h1>
        <div className="history">
          <label>Deposit Exact Amount</label>
          <select>
            <option>ALL</option>
            <option>DEPOSIT</option>
            <option>WITHDRAW</option>
            <option>SENT</option>
            <option>RECEIVED</option>
          </select>
          <div>ALL HISTORY</div>
          <div>DEPOSIT HISTORY</div>
          <div>WITHDRAW HISTORY</div>
          <div>SENT HISTORY</div>
          <div>RECEIVED HISTORY</div>
        </div>
      </div> 
    </>
  )
}

export default History
