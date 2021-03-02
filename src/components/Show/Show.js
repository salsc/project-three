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
    let percentageSinceLastClose = ((differenceSinceLastClose / theSymbolData.values[1].close) * 100).toFixed(2);

    let open = parseFloat(theSymbolData.values[0].open).toFixed(2);
    let high = parseFloat(theSymbolData.values[0].high).toFixed(2);
    let low = parseFloat(theSymbolData.values[0].low).toFixed(2);
    let previousClose = parseFloat(theSymbolData.values[1].close).toFixed(2);

    let upOrDown = () => {
      if (differenceSinceLastClose > 0 ) {
        return <div className="green"> ⬆ Δ {differenceSinceLastClose} {percentageSinceLastClose}%</div>
      }
      else {
        return <div className="red"> ⬇ Δ {differenceSinceLastClose} {percentageSinceLastClose}%</div>
      }
    }

    return (
      <div className="show">
        <div className="container">
          <div className="symbol-details">
            All values in {theSymbolData.meta.currency}<br></br>
            {theSymbolData.meta.symbol} {theSymbolData.values[0].close} {upOrDown()}
              OPEN: {open}<br></br>
              HIGH: {high}<br></br>
              LOW: {low}<br></br>
              PREVIOUS CLOSE: {previousClose}
          </div>

        </div>
        <Link to='/'>Go back to Watchlist</Link>
      </div>
    )
  }
}