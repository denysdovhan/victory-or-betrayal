import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <h1 className="header">
        {this.props.children}
      </h1>
    )
  }
}

export default Header;
