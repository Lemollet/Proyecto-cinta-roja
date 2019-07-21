import React, { Component } from 'react'

export class Cardadmin extends Component {
    render() {
        return (
            <div className='cartaschidas'>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title" id='code'>{this.props.code}</h5>
                        <p className="card-text" id='descripcion'>{this.props.descripcion}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cardadmin