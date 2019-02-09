import React from 'react';

class Card extends React.PureComponent {
  render() {
    return (
      <div className="card-wrapper">
        <div className="card">
          <h3>{this.props.name}</h3>
          <p>{this.props.description || 'Description Not Found.'}</p>

          <h4>{this.props.brand}</h4>
          <h5>{this.props.year}</h5>
        </div>
      </div>
    );
  }
}

export default Card;
