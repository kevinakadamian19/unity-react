import React, {Component} from 'react';
import Summary from '../Summary/Summary';
import GuestList from '../GuestList/GuestList';
import ExpenseList from '../ExpenseList/ExpenseList';

class Overview extends Component {
    render() {
        return(
            <div className='overview'>
                <Summary />
                <GuestList />
                <ExpenseList />
            </div>
        )
    }
}
 
export default Overview;