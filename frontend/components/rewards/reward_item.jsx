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
        <li className="orange">Limited ({numRemaining} of {reward.num_allowed} left)</li>
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
        <ul>
          <li className="blue reward-title">Pledge ${reward.pledge_amount} or more</li>
          <li>{reward.title}</li>
          <li className='gray'>{reward.description}</li>
          {this.numberRemaining()}
          <li className='gray'>{reward.num_backers} backers</li>
        </ul>
      </section>
    );
  }


}
export default withRouter(RewardItem);
