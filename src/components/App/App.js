import axios from "axios";
import { Component } from 'react';
import './App.css';

const api_key = 'a5b9e8fa25dd4524925eac5e38f665b9';

let data = [];
let url = 'https://api.twelvedata.com/'
let stocks = 'symbol=DE,CAT,AAPL,BB'

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
      .get(`${url}time_series?${stocks}&interval=1h&apikey=${api_key}`)
      .then(response => {
        console.log(response)
      })
  }
  
  render () {
    return (
      <div>
        <Link to='/'>
          <h2>Stock Market Watch Portal</h2>
        </Link>
        <Switch>
          <Route exact path='/' render={(routerProps) =>
            <Home {...this.state} {...routerProps} />
          }>
          </Route>
          <Route path='/symbol/:id' render={(routerProps) =>
            <Show {...this.state} {...routerProps} />
          }>
          </Route>
        </Switch>
      </div>
    )
  }
}
        

