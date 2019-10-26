import React, {Component} from 'react';
import './Finances.css'
import UnityContext from '../UnityContext'

class Finances extends Component {
    static contextType = UnityContext;
    
    render() {
        return(
            <div className='finances'>
                <h2>Spending Overview</h2>
                <h3>${this.props.spent} / ${this.props.budget}</h3>
                <form className='finance-input'>
                    <div className='field'>
                        <label htmlFor='finance-input'>
                            Set budget:
                        </label>
                        <input 
                            type='number' 
                            id='finance-input' 
                            name='finance-input'
                            value={this.props.budget}
                            onChange={e => this.props.handleUpdateFinance(e.target.value)}
                        />
                    </div>
                <button 
                    type='submit'>Save</button>
                </form>

            </div>
        )
    }
}

Finances.defaultProps = {
    spent: 0,
    budget: 0
}

export default Finances;
