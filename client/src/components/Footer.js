import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Footer extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return [
          <>
          <h4 className="item" key="3">
            Credits: {this.props.auth.credits}
          </h4>
          <a key="1">
            <Payments />
          </a>
          </>,
        ];
    }
  }

  render() {
    return (
      <div className="ui secondary menu" style={{bottom:0, marginTop: "10rem"}}  >
        <Link
          to="/about"
          className="item"
          style={{fontSize:"1.5em"}}

        >
            About
        </Link>
        <div className="menu right">
          <div className="item">{this.renderContent()}</div>
        </div>
        </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Footer);