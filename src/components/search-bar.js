import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      term: e.target.value
    });
    this.props.onSearchTerm(this.state.term);
  }

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar">
        <input className="form-control" value={term} onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default SearchBar;