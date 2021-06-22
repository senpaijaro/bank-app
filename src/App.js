import './App.css';
import { Switch, Route,  BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useState } from 'react'
import MyBank from './pages/my-bank/MyBank';
import UsersTable from './pages/users-table/UsersTable';
import Myprofile from './pages/my-profile/Myprofile';

function App() {

  // USERS DATA 
  const [users, setUsers] = useState(
    [
      {
        id:2457963214,
        firstname:"victor",
        lastname:"batal",
        username:"victor",
        password:"1234",
        date: new Date(2020, 2, 28),
        balance:1000,
      },
      {
        id:6985345471,
        firstname:"jerald",
        lastname:"batal",
        username:"jerald",
        password:"1234",
        balance:2000,
        date: new Date(2020, 2, 28),
      },
      {
        id:6521030017,
        firstname:"jade",
        lastname:"batal",
        username:"jade",
        password:"1234",
        balance:3000,
        date: new Date(2020, 2, 28),
      },
      {
        id:8754963254,
        firstname:"marife",
        lastname:"batal",
        username:"marife",
        password:"1234",
        balance:4000,
        date: new Date(2020, 2, 28),
      },
    ]
  )

  const [loginUser, setLoginUser] = useState({
    username:'jerald',
    password:'1234'
  })

  const loginInput = (e) => {
    const {name, value} = e.target
    setLoginUser({...loginUser, 
      [name]:  value,
    })
  }

  const setAmount = (balance) => {
    const index = users.findIndex(user => user.username === loginUser.username)
    users[index].balance =  parseFloat(users[index].balance) + parseFloat(balance)
    setUsers([...users])
  }

  const setWithdrawAmount = (balance) => {
    const index = users.findIndex(user => user.username === loginUser.username)
    users[index].balance =  parseFloat(users[index].balance) - parseFloat(balance)
    setUsers([...users])
  }

  const [sendMoney, setSendMoney] = useState(
    {
      accountNumber:"",
      amount:""
    }
  )

  const setSendMoneyAmount = (amount) => {
    const index = users.findIndex(user => user.username === loginUser.username)
    users[index].balance =  parseFloat(users[index].balance) - parseFloat(amount)
    setUsers([...users])
  }

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          
          <Route exact path="/register">
            <Register users={users} setUsers={setUsers}/>
          </Route>

          <Route exact path="/login">
            <Login 
              users={users}
              loginInput={loginInput}
              loginUser={loginUser}
              setLoginUser={setLoginUser}
            />
          </Route>

          <Route path="/my-bank">
            <MyBank 
              users={users} 
              setAmount={setAmount} 
              loginUser={loginUser} 
              setLoginUser={setLoginUser}
              displayUsername={loginUser.username} 
              setWithdrawAmount={setWithdrawAmount}
              setSendMoneyAmount={setSendMoneyAmount}
              sendMoney={sendMoney}
              setSendMoney={setSendMoney}
            />
          </Route>

          <Route path="/users-table">
            <UsersTable/>
          </Route>

          
          <Route path="/my-profile">
            <Myprofile/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
