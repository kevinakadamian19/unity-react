import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Guest from '../Guest/Guest';
import UnityContext from '../UnityContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
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
              <h1>Guest List <FontAwesomeIcon icon={faUserAlt} /></h1>
              <table className='fixed-guest-table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {guests.map(guest => 
                    <tr key={guest.id}>
                          <Guest
                            id={guest.id}
                            name={guest.name}
                            email={guest.email}
                            onDeleteGuest={this.handleDeleteGuest}
                          /> 
                    </tr>
                  )}
                </tbody>
              </table>
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