import React, {Component} from 'react';
import dummyData from '../dummy-data';

class Budget extends Component {
    constructor(props) {
        super(props)
        this.state = {planners};
    }
    render() {
        return(
            <div className='Budget'>
                <h2>Budget Overview</h2>
                <h3>$3,500 / {planners.budget}</h3>
            </div>
        )
    }
}

export default Budget;

const planners = 
    {
        'id': '1',
        'firstName': 'Mulan',
        'lastName': 'Fa',
        'email': 'FaMulan1998@gmail.com',
        'budget': '$42,500',   
    }
