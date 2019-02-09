import React from 'react';
import { searchByQuery } from '../services/phones/action';
import { connect } from 'react-redux';

class SearchInput extends React.Component {
  handleChange(e) {
    this.props.search(e.target.value);
  }
  render() {
    return (
      <input
        className="custom-input"
        placeholder="Search By Phone Name"
        type="text"
        onChange={e => this.handleChange(e)}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: query => dispatch(searchByQuery(query))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchInput);
