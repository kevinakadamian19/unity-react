import React, {Component} from 'react';
import AddExpense from '../AddExpense/AddExpense'
import {Link} from 'react-router-dom';
import Expense from '../Expense/Expense';
import './ExpenseList.css'

class ExpenseList extends Component {
    render() {
        return(
            <div className='expense-list'>
              <h2>Item List</h2>
              <ul>
                {this.props.expenses.map(expense =>
                  <li key={expense.id}>
                    <Expense
                      id={expense.id}
                      item={expense.item}
                      note={expense.note}
                      price={expense.price}
                    />
                  </li>
                )}
              </ul>
              <AddExpense
                handleAddExpense={this.handleAddExpense}
              />
              <button 
                type="button"
                tag={Link}
                to='/add-expense'
              >
                Add Item
              </button>
            </div>
        )
    }
}

ExpenseList.defaultProps = {
  expenses: []
}

export default ExpenseList;