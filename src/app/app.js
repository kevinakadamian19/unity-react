import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import UnityContext from '../UnityContext';
import Overview from '../Overview/Overview';
import AddGuest from '../AddGuest/AddGuest';
import AddExpense from '../AddExpense/AddExpense'
import config from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weddings: [],
      guests: [],
      expenses: []
    }
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/weddings/`),
      fetch(`${config.API_ENDPOINT}/guests/`),
      fetch(`${config.API_ENDPOINT}/expenses/`)
    ])
    .then(([weddingsRes, guestsRes, expensesRes]) => {
      if(!weddingsRes.ok) {
        return weddingsRes.json().then(e => Promise.reject(e))
      }
      if(!guestsRes.ok) {
        return guestsRes.json().then(e => Promise.reject(e))
      }
      if(!expensesRes.ok) {
        return expensesRes.json().then(e => Promise.reject(e))
      }
      return Promise.all([
        weddingsRes.json(),
        guestsRes.json(),
        expensesRes.json()
      ])
    })
    .then(([weddings, guests, expenses]) => {
      this.setState({weddings, guests, expenses})
    })
    .catch(error => {
      console.error({error})
    })
  }

  handleUpdateWedding = wedding => {
    this.setState({
     weddings: wedding
    })
  }

  handleAddGuest = guest => {
    this.setState({
      guests: [
        ...this.state.guests,
        guest
      ]
    });
  }

  handleAddExpense = expense => {
    this.setState({
      expenses: [
        ...this.state.expenses,
        expense
      ]
    });
  }

  handleDeleteGuest = guestId => {
    this.setState({
      guests: this.state.guests.filter(guest => guest.id !== guestId)
    })
  }

  handleDeleteExpense = expenseId => {
    this.setState({
      expenses: this.state.expenses.filter(expense => expense.id !== expenseId)
    })
  }


  render() {
    const contextValue = {
      weddings: this.state.weddings[0],
      guests: this.state.guests,
      expenses: this.state.expenses,
      updateWedding: this.handleUpdateWedding,
      addGuest: this.handleAddGuest,
      addExpense: this.handleAddExpense,
      deleteExpense: this.handleDeleteExpense,
      deleteGuest: this.handleDeleteGuest
    } 
    return (
      <UnityContext.Provider value={contextValue}>
        <div className='App'>
          <main className="main">
            <header className="banner">
              <h1>
                <Link className='link' to='/'>Unity</Link>
                <FontAwesomeIcon icon={faHeart} />
              </h1>
              <h4>Your personal wedding organizer!</h4>
            </header>
              <Route 
              exact
              path='/'
              component={Overview}/>

              <Route
                exact
                path='/add-guest'
                component={AddGuest}/>

              <Route
                exact
                path='/add-expense'
                component={AddExpense}/>
          </main>
        </div>
     </UnityContext.Provider>
    );
  }
}

export default App;