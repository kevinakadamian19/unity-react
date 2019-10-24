import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import Budget from '../Budget/Budget';
import UnityContext from '../UnityContext'
import GuestList from '../GuestList/GuestList';
import AddGuest from '../AddGuest/AddGuest';
import ExpenseList from '../ExpenseList/ExpenseList';
import AddExpense from '../AddExpense/AddExpense';
import tableData from '../dummy-data';
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      budget: '',
      guests: [],
      expenses: []
    }
  }


  handleAddGuest = guest => {
    this.setState({
      guests: [
        ...this.state.guests,
        guest
      ]
    })
  }
  handleAddExpense = expense => {
    this.setState({
      expenses: [
        this.state.expenses,
        expense
      ]
    })
  }
  handleRemoveGuest = guestId => {
    this.setState({
      guests: this.state.guests.filter(guest => guest.id !== guestId)
    })
  }
  handleRemoveExpense = expenseId => {
    this.setState({
      expenses: this.state.expenses.filter(expense => expense.id !== expenseId)
    })
  }

  render() {
    const contextValue = {
      budget: this.state.budget,
      guests: this.state.guests,
      expenses: this.state.expenses,
      addGuest: this.handleAddGuest,
      addExpense: this.handleAddExpense,
      removeExpense: this.handleRemoveExpense,
      removeGuest: this.handleRemoveGuest
    }
    return (
      <UnityContext.Provider value={contextValue}>
      <div className='App'>
        <main className="main">
          <header className="banner">
            <h1>Unity Assistant</h1>
            <h4>Your personal wedding planner assistant!</h4>
          </header>

        <section>
          <Budget />
        </section>

        <section>
          <h2>Guest List</h2>
          <GuestList guests={tableData.guests}/>
        </section>

        <section>
          <AddGuest />
        </section>

        <section>
          <h2>Item List</h2>
          <ExpenseList expenses={tableData.expenses}/>
        </section>

        <section>
          <AddExpense />
        </section>
    </main>
      </div>
      </UnityContext.Provider>
    );
  }
}

export default App;