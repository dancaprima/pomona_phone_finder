import React from 'react';

class Checkbox extends React.PureComponent {
  render() {
    return <input type="checkbox" {...this.props} />;
  }
}

export default Checkbox;
