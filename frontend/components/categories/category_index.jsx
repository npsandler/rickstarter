import React from 'react';

export default class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.cat = this.props.match.path.slice(9)
    debugger
  }

  componentDidMount

  render() {
    return(
      null
    );
  }



}
