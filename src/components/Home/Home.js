import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    console.log('Home',this.props);
    const stockData = this.props.data;
    let keys = Object.keys(stockData);
    let values = Object.values(stockData);
    let data = [];
    let dataPoint = null;
    for(let i=0;i<keys.length;i++){
      dataPoint = {symbol:keys[i],value:values[i]}
      data.push(dataPoint)
    }
    const theStocks = data.map((elem,index)=>{
      let differenceSinceLastClose = (elem.value.values[0].close - elem.value.values[1].close).toFixed(2);
      let percentageSinceLastClose = (100*(differenceSinceLastClose / elem.value.values[1].close)).toFixed(2);
  
      let upOrDown = ()=>{
        if (differenceSinceLastClose > 0 ) {
          return (
            <div className="green delta">
            <div className="dDiff"> 
              <div>⬆ Δ</div>
              <div>
                {differenceSinceLastClose}
              </div>
            </div>
            <div className="pDiff">
              <div>|</div>
              <div>{percentageSinceLastClose}%</div>
            </div>
          </div>
          )
        }
        else {
          return (
          <div className="red delta">
            <div className="dDiff"> 
              <div>⬇ Δ</div>
              <div>
                {differenceSinceLastClose}
              </div>
            </div>
            <div className="pDiff">
              <div>|</div>
              <div>{percentageSinceLastClose}%</div>
            </div>
          </div>
          )
        }
      }
      return (<Link to={`/symbol/${elem.symbol}`} key={index}>
          <div className="entry">
              <div className="entryTitle">
                <div>{elem.symbol}</div>
                <div>
                ${parseFloat(elem.value.values[0].close).toFixed(2)}
                </div>
              </div>
              <div>
                {upOrDown()}
              </div>
          </div>
        </Link>)
    })

    return (
      <div className="home">
        <div className="container">
            {theStocks}
        </div>
      </div>
    )
  }
}