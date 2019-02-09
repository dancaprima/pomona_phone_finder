import React from 'react';
import Checkbox from '../layouts/Checkbox';
import { connect } from 'react-redux';
import { filteredByBrand } from '../services/phones/action';

class BrandFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleChange(index, event) {
    this.props.filterByBrand(index, event.target.checked);
  }

  render() {
    return (
      <div className="filter-container">
        <div className="filter-content">
          <div onClick={this.toggleOpen} className="filter-title">
            <div>
              <h5>Brand</h5>
              <h6>
                {this.props.phones.brand.some(v => v.checked === true)
                  ? 'Filtered...'
                  : 'All Filter'}
              </h6>
            </div>
            <div className="filter-icon">
              <i className={`arrow ${this.state.isOpen ? 'down' : 'up'}`} />
            </div>
          </div>
          {this.state.isOpen && (
            <div className="filter-body">
              {this.props.phones.brand.map((e, i) => {
                return (
                  <label
                    key={e.name}
                    className="custom-checkbox"
                    htmlFor={e.name}
                  >
                    <Checkbox
                      id={e.name}
                      value={e.name}
                      key={e.name}
                      checked={e.checked}
                      name={e.name}
                      onChange={e => this.handleChange(i, e)}
                    />
                    {e.name}
                  </label>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { phones } = state;
  return { phones };
};

const mapDispatchToProps = dispatch => {
  return {
    filterByBrand: (id, checked) => dispatch(filteredByBrand(id, checked))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandFilter);
