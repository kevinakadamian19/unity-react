import React, { Component } from 'react'
import UnityContext from'../UnityContext'
import './Expense.css'

class Expense extends Component {
  static contextType = UnityContext;

    handleClickDelete = e => {
      e.preventDefault();
      const expenseId = this.props.id
      this.context.deleteExpense(expenseId)
      /*fetch(`${unityData}/expenses/${expenseId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        if(!res.ok) {
          return res.json().then(e => Promise.reject(e))
        } return res.json()
      })
      .then(() => {
        this.context.deleteExpense(expenseId)
      })
      .catch(error => {
        console.error({error})
      })*/
    }
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
            onClick={e => this.handleClickDelete(e)}
          >
            Remove
          </button>
        </div>
      )
    }
}

export default Expense