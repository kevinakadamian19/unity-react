import React, {Component} from 'react';
import ValidationError from '../ValidationError'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faPiggyBank, faReceipt } from '@fortawesome/free-solid-svg-icons'
import UnityContext from '../UnityContext';
import './Summary.css'


class Weddings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            budget: {
                value: 0,
                touched: false
            },
            spending: {
                value: 0,
                touched: false
            }
        }
    }
    static contextType = UnityContext;

    handleSubmit = e => {
        e.preventDefault();
        const newWedding = {
            budget: e.target['summary-input'].value
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

    calculateRemainingBudget(a,b) {
        return a -b;
    }
    
    render() {
        const {budget} = this.context.weddings;
        const budgetError = this.validateBudgetValue;
        const {expenses, guests} = this.context;
        const totalSpent = this.calculateTotalExpenses(expenses)
        const remainingBudget = this.calculateRemainingBudget(budget, totalSpent)
        return(
            <div className='summary'>
                <h1>Summary</h1>
                <div className='summary-details'>
                    <h3>Guest Count
                        <br /><FontAwesomeIcon icon={faUserFriends} /><br />
                        {guests.length}
                    </h3>
                    <h3>Budget
                        <br /><FontAwesomeIcon icon={faPiggyBank} /><br />
                        ${budget}
                    </h3>
                    <h3>
                        Remaining
                        <br /><FontAwesomeIcon icon={faReceipt} /><br />
                        ${remainingBudget}
                    </h3>
                </div>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className='field'>
                            <input 
                                type='number' 
                                id='summary-input' 
                                name='summary-input'
                                placeholder='Update Budget'
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
    budget: 0
}

export default Weddings;
