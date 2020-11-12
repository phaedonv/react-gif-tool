import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
class App extends Component {
  render() {
    const gifs = [
      { id: "J2runRfQPvK3zqSNX5"},
      { id: "YplU0FU3XHwaMmA6HM"}
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="J2runRfQPvK3zqSNX5"/>
          </div>
        </div>
        <div className="right-scene">
        <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
