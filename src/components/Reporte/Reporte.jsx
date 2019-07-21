import React, { Component } from 'react'
import axios from 'axios'

export class Reporte extends Component {
    constructor() {
        super()
        this.state = {
            code: '',
            descripcion: ''
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
        axios.post('https://server-final.herokuapp.com/new/reporte', this.state)
            .then(author => alert('Reporte creado'))
            .catch(err => alert(err))
    }

    render() {
        return (
            <div>
                <form className='aber' onSubmit={this.onSubmitForm}>
                    <div className="">
                        <h5 className='titulo'> Para reportar a un policia por favor pon el codigo de la patrulla <br></br> y una breve descripcion de tu reporte </h5>
                        <input className='inputtext' type="text" id="code" placeholder="codigo" required 
                            onChange={this.onInputChange}
                            value={this.state.userName}/>
                        <input className='inputreporte' type="text" id="descripcion" placeholder="Una breve descripcion de tu reporte " required 
                            onChange={this.onInputChange}
                            value={this.state.userName}/>
                        <button className='botonreprote' type="submit" > Reportar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Reporte
