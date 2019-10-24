import React, {Component} from 'react';
import UnityContext from '../UnityContext';

class Budget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            budget: {
                value: 0,
                touched: false
            },
            spent: 0
        };
    }
    static contextType = UnityContext;

    handleSubmit = e => {
        e.preventDefault();
        const budget = {
            value: e.target['budget-input'].value
        }
        const setNewBudget = budget => {
            this.setState({
                budget: {value: budget, touched: true}
            });
        }
        setNewBudget(budget);
        console.log(this.state.budget);
    }
  
    render() {
        return(
            <div className='Budget'>

                <h2>Budget Overview</h2>
                <h3>${this.state.spent} / ${this.state.budget.value}</h3>
                
                <form className='set-budget' onSubmit={e => this.handleSubmit(e)}>
                <div className='field'>
                    <label htmlFor='budget-input'>
                        Set your budget: 
                    </label>
                    <input 
                        type='number' 
                        id='budget-input' 
                        name='budget-input'
                        
                    />
                </div>
                <button 
                    type='submit'>Save</button>
                </form>

            </div>
        )
    }
}

export default Budget;
