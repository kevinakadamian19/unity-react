import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Guest from '../Guest/Guest';

class GuestList extends Component {
    render() {
        const guests = this.props.guests
        return(
            <div className='Guest_List'>
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
              <button 
                type="button"
                to='/add-guest'
                tag={Link}
              >
                Add Guest
              </button>
            </div>
        )
    }
  }

export default GuestList;