import axios from "axios";
import React, { Component } from 'react';
import {Route,Link,Switch} from "react-router-dom";
import './App.css';
import Home from "../Home/Home";
import Show from "../Show/Show";

const api_key = 'a5b9e8fa25dd4524925eac5e38f665b9';

let data = [];
let url = 'https://api.twelvedata.com/'
let stocks = 'symbol=MORF,ECOR,SOS'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      data
    }
  }
  // https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&apikey=your_api_key
  componentDidMount = () => {
    axios
      .get(`${url}time_series?${stocks}&interval=1day&apikey=${api_key}`)
      .then(response => {
        this.setState({
          data: response.data
        })
      })
  }
  
  render () {
    return (
      <div className="App">
        <div className="App-header">
        <Link to='/'>
          <p id="title">Stock Market Watch List Portal</p>
        </Link>
        </div>
        <main>
        <Switch>
          <Route exact path='/'>
            <Home {...this.state} />
          </Route>
          <Route path='/symbol/:id' render={(routerProps) =>
            <Show symbol={this.state} {...this.state} {...routerProps} />
          }>
          </Route>
        </Switch>
        </main>
      </div>
    )
  }
}
        

