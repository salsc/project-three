import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./Show.css";

export default class Show extends Component {
  render() {

    let symbolID = this.props.match.params.id; //url
    let data = this.props.data;

    let theSymbolData = {};

    for (let symbolKey in data) {
      if (symbolKey === symbolID) {
        theSymbolData = data[symbolKey];
      }
    }

    let differenceSinceLastClose = (theSymbolData.values[0].close - theSymbolData.values[1].close).toFixed(2);
    let percentageSinceLastClose = (differenceSinceLastClose / theSymbolData.values[1].close).toFixed(2);

    return (
      <div className="show">
        <div className="container">
          <div className="symbol-details">
            All values in {theSymbolData.meta.currency}<br></br>
            {theSymbolData.meta.symbol} {theSymbolData.values[0].close}  Δ: {differenceSinceLastClose} ({percentageSinceLastClose}%)<br></br>
              OPEN: {theSymbolData.values[0].open}<br></br>
              HIGH: {theSymbolData.values[0].high}<br></br>
              LOW: {theSymbolData.values[0].low}<br></br>

              PREVIOUS CLOSE:
          </div>

        </div>
        <Link to='/'>Go back to Watchlist</Link>
      </div>
    )
  }
}

