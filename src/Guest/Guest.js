import React, {Component} from 'react';
import UnityContext from '../UnityContext'
import './Guest.css'

class Guest extends Component {
  static contextType = UnityContext;

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
            onClick={this.handleClickDelete}
          >
            Remove
          </button>
        </div>
      )
    }
}

export default Guest;