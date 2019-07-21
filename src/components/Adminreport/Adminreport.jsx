import React, { Component } from 'react'
import axios from 'axios'
import Card from '../Adminreport/Cardadmin';


export class Adminreport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            polis:[]
        }
    }

    componentDidMount() {
        axios.get('https://server-final.herokuapp.com/reportes')
        .then(res => {
            console.log(res.data.report,)
            // const data = [];
            // Object.keys(res).map(item => {
            //     console.log('jhgjhgjhghjgjhgjgjhgjg', item)
            //     data.push(res[item]);
            // })
            this.setState({
                polis: res.data.report,
            });

            // this.setState( dato => ({
            //     this.state.polis.push(dato)
            // }))
           
        })
        .catch(err => {
            console.log(err);
            
        })
    }

     renderUsers = () => {
        if (this.state.polis.length === 0) {
            return <h1>Loading...</h1>
        } else {
        return this.state.polis.map(user => {
            return <Card code={user.code} descripcion={user.descripcion}/>
        })
        }
    } 
    render() {
        return (
            <div>
                {
                    this.renderUsers()
                } 
            </div>
        )
    }
}

export default Adminreport
