import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Adminreport from '../Adminreport/Adminreport';

export class login extends Component {
    constructor() {
        super ()
        this.state = {
            email: '',
            password: ''
        }
    }


    onInputChange = (e) => {
        const { id, value } = e.target
        this.setState({
            [id]: value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        axios.post('https://server-final.herokuapp.com/login', this.state)
            .then()
            .catch(err => alert(err))
        }

    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label className='labelemail'  for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label  className='labelemail' for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password" required/>
                    </div>
                    <Link to='/Adminreport'>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default login
