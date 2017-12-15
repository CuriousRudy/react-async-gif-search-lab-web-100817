import React from 'react';

const GifList = props => {
  const gifs = props.gifsList.map((gif, i) => {
    return (
      <li key={i}>
        <img src={gif} alt="a gif!" />
      </li>
    );
  });
  return <ul>{gifs}</ul>;
};

export default GifList;
