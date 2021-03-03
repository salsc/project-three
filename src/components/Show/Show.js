import React, { Component } from "react";
import { Link } from "react-router-dom"

import { Card, Button, Figure, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { createChart } from 'lightweight-charts';

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

    let chartData = [];

    for (let something in theSymbolData.values) {
      chartData.unshift(
        {
          datetime: theSymbolData.values[something].datetime,
          value: theSymbolData.values[something].close
        }
      )
    }
    console.log(chartData)

    let differenceSinceLastClose = (theSymbolData.values[0].close - theSymbolData.values[1].close).toFixed(2);
    let percentageSinceLastClose = ((differenceSinceLastClose / theSymbolData.values[1].close) * 100).toFixed(2);

    let open = parseFloat(theSymbolData.values[0].open).toFixed(2);
    let high = parseFloat(theSymbolData.values[0].high).toFixed(2);
    let low = parseFloat(theSymbolData.values[0].low).toFixed(2);
    let previousClose = parseFloat(theSymbolData.values[1].close).toFixed(2);

    let upOrDown = () => {
      if (differenceSinceLastClose > 0) {
        return <div className="green"> ⬆ Δ {differenceSinceLastClose} {percentageSinceLastClose}%</div>
      }
      else {
        return <div className="red"> ⬇ Δ {differenceSinceLastClose} {percentageSinceLastClose}%</div>
      }
    }

    // function paintTheChart(){
    //   let chart = createChart(document.body, { width: 288, height: 300 });
    //   let lineSeries = chart.addLineSeries();
    //   lineSeries.setData([
    //     { time: chartData[0].datetime, value: chartData[0].value },
    //     { time: chartData[1].datetime, value: chartData[1].value },
    //     { time: chartData[2].datetime, value: chartData[2].value },
    //     { time: chartData[3].datetime, value: chartData[3].value },
    //     { time: chartData[4].datetime, value: chartData[4].value },
    //     { time: chartData[5].datetime, value: chartData[5].value },
    //     { time: chartData[6].datetime, value: chartData[6].value },
    //     { time: chartData[7].datetime, value: chartData[7].value },
    //     { time: chartData[8].datetime, value: chartData[8].value },
    //     { time: chartData[9].datetime, value: chartData[9].value },
    //     { time: chartData[10].datetime, value: chartData[10].value },
    //     { time: chartData[11].datetime, value: chartData[11].value },
    //     { time: chartData[12].datetime, value: chartData[12].value },
    //     { time: chartData[13].datetime, value: chartData[13].value },
    //     { time: chartData[14].datetime, value: chartData[14].value },
    //     { time: chartData[15].datetime, value: chartData[15].value },
    //     { time: chartData[16].datetime, value: chartData[16].value },
    //     { time: chartData[17].datetime, value: chartData[17].value },
    //     { time: chartData[18].datetime, value: chartData[18].value },
    //     { time: chartData[19].datetime, value: chartData[19].value }
    //   ]);
    // }

    return (
      <div className="show">

        <div>
          <Card style={{ width: '18rem', margin: '0 auto' }}>
            <Card.Body>
              <Card.Title>{theSymbolData.meta.symbol} {theSymbolData.values[0].close} {upOrDown()}</Card.Title>
              <Card.Text>
                <div>OPEN: {open}</div>
                <div>HIGH: {high}</div>
                <div>LOW: {low}</div>
                <div>PREVIOUS CLOSE: {previousClose}</div>

              </Card.Text>
              <Link to='/'><Button variant="primary">Go back to Watchlist</Button></Link>

              <Figure.Caption>
                All values in {theSymbolData.meta.currency}
              </Figure.Caption>

            </Card.Body>
          </Card>
        </div>

      </div>
    )
  }
}