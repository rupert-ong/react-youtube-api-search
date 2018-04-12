import React from 'react';

const VideoListItem = ({video, onSelectVideo, isSelected }) => {
  const key = video.etag;
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  const callBack = e => onSelectVideo(video);
  const isSelectedClass = isSelected ? "bg-primary" : '';

  return (
    <li key={key} className={"list-group-item " + isSelectedClass} onClick={callBack}>
      <div className="media-left video-item"><img src={imgUrl} className="media-object" /></div>
      <div className="media-body"><div className="media-heading">{title}</div></div>
    </li>
  );
};

export default VideoListItem;