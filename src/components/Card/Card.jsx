import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <div className='mycard'>
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title" id ='nombre'>Nombre </h5>
                        <h6 className="card-subtitle mb-2 text-muted" id='codigo'>Codigo</h6>
                        <h6 className="card-subtitle mb-2 text-muted" id ='delegacion'>Delegacion</h6>
                        <h6 className="card-subtitle mb-2 text-muted" id ='jefe'>Jefe</h6>
                        <a href="#" className="card-link"> Reportar </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Card