import './App.css';
import { Switch, Route,  BrowserRouter as Router } from 'react-router-dom'
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import SignUp from './components/sign-up/SignUp';
import SignIn from './components/sign-in/SignIn';
import Bank from './components/bank/Bank';

import { useState } from 'react'
import MyBank from './pages/my-bank/MyBank';
import UsersTable from './pages/users-table/UsersTable';
import Myprofile from './pages/my-profile/Myprofile';
import { MessageError } from './components/components-util/Message';

function App() {

  const [users, setUsers ] = useState([
    {
      id: '1624371797876',
      firstname: 'Jade',
      lastname: 'Batal',
      username: 'test',
      password: 'test',
      balance: 1000,
      date: new Date(2020, 2, 28)
    },
    {
      id: '1000000000',
      firstname: 'Juan',
      lastname: 'Delacruz',
      username: 'test1',
      password: 'test1',
      balance: 1000,
      date: new Date(2020, 2, 28)
    }
  ])

  const [user, setUser] = useState({}) // for saving login information without s it means 1 user only 

  const getNewUsers = (user) => {
    users.push(user)
    setUsers([...users])
  }

  const getUserLogin = (index) => {
    setUser({ ...users[index]}) // get index list of users array and save to userLogin array list
  }

  const userLogout = () => {
    setUser({ })
  }

  const updateSendUserMoney = (accountNumber, amount) => {
    const index = users.findIndex(user => user.id === accountNumber)
    if(index === -1) {
      return MessageError('Invalid Account Numnber')
    }

    users[index].balance = users[index].balance + parseFloat(amount)
    console.log(users[index])
    setUsers([...users])
  }

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <HeaderMenu />
          </Route>
          
          <Route exact path="/register">
            <SignUp getNewUsers={getNewUsers} />
          </Route>

         <Route exact path="/login">
            <SignIn 
              users={users}
              getUserLogin={getUserLogin}
            />
          </Route>

          <Route path="/my-bank">
            <Bank
              userLogout={userLogout}
              updateSendUserMoney={updateSendUserMoney}
              user={user}
            />
          </Route>

         {/*  <Route path="/users-table">
            <UsersTable/>
          </Route>

          
          <Route path="/my-profile">
            <Myprofile/>
          </Route> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
