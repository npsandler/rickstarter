import React from 'react';
import { withRouter } from 'react-router-dom';

class RewardItem extends React.Component {
  constructor(props) {
    super(props);
    this.processPledge = this.processPledge.bind(this)
  }

  numberRemaining() {
    let numRemaining;
    let { reward } = this.props;
    if (reward.num_allowed) {
      let numRemaining = reward.num_allowed - reward.num_backers;
      return (
        <p className="orange">Limited ({numRemaining} of {reward.num_allowed} left)</p>
      );
    } else {
      return (
        null
      );
    }
  }

  processPledge(e) {
    e.preventDefault()
    debugger
    this.props.createPledge(this)
  }

  render() {
    let { reward } = this.props;

    return (
      <section onClick={this.processPledge} className='reward'>
        <p className="reward-blue reward-header">Pledge ${reward.pledge_amount} or more</p>
        <label className='reward-header'>{reward.title}</label>
        <text className='gray desc'>{reward.description}</text>
        {this.numberRemaining()}
        <p className='gray'>{reward.num_backers} backers</p>
      </section>
    );
  }


}
export default withRouter(RewardItem);
