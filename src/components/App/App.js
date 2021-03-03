import axios from "axios";
import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from "../Home/Home";
import Show from "../Show/Show";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const api_key = '&apikey=a5b9e8fa25dd4524925eac5e38f665b9';
//const api_key = '&apikey=927ffd481c7548ef92cfe3189c8e4a07';


let baseUrl = 'https://api.twelvedata.com/'
let timeSeries = 'time_series?'
let stocks = 'symbol=ATNX,DE,MORF,TSLA,CD,GME,OSS,BRK.A'
let interval = '&interval=1day' // 1min, 5min, 15min, 30min, 45min, 1h, 2h, 4h, 1day, 1week, 1month
let data = [];

let url = baseUrl + timeSeries + stocks + interval + api_key

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      data
    }
  }

  componentDidMount = () => {
    axios
      .get(url)
      .then(response => {
        console.log(response)
        this.setState({
          data: response.data
        })
      })
  }

  render() {
    console.log("App", this.state);
    return (
      <div className="App">
        <div className="App-header">
          <Navbar bg="dark" variant="dark">
            <Link to='/'>
            <Navbar.Brand>Stock Market Watch List Portal</Navbar.Brand>
            </Link>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Category</Nav.Link>
              <Nav.Link href="#features">Daily Winners</Nav.Link>
              <Nav.Link href="#pricing">Daily Losers</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <main>
          <Switch>
            <Route exact path='/'>
              <Home {...this.state} />
            </Route>
            <Route path='/symbol/:id' render={(routerProps) =>
              <Show {...this.state} {...routerProps} />
            }>
            </Route>
          </Switch>
        </main>
        <div class="fixed-bottom">
          <div>
            <p class="left-footer">Three Dudes & A Front-End Stack</p>
          </div>
          <div>
            <p class="right-footer">Copyright &copy; 2021</p>
          </div>
        </div>

      </div>
    )
  }
}


