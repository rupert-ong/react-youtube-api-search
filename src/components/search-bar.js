import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.inputNode = null;

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

  componentDidMount(){
    this.inputNode.focus();
  }

  render() {
    const { term } = this.state;
    return (
      <div className="mt-3 mb-3">
        <input 
          className="form-control" 
          value={term} 
          onChange={this.handleInputChange} 
          placeholder="Enter a search term"
          ref={node => this.inputNode = node}
          />
      </div>
    );
  }
}

export default SearchBar;