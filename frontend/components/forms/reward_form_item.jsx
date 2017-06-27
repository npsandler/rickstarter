import React from 'react';
import { withRouter } from 'react-router-dom';


class RewardFormItem extends React.Component {
  constructor(props) {
    super(props);

      this.state = this.props.reward;

    this.update = this.update.bind(this);
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value }, () => (
      this.props.receiveIncompleteReward(this.state, this.props.idx)
    ));
    };
  }

  render() {
    return (
    <section>
        <h4>Reward</h4>
      <section className="reward-title-row">
        <label>Title</label>
        <input
          className="reward-input"
          type="text"
          value={this.state.title}
          onChange={this.update('title')}/>
      </section>
      <section className="reward-input-row">
        <label>Pledge Amount</label>
        <input
          className="reward-input"
          type="number"
          value={this.state.pledge_amount}
          onChange={this.update('pledge_amount')}/>
      </section>
      <section className="reward-input-row box">
        <label>Decription</label>
        <input
          className="reward-input"
          type="textarea"
          value={this.state.description}
          onChange={this.update('description')}/>
      </section>
      <section className="reward-input-row">
        <label>Limit availability</label>
        <input
          className="reward-input"
          type="number"
          value={this.state.num_allowed}
          onChange={this.update('num_allowed')}/>
      </section>
    </section>
  );
  }
}

export default RewardFormItem
