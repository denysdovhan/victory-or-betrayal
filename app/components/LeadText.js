import React from 'react';

class LeadText extends React.Component {
  render () {
    return (
      <p className="lead">{this.props.children}</p>
    )
  }
}

export default LeadText;
