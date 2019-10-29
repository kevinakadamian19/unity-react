import React, {Component} from 'react';
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
      const {id, name, email} = this.props;
      return(
        <div className='guest' id={id}>
          <ul>
            <li>{name}</li>
            <li>{email}</li>
          </ul>
          <button 
            className='guest-delete'
            type="button"
            onClick={e => this.handleClickDelete(e)}
          >
            Remove
          </button>
        </div>
      )
    }
}

export default Guest;