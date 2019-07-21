import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle'
import index from './index.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Cards from './components/Card/Card';
import Search  from './components/Search/Search';
import login from './components/Login/login'
import Reporte from './components/Reporte/Reporte'
import Adminreport from './components/Adminreport/Adminreport'

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Route path="/Search" component={Search} />
        <Route path="/login" component={login} />
        <Route path="/Reporte" component={Reporte} />
        <Route path="/Adminreport" component={Adminreport} />
      </div>
    </BrowserRouter>
  );
}

export default App;
