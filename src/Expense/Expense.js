import React, { Component } from 'react'

class Expense extends Component {
    render() {
      const {id, item, note, price} = this.props;
      return(
        <div className='Expense_item'>
          <div id={id}>
            <li>{item}</li>
            <li>Note: {note}</li>
            <li>Cost: ${price}</li>
          </div>
          <button 
            className='Expense_delete'
            type="button"
          >
            Remove
          </button>
        </div>
      )
    }
}

export default Expense