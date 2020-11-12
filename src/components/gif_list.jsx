import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  render() {
    let renderList = () => {
      return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);
    };

    return (
      <div className="gif-list">
        {renderList()}
      </div>
    );
  }
}

export default GifList;
