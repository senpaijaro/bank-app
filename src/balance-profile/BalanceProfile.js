import './balanceProfile.css'

const BalanceProfile = ({user}) => {
  return (
    <>
      <div className="action-mybalance">
        <h3>Account Name: {user.firstname} {user.lastname}</h3>
        <h3>Account Number:{user.id}</h3>
        <h3>Member Since: {user.date.toLocaleString('en-US', {day: '2-digit'})} {user.date.toLocaleString('en-US', {month: 'long'})} {user.date.getFullYear()}</h3>
        <h1>Your balance </h1>
        <span>${user.balance}</span>
      </div>
    </>
  )
}

export default BalanceProfile
