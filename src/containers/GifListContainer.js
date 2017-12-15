import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

var GphApiClient = require('giphy-js-sdk-core');
const client = GphApiClient('qSNKVRiKtAvSnNwN8Gbmh5oW9TY33qCu');

class GifListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    };
  }

  storeGifs = json => {
    let gifs = json.data.slice(0, 3);
    gifs = gifs.map(gif => {
      return gif.images.downsized_large.gif_url;
    });
    this.setState({ gifs });
  };

  searchGif = (e, queryParams) => {
    e.preventDefault();
    client
      .search('gifs', { q: queryParams })
      .then(data => this.storeGifs(data));
  };

  // callback for query api

  render() {
    console.log(this.state);
    return (
      <div>
        <GifList gifsList={this.state.gifs} />
        <GifSearch searchGif={this.searchGif} />
      </div>
    );
  }
}

export default GifListContainer;
