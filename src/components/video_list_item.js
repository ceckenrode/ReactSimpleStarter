import React from 'react';
const VideoListItem = ({video}) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imgUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">
              {video.snippet.title}
            </div>
          </div>
        </div>
      </li>
  );
}
export default VideoListItem;
