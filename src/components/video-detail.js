import React from 'react';

const VideoDetail = ({ video }) => {
  if(!video) return <div>Loading...</div>;

  const videoId = video.id.videoId;
  const url = `https://youtube.com/embed/${videoId}`;

  return (
    <div className="col-md-8 mb-3">
      <div className="card">
        <div className="embed-responsive embed-responsive-16by9 card-img-top">
          <iframe src={url} className="embed-responsive-item"></iframe>
        </div>
        <div className="card-body">
          <h4 className="card-title">{video.snippet.title}</h4>
          <span className="card-text">{video.snippet.description}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;