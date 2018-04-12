import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({ videos, onSelectVideo }) => {
  return (
    <div className="col-md-4">
      <ul className="list-group">
      {
        videos.map(video => (
          <VideoListItem 
            video={video}
            onSelectVideo={onSelectVideo} />
        )) 
      }
      </ul>
    </div>
  );
}

export default VideoList;