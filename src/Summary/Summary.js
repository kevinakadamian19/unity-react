import React, {Component} from 'react';
import ValidationError from '../ValidationError'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faPiggyBank, faReceipt } from '@fortawesome/free-solid-svg-icons'
import UnityContext from '../UnityContext';
import config from '../config'
import './Summary.css'


class Weddings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            budget: {
                value: 0,
                touched: false
            },
        }
    }
    static defaultProps = {
      history: {
        push: () => { }
      }
    }
    static contextType = UnityContext;

    handleSubmit = e => {
        e.preventDefault();
        const newWedding = {
            budget: e.target['summary-input'].value
        };
        fetch(`${config.API_ENDPOINT}/api/weddings/1`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `${config.API_KEY}`
            },
            body: JSON.stringify(newWedding)
        })
        .then(res =>  {
            if(!res.ok) {
                return res.json().then(e => Promise.reject(e))
            } 
            return;
        })
        .then(() => {
            this.context.updateBudget(newWedding)
            this.props.history.push('/')
        })
        .catch(error => {
            console.error({error})
        })
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

    calculateTotalExpenses(arr) {
        if (arr.length === 0) {
            return arr = [];
        }
        let costs = [];
        for(let i=0; i < arr.length; i++) {
           costs.push(arr[i].price);
        }
        return costs.reduce((a,b) => a + b, 0)
    }
    calculateRemainder(a,b) {
        return a - b;
    }
    render() {
        const budgetError = this.validateBudgetValue;
        const {expenses, guests} = this.context;
        if(this.context.weddings.length === 0) return null;
        if(this.context.expenses.length === 0) return null;
        const currentBudget = this.context.weddings[0].budget;
        const totalSpent = this.calculateTotalExpenses(expenses)
        const remainder = this.calculateRemainder(currentBudget, totalSpent)
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
                        ${currentBudget}
                    </h3>
                    <h3>
                        Remaining
                        <br /><FontAwesomeIcon icon={faReceipt} /><br />
                        ${remainder}
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

export default Weddings;
