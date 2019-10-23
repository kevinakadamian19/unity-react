import React, {Component} from 'react';
import Budget from '../Budget/Budget';
import ItemList from '../ItemList/ItemList';
import SettingsForm from '../SettingsForm/SettingsForm'
import dummyData from '../dummy-data';
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dummyData,
      showSettingsForm: false
    }
  }

  updateSettings() {
    this.setState({
      showSettingsForm: true
    });
  }

  handleAddGuest = guest => {
    this.setState({
      ...this.state.guest,
      guest
    })
  }
  handleAddExpense = expense => {
    this.setState({
      ...this.state.expense,
      expense
    })
  }

  render() {
    const setting = this.state.showSettingsForm
      ? <SettingsForm />
      : <App />

    return (
      <div className='App'>
        <nav className="nav">
          <button type='button' onClick={this.updateSettings}>Settings</button>
        </nav>
      <main className="main">
        <header className="banner">
            <h1>Unity Assistant</h1>
        </header>

      <section>
        <Budget />
      </section>

        <section>
          <h2>Guest List</h2>
          <h3>Full Name | Email</h3>
          <ItemList />
        </section>

        <section>
          <h2>Wedding Expenses</h2>
          <ItemList />
        </section>
    </main>
      </div>
    );
  }
}

export default App;
