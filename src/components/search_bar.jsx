import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  handleUpdate = (event) => {
    this.setState({
      term: event.target.value
    });
    this.props.searchFunction(event.target.value);
  }

  componentWillMount() {
    console.log("SEARCH_BAR_WILL_MOUNT");
  }

  componentDidMount() {
    console.log("SEARCH_BAR_DID_MOUNT");
  }

  render() {
    console.log("SEARCH_BAR RENDER");
    return (
      <input
      placeholder="Search here for a GIF!"
      value={this.state.term}
      type="text"
      className="form-control form-search"
      onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
