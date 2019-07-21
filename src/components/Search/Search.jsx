import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Card from '../Card/Card'

export class Search extends Component {

    onSubmitForm = (e) => {
        e.preventDefault();
        const id = document.getElementById('id')
        const idvalue = id.value 
        axios.get(`https://server-final.herokuapp.com/policias/${idvalue}`, this.state)
        .then(res => {
            console.log(res.data.poli[0])

            document.getElementById('nombre').innerHTML = `${res.data.poli[0].name}`
            document.getElementById('codigo').innerHTML = `Codigo: ${res.data.poli[0].code}`
            document.getElementById('delegacion').innerHTML = `Delegación: ${res.data.poli[0].delegacion}`
            document.getElementById('jefe').innerHTML = `Jefe: ${res.data.poli[0].jefe}`

            
        })
        .catch(err => {
            console.log(err);
            document.getElementById('respuesta').innerHTML = `Lo sentimos el id: ${idvalue} no es valido ` 
        })
    }


    render() {
        return (
            <div className="fromchido">
                <div>
                    <form className='aber' onSubmit={this.onSubmitForm}>
                        <div className="">
                            <h5 className='titulo' >Por favor ingrese el codigo de la patrulla </h5>
                            <input className='inputtext' type="text" id="id" placeholder="codigo" required />
                            <button className='botoncito' type="submit" > Buscar</button>
                            <p className='parrafo' id='respuesta'> </p>
                        </div>
                    </form>
                </div>
                <div>
                    <div className='mycard'>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title" id='nombre'>Nombre </h5>
                                <h6 className="card-subtitle mb-2 text-muted" id='codigo'>Codigo</h6>
                                <h6 className="card-subtitle mb-2 text-muted" id='delegacion'>Delegacion</h6>
                                <h6 className="card-subtitle mb-2 text-muted" id='jefe'>Jefe</h6>
                                <Link to='/Reporte'>
                                    <button className='boton' type="submit" > Reportar</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search


/* renderCards = () => {
    return this.state.policias.length === 0
        ? <h1>Cargando....</h1>
        : this.state.policias
            .map(author => <Card nombre={author.name} codigo={author.code} placa={author.badge} delegacion={author.delegacion} jefe={author.jefe} />)
} */


/* componentDidMount() {
    const id = document.getElementById('id')
    const idvalue = id.value 
    axios.get(`https://server-final.herokuapp.com/policias/${idvalue}`)
        .then(res => {
            this.setState({
                policias: res.data
            })
        })
        .catch(err => {
            console.log(err)
            alert('ERROR')
        })
} */