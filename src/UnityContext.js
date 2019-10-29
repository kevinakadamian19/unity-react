import React from 'react';

export default React.createContext({
    weddings: [],
    guests: [],
    expenses: [],
    updateWedding: () => {},
    addGuest: () => {},
    addExpense: () => {},
    deleteGuest: () => {},
    deleteExpense: () => {},
})