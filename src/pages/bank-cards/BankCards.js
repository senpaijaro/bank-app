import './bankCards.css'
import GetAppIcon from '@material-ui/icons/GetApp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SendIcon from '@material-ui/icons/Send';
import HistoryIcon from '@material-ui/icons/History';

const BankCards = ({getRoute, withdrawalBtn, depositBtn, sendMoneyBtn, historyBtn, user}) => {



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

                <button onClick={() => getRoute('deposit')}><GetAppIcon className="deposit-icon"/></button>
              </div>

            </div>
          </div>

          <div className="card_item">
            <div className="card_inner">
              <div className="card_top">

                <div className="card_category">WITHDRWAL</div>

                <button onClick={() =>getRoute('withdrawal')}><MonetizationOnIcon className="withdrwal-icon"/></button>
              </div>

              
            </div>
          </div>

          <div className="card_item">
            <div className="card_inner">
              <div className="card_top">

                <div className="card_category">SEND MONEY</div>

                <button onClick={() => getRoute('send-money')}><SendIcon className="sendmoney-icon"/></button>
              </div>

             
            </div>
          </div>

          <div className="card_item">
            <div className="card_inner">
              <div className="card_top">

                <div className="card_category">HISTORY</div>

                <button onClick={() => getRoute('history')}><HistoryIcon className="history-icon"/></button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BankCards
