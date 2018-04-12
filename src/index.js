import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import { API_KEY } from './env';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.handleSearchTerm('surfboards');
  }
  
  handleSearchTerm = term => {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  handleSelectVideo = video => {
    this.setState({
      selectedVideo: video
    });
  }

  render(){
    const { videos, selectedVideo } = this.state;
    const debouncedSearchFunc = _.debounce(term => this.handleSearchTerm(term), 300);

    return (
      <div>
        <SearchBar onSearchTerm={debouncedSearchFunc}/>
        <div className="row">
          <VideoDetail video={selectedVideo}/>
          <VideoList videos={videos} onSelectVideo={this.handleSelectVideo} selectedVideo={selectedVideo} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));