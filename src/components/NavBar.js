import React, { Component } from "react";


class NavBar extends Component {
  handleClick = () => {
    this.props.handleLogout();
  };

  render() {
    return (
      <div className='logout'>
        <button className='btn' onClick={this.handleClick} style={{fontSize: '25px', outline: 'none'}}>Logout</button>
      </div>
    );
  }
}

export default NavBar;
