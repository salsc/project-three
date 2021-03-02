import React, { Component } from 'react';
import './Home.css';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import { waitForElementToBeRemoved } from '@testing-library/react';

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
          return (<Link to={`/symbol/${elem.symbol}`} key={index}>
              <div className="entry">
                  <div className="entryTitle">{elem.symbol} {elem.value.values[0].close}</div>
              </div>
            </Link>)
      })

      return (
        <div className="home">
          <div className="container">
              {theStocks} <br></br> End List
          </div>
        </div>
      )
    }
}