import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.query}`);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }


  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render() {
      return (
        <div id="wrap">
          <form onSubmit={this.handleSubmit} autoComplete="on">
            <input className="search-input" onChange={this.update('query')} id="search" name="search" type="text" placeholder="Search projects..."/>
              <input className="search-submit" id="search_submit" value="Rechercher" type="submit"/>
          </form>
        </div>
      );
    }
}

export default withRouter(SearchBar);
