import React, { Component } from 'react'
import './Expense.css'

class Expense extends Component {
    render() {
      const {id, item, note, price} = this.props;
      return(
        <div className='expense' id={id}>
            <p>{item}</p>
            <p>{note}</p>
            <p>{price}</p>
          <button 
            className='expense-delete'
            type="button"
          >
            Remove
          </button>
        </div>
      )
    }
}

export default Expense