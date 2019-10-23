import React, {Component} from 'react'

class SettingsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: {
                value: '',
                touched: false
            },
            lastName: {
                value: '',
                touched: false
            },
            email: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
            firstName: {
                value: '',
                touched: false
            }
        }
    }
    render() {
        return(
            <div className="settings-form">
                <form className="settings-form">
                <div>
                    <label for="first-name">First name</label>
                    <input 
                        placeholder='First Name' 
                        type="text" 
                        name='first-name' 
                        id='first-name' 
                    />
                </div>
                <div>
                    <label for="last-name">Last name</label>
                    <input 
                        type="text" 
                        name='last-name' 
                        id='last-name' 
                        placeholder='Last Name' 
                    />
                </div>
                <div>
                    <label for="username">Email</label>
                    <input 
                        type="text" 
                        name='username' 
                        id='username' 
                    />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input 
                        type="password" 
                        name='password' 
                        id='password' 
                    />
                </div>
                <div>
                    <label for="budget">Budget</label>
                    <input 
                        type="number" 
                        name='budget' 
                        id='budget' 
                    />
                </div>
                <button type='submit'>Update</button>
                </form>
            </div>
        )
    }
}

export default SettingsForm;