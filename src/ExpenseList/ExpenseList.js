import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Expense from '../Expense/Expense';
import UnityContext from '../UnityContext';
import './ExpenseList.css'

class ExpenseList extends Component {
  static defaultProps = {
    match: {
      params: {}
    },
    history: {
      push: () => { }
    },
  }
    static contextType = UnityContext;

    handleDeleteExpense = expenseId => {
      this.props.history.push('/')
    }
    render() {
        const {expenses} = this.context;
        return(
            <div className='expense-list'>
              <h2>Expenses</h2>
              <ul>
                {expenses.map(expense =>
                  <li key={expense.id}>
                    <Expense
                      id={expense.id}
                      item={expense.expense}
                      note={expense.note}
                      price={expense.price}
                      onDeleteExpense={this.handleDeleteExpense}
                    />
                  </li>
                )}
              </ul>

              <Link  to='/add-expense'>
                <button type="button">
                  Add
                </button>
              </Link>
            </div>
        )
    }
}

export default ExpenseList;


ExpenseList.defaultProps = {
  expenses: []
}