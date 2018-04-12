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
      <div className="search-bar">
        <input className="form-control" value={term} onChange={this.onInputChange} />
      </div>
    );
  }
}

export default SearchBar;