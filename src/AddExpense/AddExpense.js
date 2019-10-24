import React, {Component} from 'react';

class AddExpense extends Component {
    render() {
      return(
        <div className='AddExpenseForm'>
          <h2>Add Item</h2>
          <form>
            <div className='field'>
              <label htmlFor='expense-item-input'>
                Item: 
              </label>
              <input 
                type='text' 
                id='expense-item-input' 
                name='expense-item'
                />
            </div>
            <div className='field'>
              <label htmlFor='expense-note-input'>
                Note:
              </label>
              <input 
                type='text' 
                id='expense-note-input' 
                name='expense-note'
                />
            </div>
            <div className='field'>
              <label htmlFor='expense-price-input'>
                Price:
              </label>
              <input 
                type='number' 
                id='expense-price-input' 
                name='expense-price'
                />
            </div>
          <button type='submit'>Add Expense</button>
          </form>
        </div>
      )
    }
  }

export default AddExpense;