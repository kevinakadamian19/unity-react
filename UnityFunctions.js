export const findGuest = (guests=[], guestId) =>
  guests.find(guest => guest.id === guestId)

export const findExpense = (expenses=[], expenseId) =>
  expenses.find(expense => expense.id === expenseId)







handleUpdateFinance = price => {
    this.setState({
     finances: [
        this.state.finances[2]: price
      ]
    });
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


