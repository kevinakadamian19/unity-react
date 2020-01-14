import React, {Component} from 'react';
import UnityContext from '../UnityContext';
import ValidationError  from '../ValidationError';
import config from '../config';
import PropType from 'prop-types'
import './AddExpense.css'

class AddExpense extends Component {
    constructor(props) {
      super(props)
      this.state = {
        vendor: {
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
        vendor: e.target['expense-vendor'].value,
        note: e.target['expense-note'].value,
        price: e.target['expense-price'].value,
        event: 1
      };
      fetch(`${config.API_ENDPOINT}/expenses`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': `${config.API_KEY}`
        },
        body: JSON.stringify(newExpense)
      })
      .then(res => {
        if(!res.ok) {
          res.json().then(e => Promise.reject(e))
        } 
        return res.json()
      })
      .then(expense => {
        console.log('this is after post', expense)
        this.context.addExpense(expense)
        this.props.history.push(`/`)
      })
      .catch(error => {
        console.error({error})
      })
    }

    updateVendor(vendor) {
      this.setState({
        vendor: {value: vendor, touched: true}
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

    validateVendor(fieldValue) {
      const vendor = this.state.vendor.value.trim();
      if(vendor.length === 0) {
        return 'Vendor is required';
      } else if (vendor.length < 3) {
        return 'Must be at least 3 characters';
      }
    }
    validateNote(fieldValue) {
      const note = this.state.note.value.trim()
      if(note.length < 3) {
        return 'Must have at least 3 characters';
      }
    }
    validatePrice(fieldValue) {
      const price = this.state.price.value.trim();
      if(!price) {
        return 'Price is required';
      }
    }
    render() {
      const vendorError = this.validateVendor();
      const noteError = this.validateNote();
      const priceError = this.validatePrice();
      return(
        <div className='add-expense'>
          <h2>Add Item</h2>
          <form className='add-expense-form' onSubmit={e => this.handleSubmit(e)}>
            <div className='field'>
              <label htmlFor='expense-vendor-input'>
                Vendor 
              </label>
              <input 
                type='text' 
                id='expense-vendor-input'
                name='expense-vendor'
                onChange={e => this.updateVendor(e.target.value)}
              />
              {this.state.vendor.touched && (
                <ValidationError message={vendorError} />
              )}
            </div>
            <div className='field'>
              <label htmlFor='expense-note-input'>
                Note
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
                Price
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
          <button 
            type='submit'
            disabled={
              this.validateVendor() ||
              this.validatePrice() || 
              this.validateNote()
            }>
              Add Item
            </button>
          </form>
        </div>
      )
    }
  }

export default AddExpense;

AddExpense.propType = {
  vendor: PropType.string.isRequired,
  note: PropType.string,
  price: PropType.number.isRequired
}