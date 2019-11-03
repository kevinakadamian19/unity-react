import React from 'react';

export default React.createContext({
    weddings: [],
    guests: [],
    expenses: [],
    updateBudget: () => {},
    addGuest: () => {},
    addExpense: () => {},
    deleteGuest: () => {},
    deleteExpense: () => {}
})