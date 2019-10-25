import React, {Component} from 'react';
import './Guest.css'

class Guest extends Component {
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
          >
            Remove
          </button>
        </div>
      )
    }
}

export default Guest;