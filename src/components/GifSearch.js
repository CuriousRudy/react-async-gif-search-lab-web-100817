import React from 'react';

export default class GifSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      queryParams: ''
    };
  }

  handleChange = e => {
    this.setState({
      queryParams: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.props.searchGif(e, this.state.queryParams)}>
          <div className="form-group">
            <label>
              <input
                type="text"
                className="form-control"
                placeholder="Search for Gifs"
                value={this.state.queryParams}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    );
  }
}
