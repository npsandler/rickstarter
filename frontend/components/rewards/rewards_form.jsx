import React from 'react';
import { withRouter } from 'react-router-dom';

class RewardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.revieveRewards(this.state);
    this.props.history.push('/fullform');
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
        <section className="reward-form">
          <h4>reward</h4>
          <section className="reward-inputs">
            <ul className="errors">{errors{}}</ul>
            <section className="reward-title-row">
              <label>Title</label>
              <input
                className="reward-input"
                type="text"
                value="this.state.title"
                onChange={this.update('title')}/>
            </section>
            <section className="reward-input-row">
              <label>Pledge Amount</label>
              <input
                className="reward-input"
                type="number"
                value="this.state.pledge_amount"
                onChange={this.update('title')}/>
            </section>
            <section className="reward-input-row">
              <label>Pledge Amount</label>
              <input
                className="reward-input"
                type="number"
                value="this.state.pledge_amount"
                onChange={this.update('title')}/>
            </section>
            <section className="reward-input-row box">
              <label>Decription</label>
              <input
                className="reward-input"
                type="textarea"
                value="this.state.description"
                onChange={this.update('description ')}/>
            </section>
            <section className="reward-input-row">
              <label>Limit availability</label>
              <input
                className="reward-input"
                type="number"
                value="this.state.num_allowed"
                onChange={this.update('num_allowed')}/>
            </section>

          </section>
        </section>





      );
    }
}

export default withRouter(RewardForm);
