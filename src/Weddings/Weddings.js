import React, {Component} from 'react';
import ValidationError from '../ValidationError'
import './Weddings.css'
import UnityContext from '../UnityContext';


class Weddings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            budget: {
                value: '',
                touched: false
            },
            spending: {
                value: '',
                touched: false
            }
        }
    }
    static contextType = UnityContext;

    handleSubmit = e => {
        e.preventDefault();
        const newWedding = {
            budget: e.target['budget-input'].value
        };
        this.context.updateWedding(newWedding);
        /*
        fetch(`${unityData}/weddings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(budget)
        })
        .then(res =>  {
            if(!res.ok) {
                return res.json().then(e => Promise.reject(e))
            } return res.json()
        })
        .then(budget => {
            this.context.updateBudget(budget)
        })
        .catch(error => {
            console.error({error})
        })*/
    }

    updateBudgetValue = budget => {
        this.setState({
            budget: {
                value: budget, 
                touched:true
            }
        });
    }

    validateBudgetValue = fieldValue => {
        const budget = this.state.budget.value.trim();
        if(budget < 0) {
            return 'Your budget cannot be a negative number'
        }
    }

    calculateTotalExpenses = arr => {
        let items = arr.length;
        let costs = [];
        for(let i=0; i < items; i++) {
           costs.push(parseInt(arr[i].price));
        }
        const costSum = arr => arr.reduce((a,b) => a +b, 0)
        return costSum(costs)
    }
    
    render() {
        const {budget} = this.context.weddings;
        const budgetError = this.validateBudgetValue;
        const {expenses} = this.context;
        return(
            <div className='finances'>
                <h2>Spending Overview</h2>
                <h3>${this.calculateTotalExpenses(expenses)} / ${budget}</h3>
                <form className='budget-input' onSubmit={e => this.handleSubmit(e)}>
                    <div className='field'>
                        <label htmlFor='budget-input'>
                            Set budget:
                        </label>
                        <input 
                            type='number' 
                            id='budget-input' 
                            name='budget-input'
                            defaultValue='0'
                            onChange={e => this.updateBudgetValue(e.target.value)}
                        />
                        {this.state.budget.touched.value && (
                            <ValidationError message={budgetError} />
                        )}
                    </div>
                <button 
                    type='submit'>Save</button>
                </form>

            </div>
        )
    }
}

Weddings.defaultProps = {
    spending: 0,
    budget: 0
}

export default Weddings;
