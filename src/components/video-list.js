import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({ videos, onSelectVideo, selectedVideo }) => {
  
  return (
    <div className="col-md-4">
      <ul className="list-group">
      {
        videos.map(video => {
          const isSelectedVideo = video == selectedVideo;
          return (
            <VideoListItem 
              video={video}
              onSelectVideo={onSelectVideo} 
              isSelected={isSelectedVideo}
            />
          );
        }) 
      }
      </ul>
    </div>
  );
}

export default VideoList;