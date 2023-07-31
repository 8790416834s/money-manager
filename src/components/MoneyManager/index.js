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
    type: '',
    amount: 0,
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onAddButton = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newList = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      balanceList: [...prevState.balanceList, newList],
      title: '',
      amount: '',
    }))
    if (type === 'Income') {
      this.setState(prevState => ({
        income: prevState.income + amount,
        balance: prevState.balance + amount,
      }))
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        expenses: prevState.expenses + amount,
        balance: prevState.balance - amount,
      }))
    }
  }

  deleteItem = id => {
    const {balanceList} = this.state
    const filteredList = balanceList.filter(each => each.id !== id)
    const findItem = balanceList.filter(each => each.id === id)
    this.setState(prevState => ({
      balanceList: filteredList,
      income: prevState.income - parseInt(findItem[0].amount),
      expenses: prevState.expenses - parseInt(findItem[0].amount),
      balance: prevState.balance - parseInt(findItem[0].amount),
    }))
  }

  render() {
    const {balanceList, balance, income, expenses} = this.state

    return (
      <div className="app-container">
        <div className="message-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="message">
            Welcome back to your <span className="blue">Money Manager</span>
          </p>
        </div>

        <MoneyDetails balance={balance} income={income} expenses={expenses} />

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
              <select className="types" onChange={this.onChangeType}>
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
              <div className="heading-section">
                <p className="sub-heading">Title</p>
                <p className="sub-heading">Amount</p>
                <p className="sub-heading">Type</p>
              </div>
              <ul className="list-container">
                {balanceList.map(each => (
                  <TransactionItem
                    key={each.id}
                    detailsList={each}
                    deleteItem={this.deleteItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
