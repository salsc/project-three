import axios from "axios";
import React, { Component } from 'react';
import {Route,Link,Switch} from "react-router-dom";
import './App.css';
import Home from "../Home/Home";
import Show from "../Show/Show";

const api_key = '&apikey=a5b9e8fa25dd4524925eac5e38f665b9';

let baseUrl = 'https://api.twelvedata.com/'
let timeSeries = 'time_series?' 
let stocks = 'symbol=ATNX,DE,MORF,TSLA,CD,GME,OSS'
let interval = '&interval=1day' // 1min, 5min, 15min, 30min, 45min, 1h, 2h, 4h, 1day, 1week, 1month
let data = [];


let url = baseUrl + timeSeries + stocks + interval + api_key

export default class App extends Component {
  constructor(){
    super()
    this.state={
      data
    }
  }

  componentDidMount = () => {
    axios
      .get(url)
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
        

