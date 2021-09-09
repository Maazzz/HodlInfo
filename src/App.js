import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './view/Header.js';
import Price from './view/Price.js';
import Table from './view/Table.js';
import Company from './view/Company.js'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  const [Darkmode, setDarkmode] = useState(true)
  const [show, setshow] = useState(false)
  useEffect(() => {
    setshow(true)
    setTimeout(() =>{
      setshow(false)
    },2000)
  },[]);

  return (
    <Router>
      
    <div className="App" style={{
      backgroundColor: Darkmode ? '#191D28': '#ffff',
      color: Darkmode ? '#ffff' : '#191D28'
    }}>
      <Switch>
      <Route path='/'>
      <div className='head'>
      <Header/>
      <label class="switch">
                <input type="checkbox" checked={Darkmode} onChange={() => setDarkmode(!Darkmode)} />
                    <span class="slider round"></span>
      </label>
      </div>
      {show ? <div className='ldiv'><div className="loader"></div></div> : 
      <div>
      <Price/>
      <Table/>
      <Company/></div>}
      </Route>
      </Switch>
    </div>
    
    </Router>
  );
}

export default App;
