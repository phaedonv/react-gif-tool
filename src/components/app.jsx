import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "J2runRfQPvK3zqSNX5"
    };

  }

  search = (query) => {
    giphy('uXy74uXuvP1WtYYE4f6CdMcZRA9Dq4d1').search({
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
        <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
