import React from 'react';

export default React.createContext({
    budget: '',
    guets: [],
    expenses: [],
    addGuest: () => {},
    addExpense: () => {},
    deleteGuest: () => {},
    deleteExpense: () => {},
})

/* const contextValue = {
    finances: this.state.finances,
    guests: this.state.guests,
    expenses: this.state.expenses,
    handleUpdateFinance: this.handleUpdateFinance,
    addGuest: this.handleAddGuest,
    addExpense: this.handleAddExpense,
    removeExpense: this.handleRemoveExpense,
    removeGuest: this.handleRemoveGuest
  } */