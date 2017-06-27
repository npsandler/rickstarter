import React from 'react';
import { withRouter } from 'react-router-dom';


class RewardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      num_allowed: null,
      pledge_amount: 0
    };
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
        <section className="full-project-create">

          <h1 className='full-header'>Set your rewards.</h1>
          <h2 className='sub-header'>Invite backers to be a part of the creative experience by offering rewards like a copy of what you’re making, a special experience, or a behind-the-scenes look into your process.</h2>

          <h4>reward</h4>
          <section className="reward-inputs">
            <ul className="errors">{this.errors()}</ul>
            <section className="reward-title-row">
              <label>Title</label>
              <input
                className="reward-input"
                type="text"
                onChange={this.update('title')}/>
            </section>
            <section className="reward-input-row">
              <label>Pledge Amount</label>
              <input
                className="reward-input"
                type="number"
                onChange={this.update('pledge_amount')}/>
            </section>
            <section className="reward-input-row box">
              <label>Decription</label>
              <input
                className="reward-input"
                type="textarea"
                onChange={this.update('description ')}/>
            </section>
            <section className="reward-input-row">
              <label>Limit availability</label>
              <input
                className="reward-input"
                type="number"
                onChange={this.update('num_allowed')}/>
            </section>

          </section>
        </section>





      );
    }
}

export default withRouter(RewardForm);
