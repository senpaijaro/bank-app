import './bankCards.css'
import GetAppIcon from '@material-ui/icons/GetApp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SendIcon from '@material-ui/icons/Send';
import HistoryIcon from '@material-ui/icons/History';
import { useHistory } from 'react-router';
import { MessageError } from '../components-util/Message'

const BankCards = ({ user }) => {

  const history = useHistory()

  const navigateRoute = (route) => {
    if(route === '/history') {
      return MessageError('This is not avaible for now')
    }
    history.replace(route)
  }

  return (
    <div>
      <div className="my-bank-home">
        <h1>{user.firstname} {user.lastname}</h1>
      </div>

      <div className="wrapper">
        <div className="cards_wrap">

          <div className="card_item">
            <div className="card_inner">
              <div className="card_top">

                <div className="card_category">DEPOSIT</div>

                <button type="button" onClick={() => navigateRoute('/deposit')}><GetAppIcon className="deposit-icon"/></button>
              </div>

            </div>
          </div>

          <div className="card_item">
            <div className="card_inner">
              <div className="card_top">

                <div className="card_category">WITHDRWAL</div>

                <button type="button" onClick={() => navigateRoute('/withdrawal')}><MonetizationOnIcon className="withdrwal-icon"/></button>
              </div>

              
            </div>
          </div>

          <div className="card_item">
            <div className="card_inner">
              <div className="card_top">

                <div className="card_category">SEND MONEY</div>

                <button onClick={() => navigateRoute('/send-money')} ><SendIcon className="sendmoney-icon"/></button>
              </div>

             
            </div>
          </div>

          <div className="card_item">
            <div className="card_inner">
              <div className="card_top">

                <div className="card_category">HISTORY</div>

                <button onClick={() => navigateRoute('/history')}><HistoryIcon className="history-icon"/></button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BankCards
