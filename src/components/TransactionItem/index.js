import './index.css'

const TransactionItem = props => {
  const {detailsList, deleteItem} = props
  const {id, type, amount, title} = detailsList

  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item-container">
      <p className="list-item">{title}</p>
      <p className="list-item">{amount}</p>
      <p className="list-item">{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        className="delete"
        onClick={onDelete}
      />
    </li>
  )
}
export default TransactionItem
