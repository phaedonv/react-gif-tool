import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const API_KEY = process.env.GIPHY_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "J2runRfQPvK3zqSNX5"
    };
  }

  search = (query) => {
    giphy({ api_key: API_KEY, https: true }).search({
      q: query,
      rating: 'g',
      limit: 42
    }, (error, result) => {
      this.setState({
        gifs: result.data
      // Res contains gif data!
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
        <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
