import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { API_KEY } from './env';

import SearchBar from './components/search-bar';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));