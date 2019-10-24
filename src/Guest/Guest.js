import React, {Component} from 'react';
import './Guest.css'

class Guest extends Component {
    render() {
      const {id, name, email} = this.props;
      return(
        <div className='Guest-item'>
          <ul id={id}>
            <li>{name}</li>
            <li>{email}</li>
          </ul>
          <button 
            className='Guest_delete'
            type="button"
          >
            Remove
          </button>
        </div>
      )
    }
}

export default Guest;