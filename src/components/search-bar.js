import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange = (e) => {
    this.setState({
      term: e.target.value
    });
  }

  render() {
    const { term } = this.state;
    return (
      <input value={term} onChange={this.onInputChange} />
    );
  }
}

export default SearchBar;