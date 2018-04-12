import React from 'react';

const VideoListItem = ({video, onSelectVideo, isSelected }) => {
  const key = video.etag;
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  const callBack = e => onSelectVideo(video);
  const isSelectedClass = isSelected ? "bg-primary" : '';

  return (
    <li key={key} className={"list-group-item " + isSelectedClass} onClick={callBack}>
      <div className="media">
        <img src={imgUrl} className="mr-3" />
        <div className="media-body"><h6 className="mt-0">{title}</h6></div>
      </div>
    </li>
  );
};

export default VideoListItem;