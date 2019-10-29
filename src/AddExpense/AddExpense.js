import React, {Component} from 'react';
import UnityContext from '../UnityContext';
import ValidationError  from '../ValidationError';
import PropType from 'prop-types'

class AddExpense extends Component {
    constructor(props) {
      super(props)
      this.state = {
        expense: {
          value: '',
          touched: false
        },
        note: {
          value: '',
          touched: false
        },
        price: {
          value: '',
          touched: false
        }
      }
    }
    static defaultProps = {
      history: {
        push: () => { }
      }
    }
    static contextType = UnityContext;

    handleSubmit = e => {
      e.preventDefault();
      const newExpense = {
        id: 5,
        expense: e.target['expense-item'].value,
        note: e.target['expense-note'].value,
        price: e.target['expense-price'].value,
        eventId: 1
      };
      this.context.addExpense(newExpense)
      this.props.history.push('/')
      /*
      fetch(`${unityData}/expenses`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newExpense)
      })
      .then(res => {
        if(!res.ok) {
          res.json().then(e => Promise.reject(e))
        } res.json()
      })
      .then(expense => {
        this.context.AddExpense(expense)
        this.props.history.push(`/expenses/${expense.id}`)
      })
      .catch(error => {
        console.error({error})
      })*/
    }

    updateExpense(expense) {
      this.setState({
        expense: {value: expense, touched: true}
      })
    }
    updateNote(note) {
      this.setState({
        note: {value: note, touched: true}
      })
    }
    updatePrice(price) {
      this.setState({
        price: {value: price, touched: true}
      })
    }

    validateExpense(fieldValue) {
      const expense = this.state.expense.value.trim();
      if(expense.length === 0) {
        return 'Name or title of expense is required';
      } else if (expense.length < 3) {
        return 'Name or title of expense must be at least 3 characters long';
      }
    }
    validateNote(fieldValue) {
      const note = this.state.note.value.trim()
      if(note.length < 3) {
        return 'Note must have at least 3 characters';
      }
    }
    validatePrice(fieldValue) {
      const price = this.state.price.value.trim();
      if(!price) {
        return 'Price is required';
      }
    }
    render() {
      const expenseError = this.validateExpense();
      const noteError = this.validateNote();
      const priceError = this.validatePrice();
      return(
        <div className='AddExpenseForm'>
          <h2>Add Item</h2>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className='field'>
              <label htmlFor='expense-item-input'>
                Expense: 
              </label>
              <input 
                type='text' 
                id='expense-item-input'
                name='expense-item'
                onChange={e => this.updateExpense(e.target.value)}
              />
              {this.state.expense.touched && (
                <ValidationError message={expenseError} />
              )}
            </div>
            <div className='field'>
              <label htmlFor='expense-note-input'>
                Note:
              </label>
              <input 
                type='text' 
                id='expense-note-input' 
                name='expense-note'
                onChange={e => this.updateNote(e.target.value)}
              />
              {this.state.note.touched && (
                <ValidationError message={noteError} />
              )}
            </div>
            <div className='field'>
              <label htmlFor='expense-price-input'>
                Price:
              </label>
              <input 
                type='number' 
                id='expense-price-input' 
                name='expense-price'
                onChange={e => this.updatePrice(e.target.value)}
              />
              {this.state.price.touched && (
                <ValidationError message={priceError} />
              )}
            </div>
          <button type='submit'>Add Expense</button>
          </form>
        </div>
      )
    }
  }

export default AddExpense;

AddExpense.propType = {
  expense: PropType.string.isRequired,
  note: PropType.string,
  price: PropType.number.isRequired
}