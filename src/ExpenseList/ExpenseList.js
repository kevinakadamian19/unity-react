import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Expense from '../Expense/Expense';
import UnityContext from '../UnityContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'
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
              <h1>To-Do <FontAwesomeIcon icon={faListAlt} /></h1>
              <table className='fixed-expense-table'>
                <thead>
                  <tr>
                    <th>Vendor</th>
                    <th>Note</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map(expense => 
                    <tr key={expense.id}>
                          { <Expense
                            id={expense.id}
                            vendor={expense.vendor}
                            note={expense.note}
                            price={expense.price}
                            onDeleteExpense={this.handleDeleteExpense}
                          /> }
                    </tr>
                  )}
                </tbody>
              </table>
              <Link  to='/add-expense'>
                <button type="button">
                  Add to List
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