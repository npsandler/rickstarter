import React from 'react';
import { withRouter } from 'react-router-dom';

class RewardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  numberRemaining() {
    let numRemaining;
    let { reward } = this.props;
    if (reward.num_allowed) {
      debugger
      let numRemaining = reward.num_allowed - reward.num_backers;
      return (
        <text className="orange">Limited ({numRemaining} of {reward.num_allowed} left)</text>
      );
    } else {
      return (
        null
      );
    }
  }

  render() {
    let { reward } = this.props;

    return (
      <section className='reward'>
        <h2>Pledge ${reward.pledge_amount} or more</h2>
        <h3>{reward.title}</h3>
        <text>{reward.description}</text>
        {this.numberRemaining()}
        <text>{reward.num_backers} backers</text>
      </section>
    );
  }


}
export default withRouter(RewardItem);
