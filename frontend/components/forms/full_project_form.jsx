import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import ToggleBar from './toggle_bar_container';
import ProjectForm from './project_form_container';
import RewardForm from './reward_form_container';

class FullForm extends React.Component {



  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    debugger
    Object.keys(this.state).forEach( key => {
      if (key === "imageUrl" || (key === "image" && !this.state.image)) {
        return;
      }
      formData.append(`project[${key}]`, this.state[key]);
    });
    this.props.createProject(formData);
    this.props.createReward();
    // TODO: what goes in here
    // this.props.history.push('/');
  }

  render() {
    return (
      <section>
        <ToggleBar />

        <section className='form-render'>
            <Route path="/fullform/basics" component={ProjectForm} />
            <Route path="/fullform/rewards" component={RewardForm} />
        </section>


        <section className='bottom-bar'>
          <button className='submit-button' onClick={this.handleSubmit}>Save and continue</button>
        </section>

      </section>
    )
  }

}

export default withRouter(FullForm);
