import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialBalanceList = []

// Write your code here
class MoneyManager extends Component {
  state = {
    balanceList: initialBalanceList,
    title: '',
    amount: 0,
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onAddButton = event => {
    event.preventDefault()
    const {
      balanceList,
      title,
      amount,
      type,
      balance,
      income,
      expenses,
    } = this.state
    const newList = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      balanceList: [...prevState.balanceList, newList],
    }))
  }

  render() {
    const {balanceList} = this.state

    return (
      <div className="app-container">
        <div className="message-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="message">
            Welcome back to your <span className="blue">Money Manager</span>
          </p>
        </div>
        <ul>
          {balanceList.map(each => (
            <MoneyDetails key={each.id} detailsList={each} />
          ))}
        </ul>
        <div className="transaction-container">
          <div className="add-transaction-container">
            <form className="form-container" onSubmit={this.onAddButton}>
              <h1>Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                placeholder="TITLE"
                className="title"
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                placeholder="AMOUNT"
                className="amount"
                onChange={this.onChangeAmount}
              />
              <label htmlFor="types">TYPE</label>
              <select className="types">
                {transactionTypeOptions.map(each => (
                  <option className={each.optionId} value={each.displayText}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <div>
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history">History</h1>
            <div className="sub-heading-container">
              <p className="sub-heading">Title</p>
              <p className="sub-heading">Amount</p>
              <p className="sub-heading">Type</p>
              <ul>
                <TransactionItem />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
