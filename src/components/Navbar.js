import React, { Component } from 'react'
import heist from '../heist.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-primary flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-6 col-md-2 mr-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={heist} width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp; Money Heist
        </a>

        <ul className="navbar-nav px-6">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
