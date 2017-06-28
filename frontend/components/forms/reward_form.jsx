import React from 'react';
import { withRouter } from 'react-router-dom';
import RewardFormItem from './reward_form_item';


class RewardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rewards: this.props.incompleteForm.rewards
    };

    this.addRewardForm = this.addRewardForm.bind(this);
  }


  update(property) {
    return e => this.setState({ [property]: e.target.value });
    this.props.receiveIncompleteForm(this.state.rewards);
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

  addRewardForm(e) {
    e.preventDefault();
    this.props.receiveBlankReward();
  }

  render() {
    let rewardItems = [];
    this.props.incompleteForm.rewards.forEach(
      (reward, idx) => (
        rewardItems.push(
          <RewardFormItem
            key={idx}
            idx={idx}
            receiveIncompleteReward={this.props.receiveIncompleteReward}
            reward={reward} />)
      )
    )
    return (
      <section className="full-project-create">
        <section className='page-header'>
        <h1 className='full-header'>Set your rewards.</h1>
        <h2 className='sub-header'>Invite backers to be a part of the creative experience by offering rewards like a copy of what you’re making, a special experience, or a behind-the-scenes look into your process.</h2>
          <ul className="errors">{this.errors()}</ul>
        </section>

        <section className="content-container">
            {rewardItems}
            <button className='submit-button reward-button' onClick={this.addRewardForm}>Add reward</button>
          </section>
        </section>





      );
    }
}

export default withRouter(RewardForm);
