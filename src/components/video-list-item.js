import React from 'react';

const VideoListItem = ({video, onSelectVideo }) => {
  const key = video.etag;
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  const callBack = e => onSelectVideo(video);

  return (
    <li key={key} className="list-group-item" onClick={callBack}>
      <div className="media-left video-item"><img src={imgUrl} className="media-object" /></div>
      <div className="media-body"><div className="media-heading">{title}</div></div>
    </li>
  );
};

export default VideoListItem;