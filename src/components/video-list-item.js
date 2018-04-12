import React from 'react';

const VideoListItem = ({ key, video }) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  
  return (
    <li key={key} className="list-group-item">
      <div className="media-left"><img src={imgUrl} className="media-object" /></div>
      <div className="media-body"><div className="media-heading">{title}</div></div>
    </li>
  );
};

export default VideoListItem;