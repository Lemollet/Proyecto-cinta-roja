import React, { Component } from 'react';
import axios from 'axios';

export class Index extends Component {
    constructor(){
        super(props)
        this.state = {
            polis: []
        }
    }

    componentDidMount() {
        
        axios.get('https://devf-apps.herokuapp.com/users')
        .then(res => {
            console.log(res.data.user)
            this.setState({
                users:res.data.user
            })
           
        })
        .catch(err => {
            console.log(err);
            
        })
    }

    render() {
        return (
            <div>
                <form className = 'p-5' onSubmit={this.onSubmitForm}>

                <div className='form-group'>
                        <h6>Por favor ingrese el codigo de la patrulla </h6>
                        <input type="number" id="numberid" className='form-control'
                            onChange={this.onInputChange}
                            value={this.state.userName} />
                    </div>
                </form>



                <h1> Ya estamos en el index</h1>
            </div>
        )
    }
}

export default Index
