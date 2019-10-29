import React, {Component} from 'react';
import Weddings from '../Weddings/Weddings';
import GuestList from '../GuestList/GuestList';
import ExpenseList from '../ExpenseList/ExpenseList';

class Overview extends Component {
    render() {
        return(
            <div className='overview'>
                <Weddings />
                <GuestList />
                <ExpenseList />
            </div>
        )
    }
}
 
export default Overview;