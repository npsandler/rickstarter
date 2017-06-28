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
    <form className='full-project-form reward-item-input'>
      <h4>Reward</h4>
      <section >
        <section className="form-sub-box">
          <label>Title</label>
          <div className="right-box">
            <input
            className="reward-box"
            type="text"
            value={this.state.title}
            onChange={this.update('title')}/>
        </div>
        </section>
        <section className="form-sub-box">
          <label>Pledge Amount</label>
          <div className="right-box">
            <input
            className="reward-box"
            type="number"
            value={this.state.pledge_amount}
            onChange={this.update('pledge_amount')}/>
        </div>
        </section>
        <section className="form-sub-box box">
          <label>Decription</label>
          <div className="right-box">
            <input
            className="reward-box"
            type="textarea"
            value={this.state.description}
            onChange={this.update('description')}/>
        </div>
        </section>
        <section className="form-sub-box">
          <label>Limit availability</label>
          <div className="right-box">
            <input
            className="reward-box"
            type="number"
            value={this.state.num_allowed}
            onChange={this.update('num_allowed')}/>
        </div>
        </section>
      </section>
    </form>
  );
  }
}

export default RewardFormItem
