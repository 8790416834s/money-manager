import './index.css'

const TransactionItem = () => {
  return (
    <div className="list-container">
      <p>title of amount</p>
      <p>balance Amount</p>
      <p>type of amount</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        className="delete"
      />
    </div>
  )
}

export default TransactionItem
