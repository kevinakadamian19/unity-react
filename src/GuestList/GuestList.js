import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Guest from '../Guest/Guest';
import UnityContext from '../UnityContext'
import './GuestList.css'

class GuestList extends Component {
  static defaultProps = {
    match: {
      params: {}
    },
    history: {
      push: () => {}
    },
  }
  static contextType = UnityContext;

  handleDeleteGuest = guestId => {
    this.props.history.push('/')
  }

    render() {
        const {guests} = this.context;
        return(
            <div className='guest-list'>
              <h2>Guest List</h2>
              <ul>
                {guests.map(guest => 
                  <li key={guest.id}>
                    <Guest
                      id={guest.id}
                      name={guest.name}
                      email={guest.email}
                      onDeleteGuest={this.handleDeleteGuest}
                    />
                  </li>
                )}
              </ul>
              <Link to='/add-guest'>
                <button  type="button">
                  Add Guest
                </button>
              </Link>
            </div>
        )
    }
}

export default GuestList;


GuestList.defaultProps = {
  guests: []
}