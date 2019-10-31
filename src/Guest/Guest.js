import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import UnityContext from '../UnityContext'
import './Guest.css'

class Guest extends Component {
  static contextType = UnityContext;

  handleClickDelete = e => {
    e.preventDefault();
    const guestId = this.props.id
    this.context.deleteGuest(guestId)
    /*fetch(`${unityData}/guests/${guestId}`, {
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
      this.context.deleteGuest(guestId)
    })
    .catch(error => {
      console.error({error})
    })*/
  }

    render() {
      const { name, email} = this.props;
      return(
        <>
          
          <td>{name}</td>
          <td>{email}</td>
          <td>
            <button 
              className='guest-delete'
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

export default Guest;