import './index.css'

const MoneyDetails = props => {
  const {detailsList} = props
  const {title, amount, type} = detailsList

  return (
    <div className="details-container">
      <div className="balance-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="image"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <p className="balanceAmount">Rs {amount}</p>
        </div>
      </div>
      <div className="income-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="image"
          />
        </div>
        <div>
          <p>Your Income</p>
          <p className="incomeAmount">Rs {amount}</p>
        </div>
      </div>
      <div className="expenses-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="image"
          />
        </div>
        <div>
          <p>Your Expenses</p>
          <p className="expensesAmount">Rs 0</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
