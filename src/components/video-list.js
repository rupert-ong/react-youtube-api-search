import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({ videos, onSelectVideo }) => {
  return (
    <ul className="col-md-4 list-group">
    {
      videos.map(video => (
        <VideoListItem 
          video={video}
          onSelectVideo={onSelectVideo} />
      )) 
    }
    </ul>
  );
}

export default VideoList;