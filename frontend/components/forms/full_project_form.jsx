import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import ToggleBar from './toggle_bar';
import ProjectForm from './project_form_container';
import RewardForm from './reward_form_container';

class FullForm extends React.Component {



  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(this.state).forEach( key => {
      if (key === "imageUrl" || (key === "image" && !this.state.image)) {
        return;
      }
      formData.append(`project[${key}]`, this.state[key]);
    });
    this.props.createProject(formData);
    // this.props.history.push('/');
  }

  // formRender() {
  //   let pathType = location.pathname.slice(1);
  //   if (pathType === (fullform/basics)) {
  //     return (
  //       <ProjectForm />
  //     );
  //   } else if (pathType === fullform/rewards) {
  //     return (
  //       <RewardForm />
  //     );
  //   }
  // }

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
