import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Gallery = () => {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  };
  return (
    <React.Fragment>
      <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleClick}>
        <span className="icon">
          <FavoriteBorderIcon className="heart" />
        </span>
        <span className="text">{liked ? 'Liked!' : 'Like'}</span>
      </button>
    </React.Fragment>
  );
};

export default Gallery;