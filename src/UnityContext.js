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