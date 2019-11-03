import React, {Component} from 'react';
import ValidationError from '../ValidationError';
import UnityContext from '../UnityContext';
import PropType from 'prop-types';
import config from '../config'
import './AddGuest.css'

class AddGuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: {
          value: '',
          touched: false
        },
        email: {
          value: '',
          touched: false
        }
      };
    }

    static defaultProps = {
      history: {
        push: () => { }
      }
    }
    static contextType = UnityContext;

    handleSubmit = e => {
      e.preventDefault();
      const newGuest = {
        name: e.target['guest-name'].value,
        email: e.target['guest-email'].value,
        event: 1
      }
      fetch(`${config.API_ENDPOINT}/guests`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newGuest),
      })
      .then(res => {
        if(!res.ok) {
          return res.json().then(e => Promise.reject(e))
        } 
        return res.json()
      })
      .then(guest => {
        this.context.addGuest(guest)
        this.props.history.push(`/`)
      })
      .catch(error => {
        console.error({error})
      })
    }

    updateGuestName(guest) {
      this.setState({
        name: {value: guest, touched: true}
      })
    }

    updateGuestEmail(email) {
      this.setState({
        email: {value: email, touched: true}
      })
    }

    validateGuestName(fieldValue) {
      const name = this.state.name.value.trim();
      if(name.length === 0) {
        return 'Name is required';
      } else if (name.length < 2) {
        return 'Must be at least 2 characters';
      }
    }

    validateEmail(fieldValue) {
      const email = this.state.email.value.trim()
      if(email.length === 0) {
        return 'Email is required';
      } else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false ) {
        return 'Invalid email address';
      }
    }
    render() {
      const nameError = this.validateGuestName();
      const emailError = this.validateEmail();
      return(
        <div className='add-guest'>
          <h2>Add Guest</h2>
          <form className='add-guest-form' onSubmit={e => this.handleSubmit(e)}>
            <div className='field'>
              <label htmlFor='guest-name-input'>
                Name: 
              </label>
              <input 
                type='text' 
                id='guest-name-input' 
                name='guest-name'
                onChange={e => this.updateGuestName(e.target.value)}
              />
               {this.state.name.touched && 
              (<ValidationError message={nameError}/>)}
            </div>
            <div className='field'>
              <label htmlFor='guest-email-input'>
                Email: 
              </label>
              <input 
                type='text' 
                id='guest-email-input' 
                name='guest-email'
                onChange={e => this.updateGuestEmail(e.target.value)}
              />
              {this.state.email.touched && 
              (<ValidationError message={emailError}/>)}
            </div>
          <button 
            type='submit'
            disabled={
              this.validateGuestName() ||
              this.validateEmail()
            }>
              Add
            </button>
          </form>
        </div>
      )
    }
  }

export default AddGuest;

AddGuest.propType = {
  name: PropType.string.isRequired,
  email: PropType.string
}