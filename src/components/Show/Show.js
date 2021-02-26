import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./Show.css";

export default class Show extends Component {
    render() {
      console.log('Show');

      return (
        <div className="show">
          <div className="container">
            Aloha
          </div>
        </div>
      )
    }
}