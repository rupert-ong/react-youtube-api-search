import React from 'react';

const VideoListItem = ({video, onSelectVideo, isSelected }) => {
  const key = video.etag;
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  const callBack = e => onSelectVideo(video);
  const isSelectedClass = isSelected ? ' active' : '';

  return (
    <a href="#" key={key} className={"list-group-item list-group-item-action" + isSelectedClass} onClick={callBack}>
      <div className="media">
        <img src={imgUrl} style={{width: 64}} className="mr-3" />
        <div className="media-body"><h6 className="mt-0">{title}</h6></div>
      </div>
    </a>
  );
};

export default VideoListItem;