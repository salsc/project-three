import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./Show.css";

export default class Show extends Component {
    render() {
      console.log(this.props);
      

      return (
        <div className="show">
          <div className="container">
            Aloha
          </div>
          <Link to='/'>Go back to Watchlist</Link>
        </div>
      )
    }
}