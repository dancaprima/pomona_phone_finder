import React from 'react';

class NotFound extends React.PureComponent {
  render() {
    return (
      <div className="notfound-wrapper">
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

export default NotFound;
