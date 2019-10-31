import React, { Component } from 'react'
import UnityContext from'../UnityContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
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
      const {vendor, note, price} = this.props;
      return(
        <>
            <td>{vendor}</td>
            <td>{note}</td>
            <td>{price}</td>
            <td>
              <button 
                className='expense-delete'
                type="button"
                onClick={e => this.handleClickDelete(e)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
        </>
      )
    }
}

export default Expense