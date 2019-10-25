import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import AddGuest from '../AddGuest/AddGuest'
import Guest from '../Guest/Guest';
import './GuestList.css'

class GuestList extends Component {
    render() {
        const guests = this.props.guests
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
                    />
                  </li>
                )}
              </ul>
              
              <Route
                path='/add-guest' 
                handleAddGuest={this.handleAddGuest}
                component={AddGuest}/>
              <Link
                to={'/add-guest'}
              >
                Add Guest
              </Link>
            </div>
        )
    }
}

GuestList.defaultProps = {
  guests: []
}

export default GuestList;