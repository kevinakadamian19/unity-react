import React, {Component} from 'react';

class AddGuest extends Component {
    render() {
      return(
        <div className='Add-Guest'>
          <h2>Add Guest</h2>
          <form>
            <div className='field'>
              <label htmlFor='guest-name-input'>
                Name: 
              </label>
              <input 
                type='text' 
                id='guest-name-input' 
                name='guest-name'
                />
            </div>
            <div className='field'>
              <label htmlFor='guest-email-input'>
                Email: 
              </label>
              <input 
                type='text' 
                id='guest-email-input' 
                name='guest-email'
                />
            </div>
          <button type='submit'>Add</button>
          </form>
        </div>
      )
    }
  }

export default AddGuest;