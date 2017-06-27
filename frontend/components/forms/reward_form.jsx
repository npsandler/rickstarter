import React from 'react';
import { withRouter } from 'react-router-dom';


class RewardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rewards: this.props.incompleteForm.rewards
    };
    debugger
    this.addReward = this.addReward.bind(this);
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

  addReward(e) {
    e.preventDefault();
    this.state.rewards.push({
      title: '',
      num_allowed: null,
      description: "",
      pledge_amount: 5
    })
  }

  render() {
    return (
      <section className="full-project-create">

        <h1 className='full-header'>Set your rewards.</h1>
        <h2 className='sub-header'>Invite backers to be a part of the creative experience by offering rewards like a copy of what you’re making, a special experience, or a behind-the-scenes look into your process.</h2>

        <h4>Reward #{this.reward_num}</h4>
        <section className="reward-inputs">
          <ul className="errors">{this.errors()}</ul>
          <section className="reward-title-row">
            <label>Title</label>
            <input
              className="reward-input"
              type="text"
              value={this.state.rewards[this.reward_num]}
              onChange={this.update('title')}/>
          </section>
          <section className="reward-input-row">
            <label>Pledge Amount</label>
            <input
              className="reward-input"
              type="number"
              value={this.state.rewards[this.reward_num]}
              onChange={this.update('pledge_amount')}/>
          </section>
          <section className="reward-input-row box">
            <label>Decription</label>
            <input
              className="reward-input"
              type="textarea"
              value={this.state.rewards[this.reward_num]}
              onChange={this.update('description ')}/>
          </section>
          <section className="reward-input-row">
            <label>Limit availability</label>
            <input
              className="reward-input"
              type="number"
              value={this.state.rewards[this.reward_num]}
              onChange={this.update('num_allowed')}/>
          </section>

            <button className='reward-button' onClick={this.addReward}>Add reward</button>
          </section>
        </section>





      );
    }
}

export default withRouter(RewardForm);
