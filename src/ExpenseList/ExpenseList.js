import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Expense from '../Expense/Expense';

class ExpenseList extends Component {
    render() {
        return(
            <div className='Expense_List'>
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
              <button 
                type="button"
                tag={Link}
                to='/add-item'
              >
                Add
              </button>
            </div>
        )
    }
  }

export default ExpenseList;