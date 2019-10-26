import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Finances from '../Finances/Finances';
import UnityContext from '../UnityContext'
import GuestList from '../GuestList/GuestList';
import ExpenseList from '../ExpenseList/ExpenseList';
import unityData from '../config';
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {unityData}
  }

  handleUpdateFinance = budget => {
    this.setState({
     finances: budget
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
        this.state.expenses,
        expense
      ]
    })
  }

  render() {
    const contextValue = {
      finances: this.state.finances,
      guests: this.state.guests,
      expenses: this.state.expenses,
      handleUpdateFinance: this.handleUpdateFinance,
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
              <Finances 
                finances={this.state.finances}
                handleUpdateFinance={this.handleUpdateFinance}
              />
          
              <GuestList 
                guests={this.state.guests}
              />
   
              <ExpenseList 
                expenses={this.state.expenses}
              />
          </main>
        </div>
     </UnityContext.Provider>
    );
  }
}

export default App;