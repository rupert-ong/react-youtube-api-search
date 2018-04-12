import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import { API_KEY } from './env';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: []
    };
    YTSearch({ key: API_KEY, term: 'surfboards' }, data => {
      this.setState({ videos: data });
    });
  }
  render(){
    const { videos } = this.state;
    return (
      <div>
        <SearchBar />
        <div className="row">
          <VideoDetail video={videos[0]}/>
          <VideoList videos={videos}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));