import React, { Component } from 'react';
import './App.css';
import SearchInput from '../components/SearchInput';
import BrandFilter from '../components/BrandFilter';
import YearFilter from '../components/YearFilter';
import Content from '../components/Content';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { phones } = this.props;
    return (
      <div className="App">
        <div className="input-wrapper">
          <SearchInput />
        </div>
        <div className="filter-wrapper">
          <BrandFilter />
          <YearFilter />
        </div>
        <Content items={phones.data} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { phones } = state;
  return { phones };
};

export default connect(mapStateToProps)(App);
